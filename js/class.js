/**
 * Represents the data for a dynamic class
 *
 * @param {string} name - name of the class
 *
 * @constructor
 */ 
function Class(name) 
{
	// Class data
	this.data = [
		new StringValue('Name', 'name', name),
		new IntValue('Max Level', 'max-level', 40),
		new ListValue('Parent', 'parent', ['None'], 'None'),
		new ListValue('Permission', 'needs-permission', ['True', 'False'], 'False'),
		new AttributeValue('Health', 'health', 20, 0),
		new AttributeValue('Mana', 'mana', 20, 0),
		new IndexListValue('Combo', 'combo', [ 'Not All Left', 'Start Left', 'Start Right', 'Start Shift', 'All' ], 0),
		new StringListValue('Skills (one per line)', 'skills', [])
	];
}

/**
 * Creates the form HTML for editing the class and applies it to
 * the appropriate area on the page
 */
Class.prototype.createFormHTML = function()
{
	var form = document.createElement('form');
	
	var header = document.createElement('h4');
	header.innerHTML = 'Class Details';
	form.appendChild(header);
	
	var h = document.createElement('hr');
	form.appendChild(h);
	
	this.data[2].list.splice(1, this.data[2].list.length - 1);
	for (var i = 0; i < classes.length; i++)
	{
		if (classes[i] != this) 
		{
			this.data[2].list.push(classes[i].data[0].value);
		}
	}
	for (var i = 0; i < this.data.length; i++)
	{
		this.data[i].createHTML(form);
	}
	
	var hr = document.createElement('hr');
	form.appendChild(hr);
	
	var save = document.createElement('h5');
	save.innerHTML = 'Save',
	save.classData = this;
	save.addEventListener('click', function(e) {
		saveToFile(this.classData.data[0].value + '.yml', this.classData.getSaveString());
	});
	form.appendChild(save);
	
	var del = document.createElement('h5');
	del.innerHTML = 'Delete',
	del.className = 'cancelButton';
	del.addEventListener('click', function(e) {
		var list = document.getElementById('classList');
		var index = list.selectedIndex;
		
		classes.splice(index, 1);
		if (classes.length == 0)
		{
			newClass();
		}
		list.remove(index);
		index = Math.min(index, classes.length - 1);
		activeClass = classes[index];
		list.selectedIndex = index;
	});
	form.appendChild(del);
	
	var target = document.getElementById('classForm');
	target.innerHTML = '';
	target.appendChild(form);
}

/**
 * Updates the class data from the details form if it exists
 */
Class.prototype.update = function()
{
	var index;
	var list = document.getElementById('classList');
	for (var i = 0; i < classes.length; i++)
	{
		if (classes[i] == this)
		{
			index = i;
			break;
		}
	}
	for (var j = 0; j < this.data.length; j++)
	{
		this.data[j].update();
	}
	list[index].text = this.data[0].value;
}

/**
 * Creates and returns a save string for the class
 */ 
Class.prototype.getSaveString = function()
{
	var saveString = '';
	
	saveString += this.data[0].value + ":\n";
	for (var i = 0; i < this.data.length; i++)
	{
		if (this.data[i] instanceof AttributeValue) continue;
		saveString += this.data[i].getSaveString('  ');
	}
	saveString += '  attributes:\n';
	for (var i = 0; i < this.data.length; i++)
	{
		if (this.data[i] instanceof AttributeValue)
		{
			saveString += this.data[i].getSaveString('    ');
		}
	}
	return saveString;
}

/**
 * Creates a new class and switches the view to it
 */ 
function newClass()
{
	var id = 1;
	while (isClassNameTaken('Class ' + id)) id++;
	
	activeClass = new Class('Class ' + id);
	classes.push(activeClass);
	
	var option = document.createElement('option');
	option.text = 'Class ' + id;
	var list = document.getElementById('classList');
	list.add(option, list.length - 1);
	list.selectedIndex = list.length - 2;
	
	activeClass.createFormHTML();
}

/**
 * Checks whether or not a class name is currently taken
 *
 * @param {string} name - name to check for
 */ 
function isClassNameTaken(name)
{
	name = name.toLowerCase();
	for (var i = 0; i < classes.length; i++)
	{
		if (classes[i].data[0].value.toLowerCase() == name) return true;
	}
	return false;
}

var activeClass = new Class('Class 1');
var classes = [activeClass];
activeClass.createFormHTML();