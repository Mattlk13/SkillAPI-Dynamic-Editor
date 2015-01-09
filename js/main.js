depend('filter');
depend('input');
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
 */ 
function saveToFile(file, data) 
{
	var textFileAsBlob = new Blob([data], {type:'text/plain'});

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