var dyeList = [
	'Black',
	'Blue',
	'Brown',
	'Cyan',
	'Gray',
	'Green',
	'Light Blue',
	'Lime',
	'Magenta',
	'Orange',
	'Pink',
	'Purple',
	'Red',
	'Silver',
	'White',
	'Yellow'
];

var materialList = [
	'Acacia Stairs',
	'Activator Rail',
	'Air',
	'Anvil',
	'Apple',
	'Arrow',
	'Baked Potato',
	'Beacon',
	'Bed',
	'Bedrock',
	'Birch Wood Stairs',
	'Blaze Powder',
	'Blaze Rod',
	'Boat',
	'Bone',
	'Book',
	'Book and Quill',
	'Bookshelf',
	'Bow',
	'Bowl',
	'Bread',
	'Brewing Stand',
	'Brick',
	'Brick Stairs',
	'Brown Mushroom',
	'Bucket',
	'Cactus',
	'Cake',
	'Carpet',
	'Carrot',
	'Carrot Stick',
	'Cauldron',
	'Chainmail Boots',
	'Chainmail Chestplate',
	'Chainmail Helmet',
	'Chainmail Leggings',
	'Chest',
	'Clay',
	'Clay Ball',
	'Clay Brick',
	'Coal',
	'Coal Block',
	'Coal Ore',
	'Cobble Wall',
	'Cobblestone',
	'Cobblestone Stairs',
	'Cocoa',
	'Command',
	'Command Minecart',
	'Compass',
	'Cooked Beef',
	'Cooked Chicken',
	'Cooked Fish',
	'Cookie',
	'Crops',
	'Dark Oak Stairs',
	'Daylight Detector',
	'Dead Bush',
	'Detector Rail',
	'Diamond',
	'Diamond Axe',
	'Diamond Barding',
	'Diamond Block',
	'Diamond Boots',
	'Diamond Chestplate',
	'Diamond Helmet',
	'Diamond Hoe',
	'Diamond Leggings',
	'Diamond Ore',
	'Diamond Pickaxe',
	'Diamond Spade',
	'Diamond Sword',
	'Diode',
	'Dirt',
	'Dispenser',
	'Double Step',
	'Dragon Egg',
	'Dropper',
	'Egg',
	'Emerald',
	'Emerald Block',
	'Emerald Ore',
	'Empty Map',
	'Enchanted Book',
	'Enchantment Table',
	'Ender Chest',
	'Ender Pearl',
	'Ender Portal',
	'Ender Portal Frame',
	'Ender Stone',
	'Exp Bottle',
	'Explosive Minecart',
	'Eye of Ender',
	'Feather',
	'Fence',
	'Fence Gate',
	'Fermented Spider Eye',
	'Fire',
	'Fireball',
	'Firework',
	'Firework Charge',
	'Fishing Rod',
	'Flint',
	'Flint and Steel',
	'Flower Pot',
	'Furnace',
	'Ghast Tear',
	'Glass',
	'Glass Bottle',
	'Glowing Redstone Ore',
	'Glowstone',
	'Glowstone Dust',
	'Gold Axe',
	'Gold Barding',
	'Gold Block',
	'Gold Boots',
	'Gold Chestplate',
	'Gold Helmet',
	'Gold Hoe',
	'Gold Ingot',
	'Gold Leggings',
	'Gold Nugget',
	'Gold Ore',
	'Gold Pickaxe',
	'Gold Plate',
	'Gold Record',
	'Gold Spade',
	'Gold Sword',
	'Golden Apple',
	'Golden Carrot',
	'Grass',
	'Gravel',
	'Green Record',
	'Grilled Pork',
	'Hard Clay',
	'Hay Block',
	'Hopper',
	'Hopper Minecart',
	'Huge Mushroom 1',
	'Huge Mushroom 2',
	'Ice',
	'Ink Sack',
	'Iron Axe',
	'Iron Barding',
	'Iron Block',
	'Iron Boots',
	'Iron Chestplate',
	'Iron Door',
	'Iron Fence',
	'Iron Helmet',
	'Iron Hoe',
	'Iron Ingot',
	'Iron Leggings',
	'Iron Ore',
	'Iron Pickaxe',
	'Iron Plate',
	'Iron Spade',
	'Iron Sword',
	'Item Frame',
	'Jack O Lantern',
	'Jukebox',
	'Jungle Wood Stairs',
	'Ladder',
	'Lapis Block',
	'Lapis Ore',
	'Lava',
	'Lava Bucket',
	'Leash',
	'Leather',
	'Leather Boots',
	'Leather Chestplate',
	'Leather Helmet',
	'Leather Leggings',
	'Leaves',
	'Leaves 2',
	'Lever',
	'Log',
	'Log 2',
	'Long Grass',
	'Magma Cream',
	'Map',
	'Melon',
	'Melon Block',
	'Melon Seeds',
	'Melon Stem',
	'Milk Bucket',
	'Minecart',
	'Mob Spawner',
	'Monster Egg',
	'Monster Eggs',
	'Mossy Cobblestone',
	'Mushroom Soup',
	'Mycel',
	'Name Tag',
	'Nether Brick',
	'Nether Brick Stairs',
	'Nether Fence',
	'Nether Stalk',
	'Nether Star',
	'Nether Warts',
	'Netherrack',
	'Note Block',
	'Obsidian',
	'Packed Ice',
	'Painting',
	'Paper',
	'Piston Base',
	'Piston Sticky Base',
	'Poisonous Potato',
	'Pork',
	'Portal',
	'Potato',
	'Potion',
	'Powered Minecart',
	'Powered Rail',
	'Pumpkin',
	'Pumpkin Pie',
	'Pumpkin Seeds',
	'Quartz',
	'Quartz Block',
	'Quartz Ore',
	'Quartz Stairs',
	'Rails',
	'Raw Beef',
	'Raw Chicken',
	'Raw Fish',
	'Record 3',
	'Record 4',
	'Record 5',
	'Record 6',
	'Record 7',
	'Record 8',
	'Record 9',
	'Record 10',
	'Record 11',
	'Record 12',
	'Red Mushrom',
	'Red Rose',
	'Redstone',
	'Redstone Block',
	'Redstone Comparator',
	'Redstone Lamp Off',
	'Redstone Ore',
	'Redstone Torch Off',
	'Redstone Wire',
	'Rotten Flesh',
	'Saddle',
	'Sand',
	'Sandstone',
	'Sandstone Stairs',
	'Sapling',
	'Seeds',
	'Shears',
	'Sign',
	'Skull',
	'Slime Ball',
	'Smooth Brick',
	'Smooth Stairs',
	'Snow',
	'Snow Ball',
	'Snow Block',
	'Soil',
	'Soul Sand',
	'Speckled Melon',
	'Spider Eye',
	'Sponge',
	'Spruce Wood Stairs',
	'Stained Clay',
	'Stained Glass',
	'Stained Glass Pane',
	'Stationary Lava',
	'Stationary Water',
	'Step',
	'Stick',
	'Stone', 
	'Stone Axe',
	'Stone Button',
	'Stone Hoe',
	'Stone Pickaxe',
	'Stone Plate',
	'Stone Spade',
	'Stone Sword',
	'Storage Minecart',
	'String',
	'Sugar',
	'Sugar Cane',
	'Sulphur',
	'Thin Glass',
	'TNT',
	'Torch',
	'Trap Door',
	'Trapped Chest',
	'Tripwire',
	'Tripwire Hook',
	'Vine',
	'Watch',
	'Water',
	'Water Bucket',
	'Water Lily',
	'Web',
	'Wheat',
	'Wood',
	'Wood Axe',
	'Wood Button',
	'Wood Door',
	'Wood Double Step',
	'Wood Hoe',
	'Wood Pickaxe',
	'Wood Plate',
	'Wood Spade',
	'Wood Stairs',
	'Wood Step',
	'Wood Sword',
	'Wooden Door',
	'Wool',
	'Workbench',
	'Written Book',
	'Yellow Flower'
];
