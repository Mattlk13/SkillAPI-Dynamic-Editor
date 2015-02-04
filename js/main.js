/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Steven Sucy
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

depend('filter');
depend('input');
depend('yaml');
depend('component', function() {

	// Set up component option lists
	setupOptionList(document.getElementById('triggerOptions'), Trigger, Type.TRIGGER);
	setupOptionList(document.getElementById('targetOptions'), Target, Type.TARGET);
	setupOptionList(document.getElementById('conditionOptions'), Condition, Type.CONDITION);
	setupOptionList(document.getElementById('mechanicOptions'), Mechanic, Type.MECHANIC);
});
depend('material', function() {
	depend('skill', function() {
		document.getElementById('skillList').addEventListener('change', function(e) {
			activeSkill.update();
			if (activeComponent)
			{
				activeComponent.update();
			}
			if (this.selectedIndex == this.length - 1)
			{
				newSkill();
			}
			else 
			{
				activeSkill = skills[this.selectedIndex];
				activeSkill.apply();
				showSkillPage('builder');
			}
		});
		document.getElementById('skillDetails').addEventListener('click', function(e) {
			activeSkill.createFormHTML();
			showSkillPage('skillForm');
		});
		document.getElementById('saveButton').addEventListener('click', function(e) {
			activeSkill.update();
			if (activeComponent)
			{
				activeComponent.update();
			}
			var data = 'loaded: false\n';
			for (var i = 0; i < skills.length; i++)
			{
				data += skills[i].getSaveString();
			}
			saveToFile('skills.yml', data);
		});
		document.getElementById('saveSkill').addEventListener('click', function(e) {
			saveToFile(activeSkill.data[0].value + '.yml', activeSkill.getSaveString());
		});
		document.getElementById('deleteSkill').addEventListener('click', function(e) {
			var list = document.getElementById('skillList');
			var index = list.selectedIndex;
			
			skills.splice(index, 1);
			if (skills.length == 0)
			{
				newSkill();
			}
			list.remove(index);
			index = Math.min(index, skills.length - 1);
			activeSkill = skills[index];
			list.selectedIndex = index;
		});
	});
	
	depend('class', function() {
		document.getElementById('classList').addEventListener('change', function(e) {
			activeClass.update();
			if (this.selectedIndex == this.length - 1)
			{
				newClass();
			}
			else 
			{
				activeClass = classes[this.selectedIndex];
				activeClass.createFormHTML();
			}
		});
		document.getElementById('saveButton').addEventListener('click', function(e) {
			activeClass.update();
			var data = 'loaded: false\n';
			for (var i = 0; i < classes.length; i++)
			{
				data += classes[i].getSaveString();
			}
			saveToFile('classes.yml', data);
		});
	});
});

function setupOptionList(div, list, type) 
{
	var x;
	for (x in list)
	{
		var e = document.createElement('h5');
		e.innerHTML = list[x].name;
		e.component = list[x];
		e.addEventListener('click', function(e) {
			if (activeComponent == activeSkill && activeSkill.usingTrigger(this.component.name)) 
			{
				showSkillPage('builder');
			}
			else
			{
				showSkillPage('skillForm');
				var component = new this.component.construct();
				component.parent = activeComponent;
				activeComponent.components.push(component);
				component.createBuilderHTML(activeComponent.html);
				component.createFormHTML();
			}
		});
		div.appendChild(e);
	}
}

var skillsActive = true;

// Set up event listeners when the page loads
window.onload = function() 
{
	document.getElementById('addTrigger').addEventListener('click', function(e) {
		activeComponent = activeSkill;
		showSkillPage('triggerChooser');
	});
	
	document.getElementById('skillTab').addEventListener('click', function(e) {
		if (!skillsActive) 
		{
			this.className = 'tab tabLeft tabActive';
			document.getElementById('classTab').className = 'tab tabRight';
			document.getElementById('skills').style.display = 'block';
			document.getElementById('classes').style.display = 'none';
			skillsActive = true;
		}
	});
	document.getElementById('classTab').addEventListener('click', function(e) {
		if (skillsActive) 
		{
			this.className = 'tab tabRight tabActive';
			document.getElementById('skillTab').className = 'tab tabLeft';
			document.getElementById('classes').style.display = 'block';
			document.getElementById('skills').style.display = 'none';
			skillsActive = false;
		}
	});
	
	var cancelButtons = document.querySelectorAll('.cancelButton');
	for (var i = 0; i < cancelButtons.length; i++)
	{
		cancelButtons[i].addEventListener('click', function(e) {
			showSkillPage('builder');
		});
	}
}

/**
 * Returns the view back to the skill builder when in the skill tab
 */
function showSkillPage(name) 
{
	setPageStyle('builder', name);
	setPageStyle('skillForm', name);
	setPageStyle('componentChooser', name);
	setPageStyle('triggerChooser', name);
}

/**
 * Sets the style for the page based on the current visible one
 */
