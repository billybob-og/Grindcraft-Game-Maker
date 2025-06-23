// Game Info
setGameInfo({
    name: "My Grindcraft Game",                         // The name of your game!
    version: "0.1",                                     // The current version of your game!
    icon: "images/system/blank.png",                    // Link or path to an icon image for your game!
    ID: "myGrindcraftGame",                             // Your game's ID! Should be unique for every game!
});

// Resources

addResources({                                          // Function for adding all the resources (items/tools/buildings) that are used in your game!
    dirt: {
        image: "images/dirt.png",
    },
    stick: {
        image: "images/stick.png",
    },
    planks: {
        image: "images/planks.png",
    },
    door: {
        image: "images/door.png",
    },
    "cobble stone": {
        image: "images/cobblestone.png"
    },
    "crafting table": {
        image: "images/craftingTable.png",
    },
    "dirt hut": {
        image: "images/dirtHut.png",
    },
    "wooden pickaxe": {
        image: "images/woodenpickaxe.png",
    },
    "cobblestone hut": {
        image: "images/cobblestone hut.webp",
    },
    "stone axe": {
        image: "images/stone axe.webp",
    },
    "oak log": {
        image: "images/oak log.png",
    },
    "wood house": {
        image: "images/wooden house.webp",
    },
    "raw iron": {
        image: "images/raw iron.png",
    },
    "stone pickaxe": {
        image: "images/stone pickaxe.png",
    },

    "wooden axe": {
        image: "images/wooden axe.png",
    },
    "furnace": {
        image: "images/furnace.jpg",
    },
    "coal": {
        image: "images/caol.png",
    },
    "iron ingot": {
        image: "images/iron.jpg",
    },
    "wooden sword": {
        image: "images/wooden sword.png",
    },
    "beef": {
image: "images/beef.png",
    },
    "steak": {
image: "images/steak.png",
    },
"iron pickaxe": {
image: "images/iron pickaxe.png",
},



});

// Areas

