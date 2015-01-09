/**
 * Types of components
 */
var Type = {
	TRIGGER   : 'trigger',
	TARGET    : 'target',
	CONDITION : 'condition',
	MECHANIC  : 'mechanic'
};

/**
 * Available triggers for activating skill effects
 */
var Trigger = {
	CAST                 : { name: 'Cast',                 container: true, construct: TriggerCast               },
	CROUCH               : { name: 'Crouch',               container: true, construct: TriggerCrouch             },
	DEATH                : { name: 'Death',                container: true, construct: TriggerDeath              },
	INITIALIZE           : { name: 'Initialize',           container: true, construct: TriggerInitialize         },
	PHYSICAL_DAMAGE      : { name: 'Physical Damage',      container: true, construct: TriggerPhysicalDamage     },
	SKILL_DAMAGE         : { name: 'Skill Damage',         container: true, construct: TriggerSkillDamage        },
	TOOK_PHYSICAL_DAMAGE : { name: 'Took Physical Damage', container: true, construct: TriggerTookPhysicalDamage },
	TOOK_SKILL_DAMAGE    : { name: 'Took Skill Damage',    container: true, construct: TriggerTookSkillDamage    }
};

/**
 * Available target component data
 */ 
var Target = {
	AREA   : { name: 'Area',   container: true, construct: TargetArea   },
	LINEAR : { name: 'Linear', container: true, construct: TargetLinear },
	SELF   : { name: 'Self',   container: true, construct: TargetSelf   },
	SINGLE : { name: 'Single', container: true, construct: TargetSingle }
};

/**
 * Available condition component data
 */ 
var Condition = {
	CHANCE: { name: 'Chance', container: true, construct: ConditionChance }
};

/**
 * Available mechanic component data
 */
var Mechanic = {
	CLEANSE:  { name: 'Cleanse',  container: false, construct: MechanicCleanse  },
	COMMAND:  { name: 'Command',  container: false, construct: MechanicCommand  },
	COOLDOWN: { name: 'Cooldown', container: false, construct: MechanicCooldown },
	DAMAGE:   { name: 'Damage',   container: false, construct: MechanicDamage   },
	HEAL:     { name: 'Heal',     container: false, construct: MechanicHeal     }
};

/**
 * Represents a component of a dynamic skill
 * 
 * @param {string}    name      - name of the component
 * @param {string}    type      - type of the component
 * @param {boolean}   container - whether or not the component can contain others
 * @param {Component} [parent]  - parent of the component if any
 *
 * @constructor
 */
function Component(name, type, container, parent)
{
	this.name = name;
	this.type = type;
	this.container = container;
	this.parent = parent;
	this.html = undefined;
	this.components = [];
	this.data = [];
}

/**
 * Creates the builder HTML element for the component and
 * appends it onto the target HTML element.
 *
 * @param {Element} target - the HTML element to append the result to
 */
Component.prototype.createBuilderHTML = function(target)
{
	// Create the wrapping div with the appropriate class
	var div = document.createElement('div');
	div.className = 'component ' + this.type;
	
	// Component label
	var label = document.createElement('h3');
	label.className = this.type + 'Label';
	label.innerHTML = this.name;
	label.component = this;
	label.addEventListener('click', function(e) {
		this.component.createFormHTML();
		showSkillPage('skillForm');
	});
	div.appendChild(label);
	
	// Container components can add children so they get a button
	if (this.container) 
	{
		var add = document.createElement('div');
		add.className = 'builderButton';
		add.innerHTML = '+ Add Child';
		add.component = this;
		add.addEventListener('click', function(e) {
			activeComponent = this.component; 
			showSkillPage('componentChooser');
		});
		div.appendChild(add);
	}
	
	// Add the remove button
	var remove = document.createElement('div');
	remove.className = 'builderButton cancelButton';
	remove.innerHTML = '- Remove';
	remove.component = this;
	remove.addEventListener('click', function(e) {
		var list = this.component.parent.components;
		for (var i = 0; i < list.length; i++) 
		{
			if (list[i] == this.component)
			{
				list.splice(i, 1);
				break;
			}
		}
		this.parentNode.parentNode.removeChild(this.parentNode);
	});
	div.appendChild(remove);
	
	// Append the content
	target.appendChild(div);
	
	// Apply child components
	for (var i = 0; i < this.components.length; i++) 
	{
		this.components[i].createBuilderHTML(div);
	}
	
	this.html = div;
}

/**
 * Creates the form HTML for editing the component data and
 * applies it to the appropriate part of the page.
 */