function setPageStyle(name, visible)
{
	document.getElementById(name).style.display = (visible == name ? 'block' : 'none');
}

/**
 * Represents an attribute of a skill or class
 *
 * @param {string} key   - the config key for the attribute
 * @param {double} base  - the starting value for the attribute
 * @param {double} scale - the increase of the value per level
 *
 * @constructor
 */ 
function Attribute(key, base, scale) 
{
	this.key = key;
	this.base = base;
	this.scale = scale;
}

/**
 * Saves text data to a file locally
 *
 * Code slightly modified from this page:
 * https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
 */ 
function saveToFile(file, data) 
{
	var textFileAsBlob = new Blob([data], { type: 'text/plain;charset=utf-8' });

	var downloadLink = document.createElement("a");
	downloadLink.download = file;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = function(e) { document.body.removeChild(event.target); };
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

// Prepares for handling dropped files
document.addEventListener('dragover', function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
}, false);

// Examines dropped files and sets up loading applicable ones
document.addEventListener('drop', function(e) {
    e.stopPropagation();
    e.preventDefault();
    for (var i = 0; i < e.dataTransfer.files.length; i++) {
		var file = e.dataTransfer.files[i];
        if (file.name.indexOf('.yml') == -1) continue;
		var reader = new FileReader();
        if (file.name.indexOf('skills') == 0) {
            reader.onload = loadSkills;
        }
        else if (file.name.indexOf('classes') == 0) {
            reader.onload = loadClasses;
        }
        else {
			reader.onload = loadIndividual;
        }
        reader.readAsText(file);
    }
}, false);

// Loads an individual skill or class file
function loadIndividual(e) {
	var text = e.target.result;
	if (text.indexOf('components:') >= 0 || (text.indexOf('group:') == -1 && text.indexOf('combo:') == -1 && text.indexOf('skills:') == -1))
	{
		loadSkills(e);
	}
	else 
	{
		loadClasses(e);
	}
}

// Loads skill data from a file after it has been read
// e - event details
function loadSkills(e) {
    var text = e.target.result;
    document.activeElement.blur();
	
	// Load new skills
	var data = parseYAML(text);
	for (var key in data)
	{
		if (data[key] instanceof YAMLObject && key != 'loaded')
		{
			if (isSkillNameTaken(key))
			{
				getSkill(key).load(data[key]);
			}
			else
			{
				addSkill(key).load(data[key]);
			}
		}
	}
}

// Loads class data from a file after it has been read
// e - event details
function loadClasses(e) {
    var text = e.target.result;
    document.activeElement.blur();
	
	// Load new classes
	var data = parseYAML(text);
	for (var key in data)
	{
		if (data[key] instanceof YAMLObject && key != 'loaded' && !isClassNameTaken(key))
		{
			if (isClassNameTaken(key))
			{
				getClass(key).load(data[key]);
			}
			else
			{
				addClass(key).load(data[key]);
			}
		}
	}
}

/**
 * Loads a section of config data
 */
function loadSection(data) 
{	
	this.components = [];
	for (var x in data)
	{
		if (x == this.dataKey)
		{
			var attribs = data[x];
			for (var y in attribs)
			{
				for (var i = 0; i < this.data.length; i++)
				{
					if (this.data[i].key == y)
					{
						this.data[i].load(attribs[y]);
						break;
					}
					else if (this.data[i].key + '-base' == y)
					{
						this.data[i].loadBase(attribs[y]);
						break;
					}
					else if (this.data[i].key + '-scale' == y)
					{
						this.data[i].loadScale(attribs[y]);
						break;
					}
				}
			}
		}
		else if (x == this.componentKey)
		{
			var components = data[x];
			for (var y in components)
			{
				var type = components[y].type;
				var list;
				if (type == Type.TRIGGER)
				{
					list = Trigger;
				}
				else if (type == Type.TARGET)
				{
					list = Target;
				}
				else if (type == Type.CONDITION)
				{
					list = Condition;
				}
				else if (type == Type.MECHANIC)
				{	
					list = Mechanic;
				}
				
				var key = y;
				if (key.indexOf('-') > 0) key = key.substring(0, key.indexOf('-'));
				if (list !== undefined)
				{
					for (var z in list)
					{
						if (list[z].name.toLowerCase() == key.toLowerCase())
						{
							var component = new list[z].construct();
							component.parent = this;
							this.components.push(component);
							component.load(components[y]);
						}
					}
				}
			}
		}
		else if (this.dataKey != 'data')
		{
			for (var i = 0; i < this.data.length; i++)
			{
				if (this.data[i].key == x)
				{
					if (!this.data[i].load)
					{
						debugger;
					}
					this.data[i].load(data[x]);
					break;
				}
				else if (this.data[i].key + '-base' == x)
				{
					this.data[i].loadBase(data[x]);
					break;
				}
				else if (this.data[i].key + '-scale' == x)
				{
					this.data[i].loadScale(data[x]);
					break;
				}
			}
		}
	}
}