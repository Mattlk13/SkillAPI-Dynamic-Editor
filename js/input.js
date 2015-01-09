/**
 * Represents a defined list of options for a value
 * that is stored as an index instead of the names of
 * the values themselves.
 * 
 * @param {string} name  - the display name of the value
 * @param {string} key   - the config key for the value
 * @param {Array}  list  - the list of available options
 * @param {Number} index - the current selected index
 *
 * @constructor
 */ 
function IndexListValue(name, key, list, index) 
{
	this.name = name;
	this.key = key;
	this.list = list;
	this.index = index;
	
	this.label = undefined;
	this.select = undefined;
	this.hidden = false;
}

/**
 * Creates the form HTML for the value and appends
 * it to the target element
 *
 * @param {Element} target - the HTML element to append to
 */ 
IndexListValue.prototype.createHTML = function(target) 
{
	this.label = document.createElement('label');
	this.label.innerHTML = this.name;
	target.appendChild(this.label);
	
	this.select = document.createElement('select');
	for (var i = 0; i < this.list.length; i++)
	{
		var option = document.createElement('option');
		option.innerHTML = this.list[i];
		this.select.add(option);
	}
	this.select.selectedIndex = this.index;
	target.appendChild(this.select);
}

/**
 * Hides the HTML elements of the value
 */
IndexListValue.prototype.hide = function()
{
	if (this.label && this.select && !this.hidden)
	{
		this.hidden = true;
		this.label.style.display = 'none';
		this.select.style.display = 'none';
	}
}

/**
 * Shows the HTML elements of the value
 */
IndexListValue.prototype.show = function()
{
	if (this.label && this.select && this.hidden)
	{
		this.hidden = false;
		this.label.style.display = 'block';
		this.select.style.display = 'block';
	}
}

/**
 * Updates the current index of the value using the HTML elements
 */ 
IndexListValue.prototype.update = function()
{
	if (this.select) 
	{
		this.index = this.select.selectedIndex;
	}
}

/**
 * Retrieves the save string for the value
 *
 * @param {string} spacing - the spacing to go before the value
 */ 
IndexListValue.prototype.getSaveString = function(spacing)
{	
	return spacing + this.key + ": " + this.index + '\n';
}

/**
 * Represents a defined list of options for a value
 * 
 * @param {string} name  - the display name of the value
 * @param {string} key   - the config key for the value
 * @param {Array}  list  - the list of available options
 * @param {Number} value - the current selected value
 *
 * @constructor
 */ 
function ListValue(name, key, list, value) 
{
	this.name = name;
	this.key = key;
	this.list = list;
	this.value = value;
	
	this.label = undefined;
	this.select = undefined;
	this.hidden = false;
}

/**
 * Creates the form HTML for the value and appends
 * it to the target element
 *
 * @param {Element} target - the HTML element to append to
 */ 
ListValue.prototype.createHTML = function(target) 
{
	this.label = document.createElement('label');
	this.label.innerHTML = this.name;
	target.appendChild(this.label);
	
	this.select = document.createElement('select');
	var selected = -1;
	for (var i = 0; i < this.list.length; i++)
	{
		var option = document.createElement('option');
		option.innerHTML = this.list[i];
		this.select.add(option);
		if (this.list[i] == this.value || (selected == -1 && this.list[i] == 'None'))
		{
			selected = i;
		}
	}
	this.select.selectedIndex = Math.max(0, selected);
	target.appendChild(this.select);
}

/**
 * Hides the HTML elements of the value
 */
ListValue.prototype.hide = function()
{
	if (this.label && this.select && !this.hidden)
	{
		this.hidden = true;
		this.label.style.display = 'none';
		this.select.style.display = 'none';
	}
}

/**
 * Shows the HTML elements of the value
 */
ListValue.prototype.show = function()
{
	if (this.label && this.select && this.hidden)
	{
		this.hidden = false;
		this.label.style.display = 'block';
		this.select.style.display = 'block';
	}
}

/**
 * Updates the current value using the HTML elements
 */ 
ListValue.prototype.update = function()
{
	if (this.select) 
	{
		this.value = this.select[this.select.selectedIndex].innerHTML;
		if (this.value == 'None')
		{
			this.value = '';
		}
	}
}

/**
 * Retrieves the save string for the value
 *
 * @param {string} spacing - the spacing to go before the value
 */ 
ListValue.prototype.getSaveString = function(spacing)
{	
	return spacing + this.key + ": '" + this.value + "'\n";
}

/**
 * Represents a scaling double value
 *
 * @param {string} name  - the display name of the value
 * @param {string} key   - the config key of the value
 * @param {Number} base  - the current starting value
 * @param {Number} scale - the current scale of the value
 *
 * @constructor
 */
function AttributeValue(name, key, base, scale)
{
	this.name = name;
	this.key = key;
	this.base = base;
	this.scale = scale;
	
	this.label = undefined;
	this.left = undefined;
	this.right = undefined;
	this.baseBox = undefined;
	this.scaleBox = undefined;
	this.hidden = false;
}

