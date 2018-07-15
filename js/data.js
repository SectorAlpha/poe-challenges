var difficulties =
	{
		10:'Normal',
		18:'Harder',
		32:'Truly Ethical'
	}

var challenges = [
	{
		'id':'no-offhand',
		'name':'One-Armed Exile',
		'difficulty':6,
		'incompatibilities':[],
		'description':'One-handers only, no shield, no dual-wielding',
		'types':['weapon-restriction']
	},
	{
		'id':'unarmed',
		'name':'Unarmed',
		'difficulty':15,
		'incompatibilities':[],
		'description':'A quiver is okay.',
		'types':['weapon-restriction']
	},
	{
		'id':'ggo',
		'name':'Green Gems Only',
		'difficulty':6,
		'incompatibilities':['no-craft'],
		'description':'Includes both active and support gems',
		'types':['gem-colour']
	},
	{
		'id':'rgo',
		'name':'Red Gems Only',
		'difficulty':8,
		'incompatibilities':['spell-go','no-craft'],
		'description':'Includes both active and support gems',
		'types':['gem-colour']
	},
	{
		'id':'bgo',
		'name':'Blue Gems Only',
		'difficulty':4,
		'incompatibilities':['attack-go','no-craft','nogemlvl'],
		'description':'Includes both active and support gems',
		'types':['gem-colour']
	},
	{
		'id':'spell-go',
		'name':'Spell Gems Only',
		'difficulty':6,
		'incompatibilities':['rgo', 'nogemlvl'],
		'description':'Only gems with the Spell tag, including both active and support gems',
		'types':['gem-tag']
	},
	{
		'id':'attack-go',
		'name':'Attack Gems Only',
		'difficulty':6,
		'incompatibilities':['bgo'],
		'description':'Only gems with the Attack tag, including both active and support gems',
		'types':['gem-tag']
	},
	{
		'id':'quest-go',
		'name':'Quest Reward Gems Only',
		'difficulty':8,
		'incompatibilities':[],
		'description':'Only gems from quest rewards. No buying or picking up more.',
		'types':['gem-source']
	},
	{
		'id':'found-go',
		'name':'Self Found Gems Only',
		'difficulty':8,
		'incompatibilities':[],
		'description':'Only gems from drops. No buying more or using quest rewards.',
		'types':['gem-source']
	},
	{
		'id':'nogemlvl',
		'name':'No Gem Levels',
		'difficulty':10,
		'incompatibilities':['spell-go','bgo'],
		'description':'Leave skill gems at the level you obtain them. No buying replacements.',
		'types':['gem-level']
	},
	{
		'id':'uio',
		'name':'Gucci Hobo',
		'difficulty':16,
		'incompatibilities':[],
		'description':'Unique items only, not including flasks',
		'types':['equipment-rarity']
	},
	{
		'id':'mio',
		'name':'Magic Items Only',
		'difficulty':10,
		'incompatibilities':[],
		'description':'The authentic alteration-farming experience',
		'types':['equipment-rarity']
	},
	{
		'id':'wio',
		'name':'White Items Only',
		'difficulty':24,
		'incompatibilities':[],
		'description':'Good luck.',
		'types':['equipment-rarity']
	},
	{
		'id':'3flaskmax',
		'name':'Three Flask Maximum',
		'difficulty':8,
		'incompatibilities':[],
		'description':'Use at most 3 flasks.',
		'types':['flask-quantity']
	},
	{
		'id':'2flaskmax',
		'name':'Two Flask Maximum',
		'difficulty':16,
		'incompatibilities':[],
		'description':'Use at most 2 flasks.',
		'types':['flask-quantity']
	},
	{
		'id':'1flaskmax',
		'name':'One Flask Maximum',
		'difficulty':24,
		'incompatibilities':[],
		'description':'Just one flask!',
		'types':['flask-quantity']
	},
	{
		'id':'nuf',
		'name':'No Utility Flasks',
		'difficulty':8,
		'incompatibilities':['ci-rush'],
		'description':'They probably cause ulcers anyway.',
		'types':['flask-type']
	},
	{
		'id':'nlf',
		'name':'No Life Flasks',
		'difficulty':20,
		'incompatibilities':[],
		'description':'They probably cause cancer anyway.',
		'types':['flask-type']
	},
	{
		'id':'6gearmax',
		'name':'Six Equipment Maximum',
		'difficulty':11,
		'incompatibilities':[],
		'description':'Equip at most six pieces of gear at once.',
		'types':['equipment-quantity']
	},
	{
		'id':'5gearmax',
		'name':'Five Equipment Maximum',
		'difficulty':15,
		'incompatibilities':[],
		'description':'Equip at most five pieces of gear at once.',
		'types':['equipment-quantity']
	},
	{
		'id':'4gearmax',
		'name':'Four Equipment Maximum',
		'difficulty':19,
		'incompatibilities':[],
		'description':'Equip at most four pieces of gear at once.',
		'types':['equipment-quantity']
	},
	{
		'id':'buy-craft-easy',
		'name':'Buy and Craft Only',
		'difficulty':8,
		'incompatibilities':[],
		'description':'Equip only gear bought from vendors and self-crafted.',
		'types':['equipment-source']
	},
	{
		'id':'buy-craft-hard',
		'name':'Buy and Craft (No Selling Items)',
		'difficulty':14,
		'incompatibilities':[],
		'description':'Only pick up currency. Capitalism, ho!',
		'types':['equipment-source']
	},
	{
		'id':'illiterate',
		'name':'Illiterate Exile',
		'difficulty':11,
		'incompatibilities':[],
		'description':'No using Wisdom Scrolls, Portal Scrolls or Books.',
		'types':['equipment-source']
	},
	{
		'id':'no-craft',
		'name':'No Crafting',
		'difficulty':8,
		'incompatibilities':['rgo','bgo','ggo'],
		'description':'Including resockets, recolours and masters.',
		'types':['equipment-source', 'item-crafting']
	},
	{
		'id':'recol-only',
		'name':'Recolour Only',
		'difficulty':7,
		'incompatibilities':[],
		'description':'Only use Chromatic Orbs or equivalent Vorici crafting.',
		'types':['item-crafting']
	},
	{
		'id':'recol-socket-only',
		'name':'Socket Changes Only',
		'difficulty':6,
		'incompatibilities':[],
		'description':'Only use socket-changing orbs or equivalent Vorici crafting.',
		'types':['item-crafting']
	},
	{
		'id':'no-stash',
		'name':'Pack Mule',
		'difficulty':8,
		'incompatibilities':[],
		'description':'No using your Stash.',
		'types':[]
	},
	{
		'id':'ci-rush',
		'name':'CI Rush',
		'difficulty':8,
		'incompatibilities':['nuf'],
		'description':'Path to Chaos Inoculation as quickly as possible.',
		'types':['keystone-rush']
	},
	{
		'id':'bm-rush',
		'name':'BM Rush',
		'difficulty':5,
		'incompatibilities':[],
		'description':'Path to Blood Magic as quickly as possible.',
		'types':['keystone-rush']
	},
	{
		'id':'aof-rush',
		'name':'AoF Rush',
		'difficulty':4,
		'incompatibilities':[],
		'description':'Path to Avatar of Fire as quickly as possible.',
		'types':['keystone-rush']
	},
	{
		'id':'rand-asc',
		'name':'Two Random Ascendancies',
		'difficulty':4,
		'incompatibilities':['no-ascend','no-notables'],
		'description':'As Scion, pick two ascendancy classes at random.',
		'types':[]
	},
	{
		'id':'no-notables',
		'name':'Might of the Meek Mode',
		'difficulty':12,
		'incompatibilities':['rand-asc','3-tree-scion'],
		'description':'Assign no passive tree Notables',
		'types':[]
	},
	{
		'id':'3-tree-scion',
		'name':'Omnidirectional Scion',
		'difficulty':8,
		'incompatibilities':['no-notables'],
		'description':'As Scion, maintain three equally large passive tree paths, connecting to the start in different places.',
		'types':[]
	},
	{
		'id':'no-npcs',
		'name':'All Alone',
		'difficulty':8,
		'incompatibilities':[],
		'description':'Speak to NPCs only when required to continue the main quest. No buying, selling, or claiming quest rewards.',
		'types':['equipment-source','gem-source']
	}
];