Component.prototype.createFormHTML = function()
{
	var target = document.getElementById('skillForm');
	
	var form = document.createElement('form');
	
	var header = document.createElement('h4');
	header.innerHTML = this.name;
	form.appendChild(header);
	
	if (this.description)
	{
		var desc = document.createElement('p');
		desc.innerHTML = this.description;
		form.appendChild(desc);
	}
	
	if (this.data.length > 0) 
	{
		var h = document.createElement('hr');
		form.appendChild(h);
	}
	
	for (var i = 0; i < this.data.length; i++)
	{
		this.data[i].createHTML(form);
	}
	
	var hr = document.createElement('hr');
	form.appendChild(hr);
	
	var done = document.createElement('h5');
	done.className = 'doneButton';
	done.innerHTML = 'Done';
	done.component = this;
	done.addEventListener('click', function(e) {
		this.component.update();
		document.getElementById('skillForm').removeChild(this.component.form);
		showSkillPage('builder');
	});
	form.appendChild(done);
	
	this.form = form;
	
	target.innerHTML = '';
	target.appendChild(form);
	activeComponent = this;
}

/**
 * Updates the component using the form data if it exists
 */
Component.prototype.update = function()
{
	for (var j = 0; j < this.data.length; j++)
	{
		this.data[j].update();
	}
}

/**
 * Gets the save string for the component
 *
 * @param {string} spacing - spacing to put before the data
 */
Component.prototype.getSaveString = function(spacing)
{
	if (this.data.length == 0 && this.components.length == 0)
	{
		return spacing + this.name + ": {}\n";
	}
	var result = spacing + this.name + ":\n";
	if (this.data.length > 0)
	{
		result += spacing + '  attributes:\n';
		for (var i = 0; i < this.data.length; i++)
		{
			result += this.data[i].getSaveString(spacing + '    ');
		}
	}
	if (this.components.length > 0)
	{
		result += spacing + '  children:\n';
		for (var j = 0; j < this.components.length; j++)
		{
			result += this.components[j].getSaveString(spacing + '    ');
		}
	}
	return result;
}

// -- Trigger constructors ----------------------------------------------------- //

extend('TriggerCast', 'Component');
function TriggerCast()
{
	this.super('Cast', Type.TRIGGER, true);
	
	this.description = 'Applies skill effects when a player casts the skill using either the cast command, the skill bar, or click combos.';
}

extend('TriggerCrouch', 'Component');
function TriggerCrouch()
{
	this.super('Crouch', Type.TRIGGER, true);
	
	this.description = 'Applies skill effects when a player crouches using the shift key.';
}

extend('TriggerDeath', 'Component');
function TriggerDeath()
{
	this.super('Death', Type.TRIGGER, true);
	
	this.description = 'Applies skill effects when a player dies.';
}

extend('TriggerInitialize', 'Component');
function TriggerInitialize()
{
	this.super('Initialize', Type.TRIGGER, true);
	
	this.description = 'Applies skill effects immediately. This can be used for passive abilities.';
}

extend('TriggerPhysicalDamage', 'Component');
function TriggerPhysicalDamage()
{
	this.super('Physical Damage', Type.TRIGGER, true);
	
	this.description = 'Applies skill effects when a player deals physical (or non-skill) damage. This includes melee attacks and firing a bow.';
	
	this.data.push(new DoubleValue("Min Damage", "dmg-min", 0));
	this.data.push(new DoubleValue("Max Damage", "dmg-max", 999));
}

extend('TriggerSkillDamage', 'Component');
function TriggerSkillDamage()
{
	this.super('Skill Damage', Type.TRIGGER, true);
	
	this.description = 'Applies skill effects when a player deals damage with a skill.';
	
	this.data.push(new DoubleValue("Min Damage", "dmg-min", 0));
	this.data.push(new DoubleValue("Max Damage", "dmg-max", 999));
}

extend('TriggerTookPhysicalDamage', 'Component');
function TriggerTookPhysicalDamage()
{
	this.super('Took Physical Damage', Type.TRIGGER, true);
	
	this.description = 'Applies skill effects when a player takes physical (or non-skill) damage. This includes melee attacks and projectiles not fired by a skill.';
	
	this.data.push(new DoubleValue("Min Damage", "dmg-min", 0));
	this.data.push(new DoubleValue("Max Damage", "dmg-max", 999));
}

extend('TriggerTookSkillDamage', 'Component');
function TriggerTookSkillDamage()
{
	this.super('Took Skill Damage', Type.TRIGGER, true);
	
	this.description = 'Applies skill effects when a player takes damage from a skill other than their own.';
	
	this.data.push(new DoubleValue("Min Damage", "dmg-min", 0));
	this.data.push(new DoubleValue("Max Damage", "dmg-max", 999));
}