/**
 * Creates the form HTML for the value and appends
 * it to the target element
 *
 * @param {Element} target - the HTML element to append to
 */ 
AttributeValue.prototype.createHTML = function(target) 
{
	this.label = document.createElement('label');
	this.label.innerHTML = this.name;
	target.appendChild(this.label);
	
	this.baseBox = document.createElement('input');
	this.baseBox.value = this.base;
	this.baseBox.className = 'base';
	this.baseBox.addEventListener('input', filterDouble);
	target.appendChild(this.baseBox);
	
	this.left = document.createElement('label');
	this.left.innerHTML = '+ (';
	this.left.className = 'attrLabel';
	target.appendChild(this.left);
	
	this.scaleBox = document.createElement('input');
	this.scaleBox.value = this.scale;
	this.scaleBox.className = 'scale';
	this.scaleBox.addEventListener('input', filterDouble);
	target.appendChild(this.scaleBox);
	
	this.right = document.createElement('label');
	this.right.innerHTML = ')';
	this.right.className = 'attrLabel';
	target.appendChild(this.right);
}

/**
 * Hides the HTML elements of the value
 */
AttributeValue.prototype.hide = function()
{
	if (this.label && this.base && this.scale && this.left && this.right && !this.hidden)
	{
		this.hidden = true;
		this.label.style.display = 'none';
		this.baseBox.style.display = 'none';
		this.left.style.display = 'none';
		this.scaleBox.style.display = 'none';
		this.right.style.display = 'none';
	}
}

/**
 * Shows the HTML elements of the value
 */
AttributeValue.prototype.show = function()
{
	if (this.label && this.base && this.scale && this.left && this.right && this.hidden)
	{
		this.hidden = false;
		this.label.style.display = 'block';
		this.baseBox.style.display = 'block';
		this.left.style.display = 'block';
		this.scaleBox.style.display = 'block';
		this.right.style.display = 'block';
	}
}

/**
 * Updates the current values using the HTML elements
 */ 
AttributeValue.prototype.update = function()
{
	if (this.baseBox && this.scaleBox) 
	{
		this.base = Number(this.baseBox.value);
		this.scale = Number(this.scaleBox.value);
	}
}

/**
 * Retrieves the save string for the value
 *
 * @param {string} spacing - the spacing to go before the value
 */ 
AttributeValue.prototype.getSaveString = function(spacing)
{	
	return spacing + this.key + "-base: " + this.base + "\n" + spacing + this.key + "-scale: " + this.scale + "\n";
}

/**
 * Represents a fixed double value
 *
 * @param {string} name  - the display name of the value
 * @param {string} key   - the config key of the value
 * @param {Number} value - the current value
 *
 * @constructor
 */
function DoubleValue(name, key, value)
{
	this.name = name;
	this.key = key;
	this.value = value;
	
	this.label = undefined;
	this.box = undefined;
	this.hidden = false;
}

/**
 * Creates the form HTML for the value and appends
 * it to the target element
 *
 * @param {Element} target - the HTML element to append to
 */ 
DoubleValue.prototype.createHTML = function(target) 
{
	this.label = document.createElement('label');
	this.label.innerHTML = this.name;
	target.appendChild(this.label);
	
	this.box = document.createElement('input');
	this.box.value = this.value;
	this.box.addEventListener('input', filterDouble);
	target.appendChild(this.box);
}

/**
 * Hides the HTML elements of the value
 */
DoubleValue.prototype.hide = function()
{
	if (this.label && this.box && !this.hidden)
	{
		this.hidden = true;
		this.label.style.display = 'none';
		this.box.style.display = 'none';
	}
}

/**
 * Shows the HTML elements of the value
 */
DoubleValue.prototype.show = function()
{
	if (this.label && this.box && this.hidden)
	{
		this.hidden = false;
		this.label.style.display = 'block';
		this.box.style.display = 'block';
	}
}

/**
 * Updates the current value using the HTML elements
 */ 
DoubleValue.prototype.update = function()
{
	if (this.box) 
	{
		this.value = Number(this.box.value);
	}
}

/**
 * Retrieves the save string for the value
 *
 * @param {string} spacing - the spacing to go before the value
 */ 
DoubleValue.prototype.getSaveString = function(spacing)
{	
	return spacing + this.key + ": " + this.value + "\n";
}

/**
 * Represents a fixed integer value
 *
 * @param {string} name  - the display name of the value
 * @param {string} key   - the config key of the value
 * @param {Number} value - the current value
 *
 * @constructor
 */
function IntValue(name, key, value)
{
	this.name = name;
	this.key = key;
	this.value = value;
	
	this.label = undefined;
	this.box = undefined;
	this.hidden = false;
}

/**
 * Creates the form HTML for the value and appends
 * it to the target element
 *
 * @param {Element} target - the HTML element to append to
 */ 