addArea("c",                                            // Function for adding areas to your game
    {
        name: "City State",
        image: "images/areas/cityState.png",
        unlocked: true,
        updateWhileUnactive: true,

        grinds: [
            {
                name: "surface",
                unlocked: true,
                auto: ["dirt hut"],                         // List of items that will auto-grind this grind
                background: "images/grinds/overworld.png",
                resources: [
                    {
                        id: "stick",
                        time: [["", 0.5]],
                        probability: 35,
                    },
                    {
                        id: "dirt",
                        time: [["", 0.6]],
                        probability: 40,
                    },
                    {
                        id: "oak log",
                        time: [["stone axe", 0.5], ["wooden axe", 0.8]],
                        probability: 25,

                    },
                    

                ]

            },

            {
                name: "mines",
                unlocked: false,
                auto: ["cobblestone hut"],
                background: "images/grinds/cobblestone.png",
                resources:
                    [
                        {
                            id: "cobble stone",
                            time: [["iron pickaxe", 0.2], ["stone pickaxe", 0.5], ["wooden pickaxe", 0.8]],
                            probability: 40,
                        },
                        {
                            id: "raw iron",
                            time: [["stone pickaxe", 0.8]],
                            probability: 25,
                        },
                        {
                            id: "coal",
                            time: [["stone pickaxe", 0.6]],
                            probability: 35,
                        },

                    ]
            },

            {
                name: "forest",
                unlocked: false,
                auto: ["wood house"],
                background: "images/grinds/forest.png",
                resources:
                    [
                        {
                            id: "beef",
                            time: [["", 0.8]],
                            probability: 20,
                        },
                        {
                            id: "oak log",
                            time: [["stone axe", 0.5]],
                            probability: 75,
                        },
                        {
                            id: "stick",
                            time: [["", 0.1]],
                            probability: 5,
                        },


                    ]
            },
            {
                name: "animals",
                unlocked: false,
                auto: ["wood house"],
                background: "images/grinds/animals.png",
                resources:
                    [
                       {
                        id: "beef",
                        time: [["wooden sword", 0.6]],
                        probability: 100,   
                       },

                    ]
            },

        ],

        crafts: [
            {
                name: "stick",
                desc: "Used to craft planks",
                type: "display",
                cost: [["stick", 0]],
            },
            {
                name: "dirt",
                desc: "Used to build a dirt hut",
                type: "display",
                cost: [["dirt", 0]],
            },
            {
                name: "cobble stone",
                desc: "cobble stone",
                type: "display",
                cost: [["cobble stone", 0]],
            },
            {
                name: "oak log",
                desc: "can be used to make logs",
                type: "display",
                cost: [["oak log", 0]],
            },
            {
                name: "raw iron",
                Desc: "smelt into iron",
                type: "display",
                cost: [["raw iron", 0]],
            },
            {
                name: "coal",
                desc: "used to a furnace",
                type: "display",
                cost: [["coal", 0]],
            },
            {
            name: "beef",
            desc: "food",
            type: "display",
            cost: [["beef", 0]],
            },
            {
                name: "planks",
                desc: "Used to make a crafting table",
                type: "craft",
                amount: 2,
                cost: [["stick", 4]],
            },
            {
                name: "planks",
                desc: "Used to make a crafting table",
                type: "craft",
                amount: 4,
                cost: [["oak log", 1]],
            },
            {
                name: "crafting table",
                desc: "Required to build a dirt hut",
                type: "craft",
                cost: [["planks", 4]],
            },
            {
                name: "door",
                desc: "Required to build a dirt hut",
                type: "craft",
                amount: 3,
                cost: [["planks", 6]],
            },
            {
                name: "wooden pickaxe",
                desc: "requierd to mine stone",
                type: "craft",
                cost: [["stick", 2], ["planks", 3], ["crafting table", 0]],
                unlockGrinds: "mines",
            },
            {
                name: "dirt hut",
                desc: "autamates surface",
                type: "craft",
                cost: [["dirt", 23], ["crafting table", 1], ["door", 1]],

            },
            {
                name: "cobblestone hut",
                desc: "autamates mine",
                type: "craft",
                cost: [["cobble stone", 30], ["crafting table", 1], ["door", 1]],
            },
            {
                name: "wooden axe",
                type: "craft",
                cost: [["stick", 2], ["planks", 3], ["crafting table", 0]],
            },
            {
                name: "stone axe",
                desc: "unlocks forest",
                type: "craft",
                cost: [["stick", 2], ["cobble stone", 3], ["crafting table", 0]],
                unlockGrinds: "forest",
            },
            {
                name: "wood house",
                type: "craft",
                desc: "autamates forest",
                cost: [["planks", 31], ["door", 1], ["oak log", 16], ["crafting table", 1]],
                message: "You have beaten the game!(so fare)",
            },
            {
                name: "stone pickaxe",
                type: "craft",
                cost: [["stick", 2], ["cobble stone", 3], ["crafting table", 0]],
            },
            {
                name: "furnace",
                type: "craft",
                desc: "used to smelt oars and cook food",
                cost: [["cobble stone", 8], ["crafting table", 0]],
            },
            {
                name: "iron ingot",
                type: "craft",
                desc: "used to make better tools",
                amount: 3,
                cost: [["raw iron", 3], ["coal", 2], ["furnace", 0]],
            },
            {
                name: "wooden sword",
                desc: "unlocks animals",
                type: "craft",
                cost: [["stick", 1], ["planks", 2], ["crafting table", 0]],
                unlockGrinds: "animals",
            },
            {
                name: "steak",
                desc: "requierd to get villagers",
                type: "craft",
                cost: [["beef", 2], ["coal", 4], ["furnace", 0]],
                amount: 2,
            },
            {
                name: "iron pickaxe",
                desc: "used to mine faster",
                type: "craft",
                cost: [["stick", 2], ["iron ingot", 3], ["crafting table", 0]],
            },





        ],

        update(diff) {                                      // diff is the time in milliseconds since last time the update function was runned

        },
    }
);

// Function that will be runned when the website is loaded
function onLoad(oldVersion) {
    // If the game version in the player's save is not the same as the current game version:
    if (oldVersion !== player.gameInfo.version) {
        // Write it to the console
        console.log(oldVersion);
    }
}