export function calculatePotion(ingredients){
    const ingredientsSum = ingredients.reduce(
        (acc, c) => acc + c,
        0,
    );
    const matchingPotions = potions.filter(potion => potion.check(ingredientsSum));
    const potion = matchingPotions[Math.floor(Math.random() * matchingPotions.length)];

    return {
        name: potion.name,
        sprite: potion.sprite,
        description: potion.description
    }
}

const potions = [
    {
        name:'Potion of nothingness',
        description:"The vial appears empty, but you have a strange feeling when looking at it. Better to put it away.",
        sprite:'',
        check: sum => sum === 0,
    },
    {
        name:'Potion of healing',
        description:'Syrupy consistency. Warm scent. Makes you feel safe.',
        sprite:'',
        check: sum => sum>10 && sum%2 === 0,
    },
    {
        name:'Potion of frost',
        description:'Cold to the touch. The liquid seems to be both thick and thin when swirled around. Has a slight blue glow to it.',
        sprite:'',
        check: sum => sum>10 && sum%2 !== 0,
    },
    {
        name:'Potion of falling',
        description:'Sickly green. The smell is strong and nauseating. Makes your vision swirl.',
        sprite:'',
        check: sum => sum<10 && sum%2 === 0,
    },
    {
        name:'Potion of irritation',
        description:'Looks... annoyingly plain? There is no smell or color. Does it even do anything?',
        sprite:'',
        check: sum => sum<10 && sum%2 !== 0,
    },
     {
        name:'Potion of the stars',
        description:'A cosmos in a bottle. I wonder if people live there. If so, do they know you got them trapped in this bottle? Do they even care?',
        sprite:'',
        check: sum => false,
    },
     {
        name:"Potion of sacrifice",
        description:"Nothing in this life is free. You have to give something up to gain something else. I just hope it was worth it.",
        sprite:'',
        check: sum => false,
    },
    {
        name:"Potion of frog",
        description:"Every time you open it — the potion croaks like a frog. Might be a fun party trick.",
        sprite:'',
        check: sum => false,
    },
    {
        name:"Potion of courage",
        description:"Even just looking at the pink fluid fills you with determination.",
        sprite:'',
        check: sum => false,
    },
    {
        name:"Potion of undead",
        description:"Inside the murky black liquid you can see bones floating around. Maybe you should invest in a better blender?",
        sprite:'',
        check: sum => false,
    },
    {
        name:"Potion of vampirism",
        description:"It's a simple vial of blood, nothing extraordinary. You won't turn into a vampire should you drink it. Don't you trust me?",
        sprite:'',
        check: sum => false,
    },
    {
        name:"Potion of womanhood",
        description:"Drinking this violet liquid turns anyone into a woman. Forever. If you already are a woman — good for you.",
        sprite:'',
        check: sum => false,
    },
    {
        name:"Potion of nostalgia",
        description:"Tastes like strawberries on a summer evening. You are not sure if it also sounds just like a song.",
        sprite:'',
        check: sum => false,
    },
    {
        name:"Potion of the disco",
        description:"Glittery. Flashy. Bold. Side effects: strong urge to dance.",
        sprite:'',
        check: sum => false,
    },
    {
        name:"Potion of the devil",
        description:"You ever had a magic 8 ball? This looks similar, but instead of a polyhedron there is a small devil inside. Whenever you ask them a question, they respond. If they don't, just shake the potion until they do.",
        sprite:'',
        check: sum => false,
    },
    {
        name:"Potion of longing",
        description:"This deep blue liquid fills you with sadness. You feel like you lost something important, but can't remember what it was. Drinking it doesn't make the feeling go away.",
        sprite:'',
        check: sum => false,
    },
    {
        name:"Potion of giggles",
        description:"Have you ever tickled yourself? With this potion it's easy — just drink up and have your solo fun.",
        sprite:'',
        check: sum => false,
    },
    {
        name:"Potion of hiccups",
        description:"Yellow. Sour. Does it give you hiccups or make them go away?",
        sprite:'',
        check: sum => false,
    },
    {
        name:"Potion of ...cheese?",
        description:"It looks like melted cheese. Smells like melted cheese. Is this just melted cheese?",
        sprite:'',
        check: sum => false,
    },
    {
        name:"Potion of the stream",
        description:"Crystal clear. Cool to the touch. Refreshing. Instantly makes you want to pee.",
        sprite:'',
        check: sum => false,
    },
    {
        name:"Potion of fear",
        description:"This potion insists that you should fear it, but it won't elaborate on its effects. After all, true horror lies in uncertainty.",
        sprite:'',
        check: sum => false,
    },
    
];