// -- Target constructors ------------------------------------------------------ //

extend('TargetArea', 'Component');
function TargetArea()
{
	this.super('Area', Type.TARGET, true);
	
	this.description = 'Targets all units in a radius from the current target (the casting player is the default target).';
	
	this.data.push(new AttributeValue("Radius", "radius", 3, 0));
	this.data.push(new ListValue("Group", "group", ["Ally", "Enemy", "Both"], "Enemy"));
	this.data.push(new ListValue("Through Wall", "wall", ['True', 'False'], 'False'));
}

extend('TargetLinear', 'Component');
function TargetLinear()
{
	this.super('Linear', Type.TARGET, true);
	
	this.description = 'Targets all units in a line in front of the current target (the casting player is the default target).';
	
	this.data.push(new AttributeValue("Range", "range", 5, 0));
	this.data.push(new DoubleValue("Tolerance", "tolerance", 4));
	this.data.push(new ListValue("Group", "group", ["Ally", "Enemy", "Both"], "Enemy"));
	this.data.push(new ListValue("Through Wall", "wall", ['True', 'False'], 'False'));
}

extend('TargetSelf', 'Component');
function TargetSelf()
{
	this.super('Self', Type.TARGET, true);
	
	this.description = 'Returns the current target back to the caster.';
}

extend('TargetSingle', 'Component');
function TargetSingle()
{
	this.super('Single', Type.TARGET, true);
	
	this.description = 'Targets a single unit in front of the current target (the casting player is the default target).';
	
	this.data.push(new AttributeValue("Range", "range", 5, 0));
	this.data.push(new ListValue("Group", "group", ["Ally", "Enemy", "Both"], "Enemy"));
	this.data.push(new ListValue("Through Wall", "wall", ['True', 'False'], 'False'));
}

// -- Condition constructors --------------------------------------------------- //

extend('ConditionChance', 'Component');
function ConditionChance()
{
	this.super('Chance', Type.CONDITION, true);
	
	this.description = 'Rolls a chance to apply child components.';
	
	this.data.push(new DoubleValue('Chance', 'chance', 25));
}

// -- Mechanic constructors ---------------------------------------------------- //

extend('MechanicCleanse', 'Component');
function MechanicCleanse()
{
	this.super('Cleanse', Type.MECHANIC, false);
	
	this.description = 'Cleanses negative potion or status effects from the targets.';
	
	this.data.push(new ListValue('Potion', 'potion', [ 'None', 'All', 'Blindness', 'Confusion', 'Hunger', 'Poison', 'Slow', 'Slow Digging', 'Weakness', 'Wither' ], 'All'));
	this.data.push(new ListValue('Status', 'status', [ 'None', 'All', 'Curse', 'Disarm', 'Root', 'Silence', 'Stun' ], 'All'));
}

extend('MechanicCommand', 'Component');
function MechanicCommand()
{
	this.super('Command', Type.MECHANIC, false);
	
	this.description ='Executes a command for each of the targets either from them directly by oping them or via the console using their name.';
	
	this.data.push(new StringValue('Command', 'command', ''));
	this.data.push(new ListValue('Execute Type', 'type', [ 'Console', 'OP' ], 'OP'));
}

extend('MechanicCooldown', 'Component');
function MechanicCooldown()
{
	this.super('Cooldown', Type.MECHANIC, false);
	
	this.description = "Modifies the cooldown of the target's skill(s).";
	
	this.data.push(new StringValue('Skill (or "all")', 'skill', 'all'));
	this.data.push(new ListValue('Type', 'type', [ 'Seconds', 'Percent' ], 'Seconds'));
	this.data.push(new AttributeValue('Value', 'value', -1, 0));
}

extend('MechanicDamage', 'Component');
function MechanicDamage()
{
	this.super('Damage', Type.MECHANIC, false);
	
	this.description = 'Inflicts skill damage to each target.';
	
	this.data.push(new ListValue('Type', 'type', [ 'Damage', 'Percent' ], 'Damage'));
	this.data.push(new AttributeValue("Value", "value", 3, 1));
}

extend('MechanicHeal', 'Component');
function MechanicHeal()
{
	this.super('Heal', Type.MECHANIC, false);
	
	this.description = 'Restores health to each target.';
	
	this.data.push(new AttributeValue("Health", "health", 3, 1));
}

// The active component being edited or added to
var activeComponent = undefined;