IntValue.prototype.createHTML = function(target) 
{
	this.label = document.createElement('label');
	this.label.innerHTML = this.name;
	target.appendChild(this.label);
	
	this.box = document.createElement('input');
	this.box.value = this.value;
	this.box.addEventListener('input', filterInt);
	target.appendChild(this.box);
}

/**
 * Hides the HTML elements of the value
 */
IntValue.prototype.hide = function()
{
	if (this.label && this.box && !this.hidden)
	{
		this.hidden = true;
		this.label.style.display = 'none';
		this.box.style.display = 'none';
	}
}

/**
 * Shows the HTML elements of the value
 */
IntValue.prototype.show = function()
{
	if (this.label && this.box && this.hidden)
	{
		this.hidden = false;
		this.label.style.display = 'block';
		this.box.style.display = 'block';
	}
}

/**
 * Updates the current value using the HTML elements
 */ 
IntValue.prototype.update = function()
{
	if (this.box) 
	{
		this.value = Number(this.box.value);
	}
}

/**
 * Retrieves the save string for the value
 *
 * @param {string} spacing - the spacing to go before the value
 */ 
IntValue.prototype.getSaveString = function(spacing)
{	
	return spacing + this.key + ": " + this.value + "\n";
}

/**
 * Represents a fixed string value
 *
 * @param {string} name  - the display name of the value
 * @param {string} key   - the config key of the value
 * @param {string} value - the current value
 *
 * @constructor
 */
function StringValue(name, key, value)
{
	this.name = name;
	this.key = key;
	this.value = value;
	
	this.label = undefined;
	this.box = undefined;
	this.hidden = false;
}

/**
 * Creates the form HTML for the value and appends
 * it to the target element
 *
 * @param {Element} target - the HTML element to append to
 */ 
StringValue.prototype.createHTML = function(target) 
{
	this.label = document.createElement('label');
	this.label.innerHTML = this.name;
	target.appendChild(this.label);
	
	this.box = document.createElement('input');
	this.box.value = this.value;
	target.appendChild(this.box);
}

/**
 * Hides the HTML elements of the value
 */
StringValue.prototype.hide = function()
{
	if (this.label && this.box && !this.hidden)
	{
		this.hidden = true;
		this.label.style.display = 'none';
		this.box.style.display = 'none';
	}
}

/**
 * Shows the HTML elements of the value
 */
StringValue.prototype.show = function()
{
	if (this.label && this.box && this.hidden)
	{
		this.hidden = false;
		this.label.style.display = 'block';
		this.box.style.display = 'block';
	}
}

/**
 * Updates the current value using the HTML elements
 */ 
StringValue.prototype.update = function()
{
	if (this.box) 
	{
		this.value = this.box.value;
	}
}

/**
 * Retrieves the save string for the value
 *
 * @param {string} spacing - the spacing to go before the value
 */ 
StringValue.prototype.getSaveString = function(spacing)
{	
	return spacing + this.key + ": '" + this.value + "'\n";
}

/**
 * Represents a fixed string value
 *
 * @param {string} name  - the display name of the value
 * @param {string} key   - the config key of the value
 * @param {Array}  value - the current value
 *
 * @constructor
 */
function StringListValue(name, key, value)
{
	this.name = name;
	this.key = key;
	this.value = value;
	
	this.label = undefined;
	this.box = undefined;
	this.hidden = false;
}

/**
 * Creates the form HTML for the value and appends
 * it to the target element
 *
 * @param {Element} target - the HTML element to append to
 */ 
StringListValue.prototype.createHTML = function(target) 
{
	this.label = document.createElement('label');
	this.label.innerHTML = this.name;
	this.label.className = 'areaLabel';
	target.appendChild(this.label);
	
	var content = '';
	for (var i = 0; i < this.value.length; i++)
	{
		content += this.value[i];
		if (i != this.value.length - 1) content += '\n';
	}
	
	this.box = document.createElement('textarea');
	this.box.value = content;
	target.appendChild(this.box);
}

/**
 * Hides the HTML elements of the value
 */
StringListValue.prototype.hide = function()
{
	if (this.label && this.box && !this.hidden)
	{
		this.hidden = true;
		this.label.style.display = 'none';
		this.box.style.display = 'none';
	}
}

/**
 * Shows the HTML elements of the value
 */
StringListValue.prototype.show = function()
{
	if (this.label && this.box && this.hidden)
	{
		this.hidden = false;
		this.label.style.display = 'block';
		this.box.style.display = 'block';
	}
}

/**
 * Updates the current value using the HTML elements
 */ 
StringListValue.prototype.update = function()
{
	if (this.box) 
	{
		this.value = this.box.value.split('\n');
	}
}

/**
 * Retrieves the save string for the value
 *
 * @param {string} spacing - the spacing to go before the value
 */ 
StringListValue.prototype.getSaveString = function(spacing)
{	
	var result = spacing + this.key + ':\n';
	for (var i = 0; i < this.value.length; i++)
	{
		result += spacing + "- '" + this.value[i] + "'\n";
	}
	return result;
}
