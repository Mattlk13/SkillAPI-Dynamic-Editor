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
	AREA     : { name: 'Area',     container: true, construct: TargetArea     },
	CONE     : { name: 'Cone',     container: true, construct: TargetCone     },
	LINEAR   : { name: 'Linear',   container: true, construct: TargetLinear   },
	LOCATION : { name: 'Location', container: true, construct: TargetLocation },
 	SELF     : { name: 'Self',     container: true, construct: TargetSelf     },
	SINGLE   : { name: 'Single',   container: true, construct: TargetSingle   }
};

/**
 * Available condition component data
 */ 
var Condition = {
	BIOME:       { name: 'Biome',       container: true, construct: ConditionBiome      },
	CHANCE:      { name: 'Chance',      container: true, construct: ConditionChance     },
	CLASS_LEVEL: { name: 'Class Level', container: true, construct: ConditionClassLevel },
	DIRECTION:   { name: 'Direction',   container: true, construct: ConditionDirection  },
	ELEVATION:   { name: 'Elevation',   container: true, construct: ConditionElevation  },
	FIRE:        { name: 'Fire',        container: true, construct: ConditionFire       },
	FLAG:        { name: 'Flag',        container: true, construct: ConditionFlag       },
	HEALTH:      { name: 'Health',      container: true, construct: ConditionHealth     },
	ITEM:        { name: 'Item',        container: true, construct: ConditionItem       },
	LIGHT:       { name: 'Light',       container: true, construct: ConditionLight      },
	LORE:        { name: 'Lore',        container: true, construct: ConditionLore       },
	MANA:        { name: 'Mana',        container: true, construct: ConditionMana       },
	NAME:        { name: 'Name',        container: true, construct: ConditionName       },
	POTION:      { name: 'Potion',      container: true, construct: ConditionPotion     },
	SKILL_LEVEL: { name: 'Skill Level', container: true, construct: ConditionSkillLevel },
	STATUS:      { name: 'Status',      container: true, construct: ConditionStatus     },
	TIME:        { name: 'Time',        container: true, construct: ConditionTime       },
	TOOL:        { name: 'Tool',        container: true, construct: ConditionTool       },
	WATER:       { name: 'Water',       container: true, construct: ConditionWater      }
};

/**
 * Available mechanic component data
 */