//These are small additional challenges, less difficult than "main" challenges.
//They're separated to avoid creating challenge runs entirely of these.
var bonusChallenges = [
	{
		'id':'no-pantheon',
		'name':'No Pantheon',
		'difficulty':1,
		'incompatibilities':[],
		'description':'Assign no Pantheon bonuses.',
		'types':[]
	},
	{
		'id':'no-ascend',
		'name':'No Ascension',
		'difficulty':4,
		'incompatibilities':['random-asc'],
		'description':'You can skip the labyrinth, so it balances out.',
		'types':[]
	},
	{
		'id':'no-masters',
		'name':'No Masters',
		'difficulty':2,
		'incompatibilities':[],
		'description':'Complete no Forsaken Master missions.',
		'types':['equipment-source','item-crafting']
	},
	{
		'id':'nmf',
		'name':'No Mana Flasks',
		'difficulty':2,
		'incompatibilities':[],
		'description':'They probably cause diabetes anyway.',
		'types':['flask-type']
	},
	{
		'id':'no-respec',
		'name':'Permanent Assignment',
		'difficulty':1,
		'incompatibilities':[],
		'description':'No respeccing passive nodes.',
		'types':[]
	},
	{
		'id':'wr-sceptres',
		'name':'Sceptres Only',
		'difficulty':3,
		'incompatibilities':[],
		'description':'White Mage cosplay?',
		'types':['weapon-restriction']
	},
	{
		'id':'wr-maces',
		'name':'Maces Only',
		'difficulty':4,
		'incompatibilities':[],
		'description':'Thanks to Sir William Blunt-Instrument for generously allowing us to include this challenge.',
		'types':['weapon-restriction']
	},
	{
		'id':'wr-staves',
		'name':'Staves Only',
		'difficulty':2,
		'incompatibilities':[],
		'description':'You just can\'t get the staff these days.',
		'types':['weapon-restriction']
	},
	{
		'id':'wr-swords',
		'name':'Swords Only',
		'difficulty':4,
		'incompatibilities':[],
		'description':'The sharp end goes in the enemy.',
		'types':['weapon-restriction']
	},
	{
		'id':'wr-axes',
		'name':'Axes Only',
		'difficulty':3,
		'incompatibilities':[],
		'description':'What happened? Axe happened!',
		'types':['weapon-restriction']
	},
	{
		'id':'wr-claws',
		'name':'Claws Only',
		'difficulty':4,
		'incompatibilities':[],
		'description':'Meow! >X3',
		'types':['weapon-restriction']
	},
	{
		'id':'wr-daggers',
		'name':'Daggers Only',
		'difficulty':1,
		'incompatibilities':[],
		'description':'Careful! They\'re sharp.',
		'types':['weapon-restriction']
	}

];

//These have some pre-requisite main challenge. Can't roll by themselves
var dependentChallenges = [
	{
		'id':'act-skill-succ-1',
		'name':'Three Active Skills Succession',
		'difficulty':8,
		'incompatibilities':[],
		'prerequisiteIds':['found-go'],
		'prerequisiteTypes':[],
		'description':'After the third active skill gem, each new one found replaces the oldest.',
		'types':[]
	},
	{
		'id':'act-skill-succ-2',
		'name':'Two Active Skill Succession',
		'difficulty':12,
		'incompatibilities':[],
		'prerequisiteIds':['found-go'],
		'prerequisiteTypes':[],
		'description':'After the second active skill gem, each new one found replaces the oldest.',
		'types':[]
	},
	{
		'id':'item-clobber',
		'name':'Clobber On',
		'difficulty':8,
		'incompatibilities':[],
		'prerequisiteIds':['uio'],
		'prerequisiteTypes':[],
		'description':'Gear replaces previous in slot.',
		'types':[]
	}
];