var Mechanic = {
	CLEANSE:             { name: 'Cleanse',             container: false, construct: MechanicCleanse            },
	COMMAND:             { name: 'Command',             container: false, construct: MechanicCommand            },
	COOLDOWN:            { name: 'Cooldown',            container: false, construct: MechanicCooldown           },
	DAMAGE:              { name: 'Damage',              container: false, construct: MechanicDamage             },
	DAMAGE_BUFF:         { name: 'Damage Buff',         container: false, construct: MechanicDamageBuff         },
	DAMAGE_LORE:         { name: 'Damage Lore',         container: false, construct: MechanicDamageLore         },
	DEFENSE_BUFF:        { name: 'Defense Buff',        container: false, construct: MechanicDefenseBuff        },
	DELAY:               { name: 'Delay',               container: true,  construct: MechanicDelay              },
	FIRE:                { name: 'Fire',                container: false, construct: MechanicFire               },
	FLAG:                { name: 'Flag',                container: false, construct: MechanicFlag               },
	FLAG_CLEAR:          { name: 'Flag Clear',          container: false, construct: MechanicFlagClear          },
	FLAG_TOGGLE:         { name: 'Flag Toggle',         container: false, construct: MechanicFlagToggle         },
	HEAL:                { name: 'Heal',                container: false, construct: MechanicHeal               },
	ITEM_PROJECTILE:     { name: 'Item Projectile',     container: true,  construct: MechanicItemProjectile     },
	LAUNCH:              { name: 'Launch',              container: false, construct: MechanicLaunch             },
	LIGHTNING:           { name: 'Lightning',           container: false, construct: MechanicLightning          },
	MANA:                { name: 'Mana',                container: false, construct: MechanicMana               },
	PARTICLE:            { name: 'Particle',            container: false, construct: MechanicParticle           },
	PARTICLE_PROJECTILE: { name: 'Particle Projectile', container: true,  construct: MechanicParticleProjectile },
	PASSIVE:             { name: 'Passive',             container: true,  construct: MechanicPassive            },
	PERMISSION:          { name: 'Permission',          container: false, construct: MechanicPermission         },
	POTION:              { name: 'Potion',              container: false, construct: MechanicPotion             },
	PROJECTILE:          { name: 'Projectile',          container: true,  construct: MechanicProjectile         },
	PUSH:                { name: 'Push',                container: false, construct: MechanicPush               },
	REPEAT:              { name: 'Repeat',              container: true,  construct: MechanicRepeat             },
	SOUND:               { name: 'Sound',               container: false, construct: MechanicSound              },
	STATUS:              { name: 'Status',              container: false, construct: MechanicStatus             },
	WARP:                { name: 'Warp',                container: false, construct: MechanicWarp               },
	WARP_LOC:            { name: 'Warp Location',       container: false, construct: MechanicWarpLoc            },
	WARP_RANDOM:         { name: 'Warp Random',         container: false, construct: MechanicWarpRandom         },
	WARP_TARGET:         { name: 'Warp Target',         container: false, construct: MechanicWarpTarget         },
	WOLF:                { name: 'Wolf',                container: true,  construct: MechanicWolf               }
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
	
	this.dataKey = 'data';
	this.componentKey = 'children';
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
	this.data[i].hidden = false;
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
	
	for (var i = 0; i < this.data.length; i++)
	{
		this.data[i].applyRequireValues();
	}
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
	var result = spacing + this.name + ":\n";
	result += spacing + "  type: '" + this.type + "'\n";
	if (this.data.length > 0)
	{
		result += spacing + '  data:\n';
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

/**
 * Loads component data from the config lines stating at the given index
 *
 * @param {YAMLObject} data - the data to load
 *
 * @returns {Number} the index of the last line of data for this component
 */
Component.prototype.load = loadSection;

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
	
	this.description = 'Applies skill effects when a player starts or stops crouching using the shift key.';
	
	this.data.push(new ListValue('Type', 'type', [ 'Start Crouching', 'Stop Crouching' ], 'Start Crouching')
		.setTooltip('Whether or not you want to apply components when crouching or not crouching')
	);
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
	
	this.data.push(new ListValue('Type', 'type', [ 'Both', 'Melee', 'Projectile' ], 'Both')
		.setTooltip('The type of damage dealt')
	);
	this.data.push(new DoubleValue("Min Damage", "dmg-min", 0)
		.setTooltip('The minimum damage that needs to be dealt')
	);
	this.data.push(new DoubleValue("Max Damage", "dmg-max", 999)
		.setTooltip('The maximum damage that needs to be dealt')
	);
}

extend('TriggerSkillDamage', 'Component');
function TriggerSkillDamage()
{
	this.super('Skill Damage', Type.TRIGGER, true);
	
	this.description = 'Applies skill effects when a player deals damage with a skill.';
	
	this.data.push(new DoubleValue("Min Damage", "dmg-min", 0)
		.setTooltip('The minimum damage that needs to be dealt')
		
	);
	this.data.push(new DoubleValue("Max Damage", "dmg-max", 999)
		.setTooltip('The maximum damage that needs to be dealt')
	);
}

extend('TriggerTookPhysicalDamage', 'Component');
function TriggerTookPhysicalDamage()
{
	this.super('Took Physical Damage', Type.TRIGGER, true);
	
	this.description = 'Applies skill effects when a player takes physical (or non-skill) damage. This includes melee attacks and projectiles not fired by a skill.';
	
	this.data.push(new ListValue('Type', 'type', [ 'Both', 'Melee', 'Projectile' ], 'Both')
		.setTooltip('The type of damage dealt')
	);
	this.data.push(new DoubleValue("Min Damage", "dmg-min", 0)
		.setTooltip('The minimum damage that needs to be dealt')
	);
	this.data.push(new DoubleValue("Max Damage", "dmg-max", 999)
		.setTooltip('The maximum damage that needs to be dealt')
	);
}

extend('TriggerTookSkillDamage', 'Component');
function TriggerTookSkillDamage()
{
	this.super('Took Skill Damage', Type.TRIGGER, true);
	
	this.description = 'Applies skill effects when a player takes damage from a skill other than their own.';
	
	this.data.push(new DoubleValue("Min Damage", "dmg-min", 0)
		.setTooltip('The minimum damage that needs to be dealt')
	);
	this.data.push(new DoubleValue("Max Damage", "dmg-max", 999)
		.setTooltip('The maximum damage that needs to be dealt')
	);
}

// -- Target constructors ------------------------------------------------------ //

extend('TargetArea', 'Component');
function TargetArea()
{
	this.super('Area', Type.TARGET, true);
	
	this.description = 'Targets all units in a radius from the current target (the casting player is the default target).';
	
	this.data.push(new AttributeValue("Radius", "radius", 3, 0)
		.setTooltip('The radius of the area to target')
	);
	this.data.push(new ListValue("Group", "group", ["Ally", "Enemy", "Both"], "Enemy")
		.setTooltip('The alignment of targets to get')
	);
	this.data.push(new ListValue("Through Wall", "wall", ['True', 'False'], 'False')
		.setTooltip('Whether or not to allow targets to be on the other side of a wall')
	);
	this.data.push(new ListValue("Include Caster", "caster", [ 'True', 'False' ], 'False')
		.setTooltip('Whether or not to include the caster in the target list')
	);
	this.data.push(new AttributeValue("Max Targets", "max", 99, 0)
		.setTooltip('The max amount of targets to apply children to')
	);
}

extend('TargetCone', 'Component');
function TargetCone()
{
	this.super('Cone', Type.TARGET, true);
	
	this.description = 'Targets all units in a line in front of the current target (the casting player is the default target).';
	
	this.data.push(new AttributeValue("Range", "range", 5, 0)
		.setTooltip('The max distance any target can be')
	);
	this.data.push(new AttributeValue("Angle", "angle", 90, 0)
		.setTooltip('The angle of the cone arc')
	);
	this.data.push(new ListValue("Group", "group", ["Ally", "Enemy", "Both"], "Enemy")
		.setTooltip('The alignment of targets to get')
	);
	this.data.push(new ListValue("Through Wall", "wall", ['True', 'False'], 'False')
		.setTooltip('Whether or not to allow targets to be on the other side of a wall')
	);
	this.data.push(new ListValue("Include Caster", "caster", [ 'True', 'False' ], 'False')
		.setTooltip('Whether or not to include the caster in the target list')
	);
	this.data.push(new AttributeValue("Max Targets", "max", 99, 0)
		.setTooltip('The max amount of targets to apply children to')
	);
}

extend('TargetLinear', 'Component');
function TargetLinear()
{
	this.super('Linear', Type.TARGET, true);
	
	this.description = 'Targets all units in a line in front of the current target (the casting player is the default target).';
	
	this.data.push(new AttributeValue("Range", "range", 5, 0)
		.setTooltip('The max distance any target can be')
	);
	this.data.push(new DoubleValue("Tolerance", "tolerance", 4)
		.setTooltip('How lenient the targeting is. Larger numbers allow easier targeting')
	);
	this.data.push(new ListValue("Group", "group", ["Ally", "Enemy", "Both"], "Enemy")
		.setTooltip('The alignment of targets to get')
	);
	this.data.push(new ListValue("Through Wall", "wall", ['True', 'False'], 'False')
		.setTooltip('Whether or not to allow targets to be on the other side of a wall')
	);
	this.data.push(new ListValue("Include Caster", "caster", [ 'True', 'False' ], 'False')
		.setTooltip('Whether or not to include the caster in the target list')
	);
	this.data.push(new AttributeValue("Max Targets", "max", 99, 0)
		.setTooltip('The max amount of targets to apply children to')
	);
}

extend('TargetLocation', 'Component');
function TargetLocation()
{
	this.super('Location', Type.TARGET, true);
	
	this.description = 'Targets the reticle location of the target or caster. Combine this with another targeting type for ranged area effects.';
	
	this.data.push(new AttributeValue('Range', 'range', 5, 0)
		.setTooltip('The max distance the location can be')
	);
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
	
	this.data.push(new AttributeValue("Range", "range", 5, 0)
		.setTooltip('The max distance any target can be')
	);
	this.data.push(new DoubleValue("Tolerance", "tolerance", 4)
		.setTooltip('How lenient the targeting is. Larger numbers allow easier targeting')
	);
	this.data.push(new ListValue("Group", "group", ["Ally", "Enemy", "Both"], "Enemy")
		.setTooltip('The alignment of targets to get')
	);
	this.data.push(new ListValue("Through Wall", "wall", ['True', 'False'], 'False')
		.setTooltip('Whether or not to allow targets to be on the other side of a wall')
	);
}

// -- Condition constructors --------------------------------------------------- //

extend('ConditionBiome', 'Component');
function ConditionBiome()
{
	this.super('Biome', Type.CONDITION, true);
	
	this.description = 'Applies child components when in a specified biome.';
	
	this.data.push(new ListValue('Type', 'type', [ 'In Biome', 'Not In Biome' ], 'In Biome'));
	this.data.push(new ListValue('Biome', 'biome', [ 'Beach', 'Desert', 'Desert Hills', 'Extreme Hills', 'Forest', 'Frozen Ocean', 'Frozen River', 'Hell', 'Ice Mountains', 'Ice Plains', 'Jungle', 'Jungle Hills', 'Mushroom Island', 'Mushroom Shore', 'Ocean', 'Plains', 'River', 'Sky', 'Small Mountains', 'Swampland', 'Taiga', 'Taiga Hills' ], 'Beach'));
}

extend('ConditionChance', 'Component');
function ConditionChance()
{
	this.super('Chance', Type.CONDITION, true);
	
	this.description = 'Rolls a chance to apply child components.';
	
	this.data.push(new AttributeValue('Chance', 'chance', 25, 0));
}

extend('ConditionClassLevel', 'Component');
function ConditionClassLevel()
{
	this.super('Class Level', Type.CONDITION, true);
	
	this.description = 'Applies child components when the level of the class with this skill is within the range. This only checks the level of the caster, not the targets.';
	
	this.data.push(new IntValue('Min Level', 'min-level', 2));
	this.data.push(new IntValue('Max Level', 'max-level', 99));
}

extend('ConditionDirection', 'Component');
function ConditionDirection()
{
	this.super('Direction', Type.CONDITION, true);
	
	this.description = 'Applies child components when the target or caster is facing the correct direction relative to the other.';
	
	this.data.push(new ListValue('Type', 'type', [ 'Target', 'Caster' ], 'Target'));
	this.data.push(new ListValue('Direction', 'direction', [ 'Away', 'Towards' ], 'Away'));
}

extend('ConditionElevation', 'Component');
function ConditionElevation()
{
	this.super('Elevation', Type.CONDITION, true);
	
	this.description = 'Applies child components when the elevation of the target matches the settings.';
	
	this.data.push(new ListValue('Type', 'type', [ 'Normal', 'Difference' ], 'Normal'));
	this.data.push(new AttributeValue('Min Value', 'min-value', 0, 0));
	this.data.push(new AttributeValue('Max Value', 'max-value', 255, 0));
}

extend('ConditionFire', 'Component');
function ConditionFire()
{
	this.super('Fire', Type.CONDITION, true);
	
	this.description = 'Applies child components when the target is on fire.';
	
	this.data.push(new ListValue('Type', 'type', [ 'On Fire', 'Not On Fire' ], 'On Fire'));
}

extend('ConditionFlag', 'Component');
function ConditionFlag()
{
	this.super('Flag', Type.CONDITION, true);
	
	this.description = 'Applies child components when the target is marked by the appropriate flag.';
	
	this.data.push(new ListValue('Type', 'type', [ 'Set', 'Not Set' ], 'Set'));
	this.data.push(new StringValue('Key', 'key', 'key'));
}

extend('ConditionHealth', 'Component');
function ConditionHealth()
{
	this.super('Health', Type.CONDITION, true);

	this.description = "Applies child components when the target's health matches the settings.";
	
	this.data.push(new ListValue('Type', 'type', [ 'Health', 'Percent', 'Difference', 'Difference Percent' ], 'Health'));
	this.data.push(new AttributeValue('Min Value', 'min-value', 0, 0));
	this.data.push(new AttributeValue('Max Value', 'max-value', 10, 2));
}

extend('ConditionItem', 'Component');
function ConditionItem()
{
	this.super('Item', Type.CONDITION, true);
	this.description = "Applies child components when the target is wielding an item matching the given material.";
	
	this.data.push(new ListValue('Item', 'material', materialList, 'Stick'));
}

extend('ConditionLight', 'Component');
function ConditionLight()
{
	this.super('Light', Type.CONDITION, true);
	
	this.description = "Applies child components when the light level at the target's location matches the settings.";
	
	this.data.push(new AttributeValue('Min Light', 'min-light', 0, 0));
	this.data.push(new AttributeValue('Max Light', 'max-light', 16, 16));
}

extend('ConditionLore', 'Component');
function ConditionLore()
{
	this.super('Lore', Type.CONDITION, true);
	
	this.description = 'Applies child components when the held item of the caster contains a line with the given string';
	
	this.data.push(new ListValue('Regex', 'regex', [ 'True', 'False' ], 'False'));
	this.data.push(new StringValue('String', 'str', 'text'));
}

extend('ConditionMana', 'Component');
function ConditionMana()
{
	this.super('Mana', Type.CONDITION, true);

	this.description = "Applies child components when the target's mana matches the settings.";
	
	this.data.push(new ListValue('Type', 'type', [ 'Mana', 'Percent', 'Difference', 'Difference Percent' ], 'Health'));
	this.data.push(new AttributeValue('Min Value', 'min-value', 0, 0));
	this.data.push(new AttributeValue('Max Value', 'max-value', 10, 2));
}

extend('ConditionName', 'Component');
function ConditionName()
{
	this.super('Name', Type.CONDITION, true);
	
	this.description = 'Applies child components when the target has a name matching the settings.';
	
	this.data.push(new ListValue('Contains Text', 'contains', [ 'True', 'False' ], 'True'));
	this.data.push(new ListValue('Regex', 'regex', [ 'True', 'False' ], 'False'));
	this.data.push(new StringValue('Text', 'text', 'text'));
}

extend('ConditionPotion', 'Component');
function ConditionPotion()
{
	this.super('Potion', Type.CONDITION, true);
	
	this.description = 'Applies child components when the target has the potion effect.';
	
	this.data.psuh(new ListValue('Type', 'type', [ 'Active', 'Not Active' ], 'Active'));
	this.data.push(new ListValue('Potion', 'potion', [ 'Any', 'Absorption', 'Blindness', 'Confusion', 'Damage Resistance', 'Fast Digging', 'Fire Resistance', 'Health Boost', 'Hunger', 'Increase Damage', 'Invisibility', 'Jump', 'Night Vision', 'Poison', 'Regeneration', 'Saturation', 'Slow', 'Slow Digging', 'Speed', 'Water Breathing', 'Weakness', 'Wither' ], 'Any'));
}

extend('ConditionSkillLevel', 'Component');
function ConditionSkillLevel(skill)
{
	this.super('Skill Level', Type.CONDITION, true);
	
	this.description = 'Applies child components when the skill level is with the range. This checks the skill level of the caster, not the targets.';
	
	this.data.push(new StringValue('Skill', 'skill', skill));
	this.data.push(new IntValue('Min Level', 'min-level', 2));
	this.data.push(new IntValue('Max Level', 'max-level', 99));
}

extend('ConditionStatus', 'Component');
function ConditionStatus()
{
	this.super('Status', Type.CONDITION, true);
	
	this.description = 'Applies child components when the target has the status condition.';
	
	this.data.push(new ListValue('Type', 'type', [ 'Active', 'Not Active' ], 'Active'));
	this.data.push(new ListValue('Status', 'status', [ 'Any', 'Curse', 'Disarm', 'Root', 'Silence', 'Stun' ], 'Any'));
}

extend('ConditionTime', 'Component');
function ConditionTime()
{
	this.super('Time', Type.CONDITION, true);
	
	this.description = 'Applies child components when the server time matches the settings.';
	
	this.data.push(new ListValue('Time', 'time', [ 'Day', 'Night' ], 'Day'));
}

extend('ConditionTool', 'Component');
function ConditionTool()
{
	this.super('Tool', Type.CONDITION, true);
	
	this.description = 'Applies child components when the target is wielding a matching tool.';
	
	this.data.push(new ListValue('Material', 'material', [ 'Any', 'Wood', 'Stone', 'Iron', 'Gold', 'Diamond' ], 'Any'));
	this.data.push(new ListValue('Tool', 'tool', [ 'Any', 'Axe', 'Hoe', 'Pickaxe', 'Shovel', 'Sword' ], 'Any'));
}

extend('ConditionWater', 'Component');
function ConditionWater()
{
	this.super('Water', Type.CONDITION, true);
	
	this.description = 'Applies child components when the target is in or out of water, depending on the settings.';
	
	this.data.push(new ListValue('State', 'state', [ 'In Water', 'Out Of Water' ], 'In Water'));
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
	
	this.description = "Lowers the cooldowns of the target's skill(s). If you provide a negative amount, it will increase the cooldown.";
	
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

extend('MechanicDamageBuff', 'Component');
function MechanicDamageBuff()
{
	this.super('Damage Buff', Type.MECHANIC, false);
	
	this.description = 'Modifies the physical damage dealt by each target by a multiplier or a flat amount for a limited duration. Negative flat amounts or multipliers less than one will reduce damage dealt while the opposite will increase damage dealt.';
	
	this.data.push(new ListValue('Type', 'type', [ 'Flat', 'Multiplier' ], 'Flat'));
	this.data.push(new AttributeValue('Value', 'value', 1, 0));
	this.data.push(new AttributeValue('Seconds', 'seconds', 3, 0));
}

extend('MechanicDamageLore', 'Component');
function MechanicDamageLore()
{
	this.super('Damage Lore', Type.MECHANIC, false);
	
	this.description = 'Damages each target based on a value found in the lore of the item held by the caster.';
	
	this.data.push(new StringValue('Regex', 'regex', 'Damage: {value}'));
	this.data.push(new AttributeValue('Multiplier', 'multiplier', 1, 0));
}

extend('MechanicDefenseBuff', 'Component');
function MechanicDefenseBuff()
{
	this.super('Defense Buff', Type.MECHANIC, false);
	
	this.description = 'Modifies the physical damage taken by each target by a multiplier or a flat amount for a limited duration. Negative flag amounts or multipliers less than one will reduce damage taken while the opposite will increase damage taken.';
	
	this.data.push(new ListValue('Type', 'type', [ 'Flat', 'Multiplier' ], 'Flat'));
	this.data.push(new AttributeValue('Value', 'value', 1, 0));
	this.data.push(new AttributeValue('Seconds', 'seconds', 3, 0));
}

extend('MechanicDelay', 'Component');
function MechanicDelay()
{
	this.super('Delay', Type.MECHANIC, true);
	
	this.description = 'Applies child components after a delay.';
	
	this.data.push(new AttributeValue('Delay', 'delay', 2, 0));
}

extend('MechanicFire', 'Component');
function MechanicFire()
{
	this.super('Fire', Type.MECHANIC, false);
	
	this.description = 'Sets the target on fire for a duration.';
	
	this.data.push(new AttributeValue('Seconds', 'seconds', 3, 1));
}

extend('MechanicFlag', 'Component');
function MechanicFlag()
{
	this.super('Flag', Type.MECHANIC, false);
	
	this.description = 'Marks the target with a flag for a duration. Flags can be checked by other triggers, spells or the related for interesting synergies and effects.';
	
	this.data.push(new StringValue('Key', 'key', 'key'));
	this.data.push(new AttributeValue('Seconds', 'seconds', 3, 1)); 
}

extend('MechanicFlagClear', 'Component');
function MechanicFlagClear()
{
	this.super('Flag Clear', Type.MECHANIC, false);
	
	this.description = 'Clears a flag from the target.';
	
	this.data.push(new StringValue('Key', 'key', 'key'));
}

extend('MechanicFlagToggle', 'Component');
function MechanicFlagToggle()
{
	this.super('Flag Toggle', Type.MECHANIC, false);
	
	this.description = 'Toggles a flag on or off for the target. This can be used to make toggle effects.';
	
	this.data.push(new StringValue('Key', 'key', 'key'));
}

extend('MechanicHeal', 'Component');
function MechanicHeal()
{
	this.super('Heal', Type.MECHANIC, false);
	
	this.description = 'Restores health to each target.';
	
	this.data.push(new ListValue("Type", "type", [ "Health", "Percent" ], "Health"));
	this.data.push(new AttributeValue("Value", "value", 3, 1));
}

extend('MechanicItemProjectile', 'Component');
function MechanicItemProjectile()
{
	this.super('Item Projectile', Type.MECHANIC, true);
	
	this.description = 'Launches a projectile using an item as its visual that applies child components upon landing. The target passed on will be the collided target or the location where it landed if it missed.';
	
	this.data.push(new ListValue('Spread', 'spread', [ 'Cone', 'Horizontal Cone', 'Rain' ], 'Cone'));
	this.data.push(new ListValue('Item', 'item', materialList, 'Jack O Lantern')),
	this.data.push(new IntValue('Item Data', 'item-data', 0)),
	this.data.push(new AttributeValue('Speed', 'velocity', 3, 0));
	this.data.push(new AttributeValue('Amount', 'amount', 1, 0));
	
	// Cone values
	this.data.push(new AttributeValue('Angle', 'angle', 30, 0).requireValue('spread', [ 'Cone', 'Horizontal Cone' ]));
	
	// Rain values
	this.data.push(new AttributeValue('Height', 'height', 8, 0).requireValue('spread', [ 'Rain' ]));
	this.data.push(new AttributeValue('Radius', 'radius', 2, 0).requireValue('spread', [ 'Rain' ]));
}

extend('MechanicLaunch', 'Component');
function MechanicLaunch()
{
	this.super('Launch', Type.MECHANIC, false);
	
	this.description = 'Launches the target relative to their forward direction. Use negative values to go in the opposite direction (e.g. negative forward makes the target go backwards)';
	
	this.data.push(new AttributeValue('Forward Speed', 'forward', 0, 0));
	this.data.push(new AttributeValue('Upward Speed', 'upward', 2, 0.5));
	this.data.push(new AttributeValue('Right Speed', 'right', 0, 0));
}

extend('MechanicLightning', 'Component');
function MechanicLightning()
{
	this.super('Lightning', Type.MECHANIC, false);
	
	this.description = 'Strikes lightning on or near the target. Negative offsets will offset it in the opposite direction (e.g. negative forward offset puts it behind the target).';
	
	this.data.push(new AttributeValue('Forward Offset', 'forward', 0, 0));
	this.data.push(new AttributeValue('Right Offset', 'right', 0, 0));
}

extend('MechanicMana', 'Component');
function MechanicMana()
{
	this.super('Mana', Type.MECHANIC, false);
	
	this.description = 'Restores or deducts mana from the target.';
	
	this.data.push(new ListValue('Type', 'type', [ 'Mana', 'Percent' ], 'Mana'));
	this.data.push(new AttributeValue('Value', 'value', 1, 0));
}

extend('MechanicParticle', 'Component');
function MechanicParticle()
{
	this.super('Particle', Type.MECHANIC, false);
	
	this.description = 'Plays a particle effect about the target.';
	
	this.data.push(new ListValue('Particle', 'particle', [ 'Angry Villager', 'Bubble', 'Cloud', 'Death', 'Death Suspend', 'Drip Lava', 'Drip Water', 'Enchantment Table', 'Ender Signal', 'Explode', 'Firework Spark', 'Flame', 'Footstep', 'Happy Villager', 'Heart', 'Huge Explosion', 'Hurt', 'Instant Spell', 'Large Explode', 'Large Smoke', 'Lava', 'Magic Crit', 'Mob Spell', 'Mob Spell Ambient', 'Mobspawner Flames', 'Note', 'Potal', 'Potion Break', 'Red Dust', 'Sheep Eat', 'Slime', 'Smoke', 'Snowball Poof', 'Snow Shovel', 'Spell', 'Splash', 'Suspend', 'Town Aura', 'Witch Magic', 'Wolf Hearts', 'Wolf Shake', 'Wolf Smoke' ], 'Angry Villager'));
	this.data.push(new ListValue('Arrangement', 'arrangement', [ 'Circle', 'Hemisphere', 'Sphere' ], 'Circle'));
	this.data.push(new AttributeValue('Radius', 'radius', 4, 0));
	this.data.push(new AttributeValue('Amount', 'amount', 20, 0));
	
	// Circle arrangement direction
	this.data.push(new ListValue('Circle Direction', 'direction', [ 'XY', 'XZ', 'YZ' ], 'XZ').requireValue('arrangement', [ 'Circle' ]));
	
	// Bukkit particle data value
	this.data.push(new IntValue('Data', 'data', 0).requireValue('particle', [ 'Smoke', 'Ender Signal', 'Mobspawner Flames', 'Potion Break' ]));
	
	// Reflection particle data
	var reflectList = [ 'Angry Villager', 'Bubble', 'Cloud', 'Crit', 'Death Suspend', 'Drip Lava', 'Drip Water', 'Enchantment Table', 'Explode', 'Fireworks Spark', 'Flame', 'Footstep', 'Happy Villager', 'Hear', 'Huge Explosion', 'Instant Spell', 'Large Explode', 'Large Smoke', 'Lava', 'Magic Crit', 'Mob Spell', 'Mob Spell Ambient', 'Note', 'Portal', 'Red Dust', 'Slime', 'Snowball Poof', 'Snow Shovel', 'Spell', 'Splash', 'Suspend', 'Town Aura', 'Witch Magic' ];
	this.data.push(new IntValue('Visible Radius', 'visible-radius', 25).requireValue('particle', reflectList));
	this.data.push(new DoubleValue('DX', 'dx', 0).requireValue('particle', reflectList));
	this.data.push(new DoubleValue('DY', 'dy', 0).requireValue('particle', reflectList));
	this.data.push(new DoubleValue('DZ', 'dz', 0).requireValue('particle', reflectList));
	this.data.push(new DoubleValue('Particle Speed', 'speed', 1).requireValue('particle', reflectList));
}

extend('MechanicParticleProjectile', 'Component');
function MechanicParticleProjectile()
{
	this.super('Particle Projectile', Type.MECHANIC, true);
	
	this.description = 'Launches a projectile using particles as its visual that applies child components upon landing. The target passed on will be the collided target or the location where it landed if it missed.';
	
	this.data.push(new ListValue('Spread', 'spread', [ 'Cone', 'Horizontal Cone', 'Rain' ], 'Cone'));
	this.data.push(new ListValue('Particle', 'particle', [ 'Angry Villager', 'Bubble', 'Cloud', 'Death Suspend', 'Drip Lava', 'Drip Water', 'Enchantment Table', 'Ender Signal', 'Explode', 'Firework Spark', 'Flame', 'Flames', 'Footstep', 'Happy Villager', 'Heart', 'Huge Explosion', 'Instant Spell', 'Large Explode', 'Large Smoke', 'Lava', 'Magic Crit', 'Mob Spell', 'Mob Spell Ambient', 'Note', 'Potal', 'Potion Break', 'Red Dust', 'Slime', 'Smoke', 'Snowball Poof', 'Snow Shovel', 'Spell', 'Splash', 'Suspend', 'Town Aura', 'Witch Magic' ], 'Angry Villager'));
	this.data.push(new DoubleValue('Frequency', 'frequency', 0.25));
	this.data.push(new AttributeValue('Speed', 'velocity', 3, 0));
	this.data.push(new AttributeValue('Angle', 'angle', 30, 0));
	this.data.push(new AttributeValue('Amount', 'amount', 1, 0));
	this.data.push(new DoubleValue('Lifespan', 'lifespan', 3));
	
	// Bukkit particle data value
	this.data.push(new IntValue('Data', 'data', 0).requireValue('particle', [ 'Smoke', 'Ender Signal', 'Mobspawner Flames', 'Potion Break' ]));
	
	// Reflection particle data
	var reflectList = [ 'Angry Villager', 'Bubble', 'Cloud', 'Crit', 'Death Suspend', 'Drip Lava', 'Drip Water', 'Enchantment Table', 'Explode', 'Fireworks Spark', 'Flame', 'Footstep', 'Happy Villager', 'Hear', 'Huge Explosion', 'Instant Spell', 'Large Explode', 'Large Smoke', 'Lava', 'Magic Crit', 'Mob Spell', 'Mob Spell Ambient', 'Note', 'Portal', 'Red Dust', 'Slime', 'Snowball Poof', 'Snow Shovel', 'Spell', 'Splash', 'Suspend', 'Town Aura', 'Witch Magic' ];
	this.data.push(new IntValue('Visible Radius', 'visible-radius', 25).requireValue('particle', reflectList));
	this.data.push(new DoubleValue('DX', 'dx', 0).requireValue('particle', reflectList));
	this.data.push(new DoubleValue('DY', 'dy', 0).requireValue('particle', reflectList));
	this.data.push(new DoubleValue('DZ', 'dz', 0).requireValue('particle', reflectList));
	this.data.push(new DoubleValue('Particle Speed', 'speed', 1).requireValue('particle', reflectList));
	
	// Cone values
	this.data.push(new AttributeValue('Angle', 'angle', 30, 0).requireValue('spread', [ 'Cone', 'Horizontal Cone' ]));
	
	// Rain values
	this.data.push(new AttributeValue('Height', 'height', 8, 0).requireValue('spread', [ 'Rain' ]));
	this.data.push(new AttributeValue('Radius', 'radius', 2, 0).requireValue('spread', [ 'Rain' ]));
}

extend('MechanicPassive', 'Component');
function MechanicPassive()
{
	this.super('Passive', Type.MECHANIC, true);
	
	this.description = 'Applies child components continuously every period. The seconds value below is the period or how often it applies.';
	
	this.data.push(new DoubleValue('Seconds', 'seconds', 1));
}

extend('MechanicPermission', 'Component');
function MechanicPermission()
{
	this.super('Permission', Type.MECHANIC, true);
	
	this.description = 'Grants each player target a permission for a limited duration. This mechanic requires Vault with an accompanying permissions plugin in order to work.';
	
	this.data.push(new StringValue('Permission', 'perm', 'plugin.perm.key'));
	this.data.push(new AttributeValue('Seconds', 'seconds', 3));
}

extend('MechanicPotion', 'Component');
function MechanicPotion()
{
	this.super('Potion', Type.MECHANIC, false);
	
	this.description = 'Applies a potion effect to the target for a duration.';
	
	this.data.push(new ListValue('Potion', 'potion', [ 'Absorption', 'Blindness', 'Confusion', 'Damage Resistance', 'Fast Digging', 'Fire Resistance', 'Health Boost', 'Hunger', 'Increase Damage', 'Invisibility', 'Jump', 'Night Vision', 'Poison', 'Regeneration', 'Saturation', 'Slow', 'Slow Digging', 'Speed', 'Water Breathing', 'Weakness', 'Wither' ], 'Absorption'));
	this.data.push(new ListValue('Ambient Particles', 'ambient', [ 'True', 'False' ], 'True'));
	this.data.push(new AttributeValue('Tier', 'tier', 1, 0));
	this.data.push(new AttributeValue('Seconds', 'seconds', 3, 1));
}

extend('MechanicProjectile', 'Component');
function MechanicProjectile()
{
	this.super('Projectile', Type.MECHANIC, true);
	
	this.description = 'Launches a projectile that applies child components on hit. The target supplied will be the struck target.';
	
	this.data.push(new ListValue('Spread', 'spread', [ 'Cone', 'Horizontal Cone', 'Rain' ], 'Cone'));
	this.data.push(new ListValue('Projectile', 'projectile', [ 'Arrow', 'Egg', 'Ghast Fireball', 'Snowball' ], 'Arrow'));
	this.data.push(new ListValue('Cost', 'cost', [ 'None', 'All', 'One' ], 'None'));
	this.data.push(new AttributeValue('Speed', 'speed', 3, 0));
	this.data.push(new AttributeValue('Angle', 'angle', 30, 0));
	this.data.push(new AttributeValue('Amount', 'amount', 1, 0));
	
	// Cone values
	this.data.push(new AttributeValue('Angle', 'angle', 30, 0).requireValue('spread', [ 'Cone', 'Horizontal Cone' ]));
	
	// Rain values
	this.data.push(new AttributeValue('Height', 'height', 8, 0).requireValue('spread', [ 'Rain' ]));
	this.data.push(new AttributeValue('Radius', 'radius', 2, 0).requireValue('spread', [ 'Rain' ]));
}

extend('MechanicPush', 'Component');
function MechanicPush()
{
	this.super('Push', Type.MECHANIC, false);
	
	this.description = 'Pushes the target relative to the caster. This will do nothing if used with the caster as the target. Positive numbers apply knockback while negative numbers pull them in.';
	
	this.data.push(new AttributeValue('Speed', 'speed', 3, 1));
}

extend('MechanicRepeat', 'Component');
function MechanicRepeat()
{
	this.super('Repeat', Type.MECHANIC, true);
	
	this.description = 'Applies child components multiple times. When it applies them is determined by the delay (seconds before the first application) and period (seconds between successive applications).';
	
	this.data.push(new AttributeValue('Repetitions', 'repetitions', 3, 0));
	this.data.push(new DoubleValue('Period', 'period', 1));
	this.data.push(new DoubleValue('Delay', 'delay', 0));
}

extend('MechanicSound', 'Component');
function MechanicSound()
{
	this.super('Sound', Type.MECHANIC, false);
	
	this.description = "Plays a sound at the target's location.";
	
	this.data.push(new ListValue('Sound', 'sound', [ 'Ambience Cave', 'Ambience Rain', 'Ambience Thunder', 'Anvil Break', 'Anvil Land', 'Anvil Use', 'Arrow Hit', 'Bat Death', 'Bat Hurt', 'Bat Idle', 'Bat Loop', 'Bat Takeof', 'Blaze Death', 'Blaze Hit', 'Breath', 'Burp', 'Cat Hiss', 'Cat Hit', 'Cat Meow', 'Cat Purr', 'Cat Purreow', 'Chest Close', 'Chest Open', 'Chicken Egg Pop', 'Chicken Hurt', 'Chicken Idle', 'Chicken Walk', 'Click', 'Cow Hurt', 'Cow Idle', 'Cow Walk', 'Creeper Death', 'Creeper Hiss', 'Dig Grass', 'Dig Gravel', 'Dig Sand', 'Dig Snow', 'Dig Stone', 'Dig Wood', 'Dig Wool', 'Donkey Angry', 'Donkey Death', 'Donkey Hit', 'Donkey Idle', 'Door Close', 'Door Open', 'Drink', 'Eat', 'Enderdragon Death', 'Enderdragon Growl', 'Enderdragon Hit', 'Enderdragon Wings', 'Enderman Death', 'Enderman Hit', 'Enderman Idle', 'Enderman Scream', 'Enderman Stare', 'Enderman Teleport', 'Explode', 'Fall Big', 'Fall Small', 'Fire', 'Fire Ignite', 'Firework Blast', 'Firework Blast 2', 'Firework Large Blast', 'Firework Large Blast 2', 'Firework Launch', 'Firework Twinkle', 'Firework Twinkle 2', 'Fizz', 'Fuse', 'Ghast Charge', 'Ghast Death', 'Ghast Fireball', 'Ghast Moan', 'Ghast Scream', 'Ghast Scream 2', 'Glass', 'Horse Angry', 'Horse Armor', 'Horse Breath', 'Horse Gallop', 'Horse Hit', 'Horse Idle', 'Horse Jump', 'Horse Land', 'Horse Saddle', 'Horse Skeleton Death', 'Horse Skeleton Idle', 'Horse Soft', 'Horse Wood', 'Horse Zombie Death', 'Horse Zombie Hit', 'Horse Zombie Idle', 'Hurt', 'Hurt Flesh', 'Iron Golem Death', 'Iron Golem Hit', 'Iron Golem Throw', 'Iron Golem Walk', 'Item Break', 'Item Pickup', 'Lava', 'Lava Pop', 'Level Up', 'Magmacube Jump', 'Magmacube Walk', 'Magmacube Walk 2', 'Minecart Base', 'Minecart Inside', 'Note Bass', 'Note Bass Guitar', 'Note Piano', 'Note Pling', 'Note Snare Drum', 'Note Sticks', 'Orb Pickup', 'Pig Death', 'Pig Idle', 'Pig Walk', 'Piston Extended', 'Piston Retract', 'Portal', 'Portal Travel', 'Portal Trigger', 'Sheep Idle', 'Sheep Shear', 'Sheep Walk', 'Shoot Arrow', 'Silverfish Hit', 'Silverfish Idle', 'Silverfish Kill', 'Silverfish Walk', 'Skeleton Death', 'Skeleton Hurt', 'Skeleton Idle', 'Skeleton Walk', 'Slime Attack', 'Slime Walk', 'Slime Walk 2', 'Spider Death', 'Spider Idle', 'Spider Walk', 'Splash', 'Splash 2', 'Step Grass', 'Step Gravel', 'Step Ladder', 'Step Sand', 'Step Snow', 'Step Stone', 'Step Wood', 'Step Wool', 'Successful Hit', 'Swim', 'Villager Death', 'Villager Haggle', 'Villager Hit', 'Villager Idle', 'Villager No', 'Villager Yes', 'Water', 'Wither Death', 'Wither Hurt', 'Wither Idle', 'Wither Shoot', 'Wither Spawn', 'Wolf Bark', 'Wolf DEath', 'Wolf Growl', 'Wolf Howl', 'Wolf Hurt', 'Wolf Pant', 'Wolf Shake', 'Wolf Walk', 'Wolf Whine', 'Wood Click', 'Zombie Death', 'Zombie Hurt', 'Zombie Idle', 'Zombie Infect', 'Zombie Metal', 'Zombie Pig Angry', 'Zombie Pig Death', 'Zombie Pig Hurt', 'Zombie Pig Idle', 'Zombie Pig Remedy', 'Zombie Pig Unfect', 'Zombie Remedy', 'Zombie Unfect', 'Zombie Wood', 'Zombie Wood Break' ], 'Ambience Cave'));
	this.data.push(new AttributeValue('Volume', 'volume', 100, 0));
	this.data.push(new AttributeValue('Pitch', 'pitch', 0, 0));
}

extend('MechanicStatus', 'Component');
function MechanicStatus()
{
	this.super('Status', Type.MECHANIC, false);
	
	this.description = 'Applies a status effect to the target for a duration.';
	
	this.data.push(new ListValue('Status', 'status', [ 'Absorb', 'Curse', 'Disarm', 'Root', 'Silence', 'Stun' ], 'Stun'));
	this.data.push(new AttributeValue('Duration', 'duration', 3, 1));
}

extend('MechanicWarp', 'Component');
function MechanicWarp()
{
	this.super('Warp', Type.MECHANIC, false);
	
	this.description = 'Warps the target relative to their forward direction. Use negative numbers to go in the opposite direction (e.g. negative forward will cause the target to warp backwards).';
	
	this.data.push(new ListValue('Through Walls', 'walls', [ 'True', 'False' ], 'False'));
	this.data.push(new AttributeValue('Forward', 'forward', 3, 1));
	this.data.push(new AttributeValue('Upward', 'upward', 0, 0));
	this.data.push(new AttributeValue('Right', 'right', 0, 0));
}

extend('MechanicWarpLoc', 'Component');
function MechanicWarpLoc()
{
	this.super('Warp Location', Type.MECHANIC, false);
	
	this.description = 'Warps the target to a specified location.';
	
	this.data.push(new StringValue('World (or "current")', 'world', 'current'));
	this.data.push(new DoubleValue('X', 'x', 0));
	this.data.push(new DoubleValue('Y', 'y', 0));
	this.data.push(new DoubleValue('Z', 'z', 0));
	this.data.push(new DoubleValue('Yaw', 'yaw', 0));
	this.data.push(new DoubleValue('Pitch', 'pitch', 0));
}

extend('MechanicWarpRandom', 'Component');
function MechanicWarpRandom()
{
	this.super('Warp Random', Type.MECHANIC, false);
	
	this.description = 'Warps the target in a random direction the given distance.';
	
	this.data.push(new ListValue('Only Horizontal', 'horizontal', [ 'True', 'False' ], 'True'));
	this.data.push(new ListValue('Through Walls', 'walls', [ 'True', 'False' ], 'False'));
	this.data.push(new AttributeValue('Distance', 'distance', 3, 1));
}

extend('MechanicWarpTarget', 'Component');
function MechanicWarpTarget()
{
	this.super('Warp Target', Type.MECHANIC, false);
	
	this.description = 'Warps either the target or the caster to the other. This does nothing when the target is the caster.';
	
	this.data.push(new ListValue('Type', 'type', [ 'Caster to Target', 'Target to Caster' ], 'Caster to Target'));
}

extend('MechanicWolf', 'Component');
function MechanicWolf()
{
	this.super('Wolf', Type.MECHANIC, true);
	
	this.description = 'Summons a wolf on each target for a duration. Child components will start off targeting the wolf so you can add effects to it.';
	
	this.data.push(new ListValue('Collar Color', 'color', dyeList, 'Black'));
	this.data.push(new StringValue('Wolf Name', 'name', "{player}'s Wolf"));
	this.data.push(new AttributeValue('Health', 'health', 10, 0));
	this.data.push(new AttributeValue('Damage', 'damage', 3, 0));
	this.data.push(new AttributeValue('Duration', 'seconds', 10, 0));
}

// The active component being edited or added to
var activeComponent = undefined;
