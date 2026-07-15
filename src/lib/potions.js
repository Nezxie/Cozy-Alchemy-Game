import { ingredientList } from "./ingredientList";

function weightedRandom(items) {
    const totalWeight = items.reduce((sum, item) => sum + item.priority, 0);

    let random = Math.random() * totalWeight;

    for (const item of items) {
        random -= item.priority;

        if (random <= 0) {
            return item;
        }
    }

    return items[items.length - 1];
}

export function calculatePotion(ingredients){
    
    const ingredientWeights = ingredients.map((id)=>{
        return ingredientList.find((element) => element.id === id).weight;
    })

    const ingredientsSum = ingredientWeights.reduce(
        (acc, c) => acc + c,
        0,
    );
    
    const matchingPotions = potions.filter(potion => potion.check(ingredientsSum));
    const potion = weightedRandom(matchingPotions);

    console.log(ingredientsSum, matchingPotions)

    return {
        name: potion.name,
        sprite: potion.sprite,
        description: potion.description
    }
}

const potions = [
    {
        name:'Failed experiment',
        description:"Oof, that didn't go well. At least it didn't explode this time. Better try again.",
        sprite:'',
        priority:0,
        check: sum => true,
    },
    {
        name:'Potion of nothingness',
        description:"The vial appears empty, but you have a strange feeling when looking at it. Better to put it away.",
        sprite:'',
        priority:100,
        check: sum => sum === 0,
    },
    {
        name:'Potion of healing',
        description:'Syrupy consistency. Warm scent. Makes you feel safe.',
        sprite:'',
        priority:10,
        check: sum => sum >= 6 && sum <= 10 && sum % 2 === 0,
    },
    {
        name:'Potion of frost',
        description:'Cold to the touch. The liquid seems to be both thick and thin when swirled around. Has a slight blue glow to it.',
        sprite:'',
        priority:10,
        check: sum => sum === 5 || sum === 7 || sum === 9 || sum === 11 || sum === 13,
    },
    {
        name:'Potion of falling',
        description:'Sickly green. The smell is strong and nauseating. Makes your vision swirl.',
        sprite:'',
        priority:10,
        check: sum => sum > 0 && sum < 5  && sum%2 === 0,
    },
    {
        name:'Potion of irritation',
        description:'Looks... annoyingly plain? There is no smell or color. Does it even do anything?',
        sprite:'',
        priority:10,
        check: sum => sum>0 && sum < 5 && sum%2 !== 0,
    },
     {
        name:'Potion of the stars',
        description:'A cosmos in a bottle. I wonder if people live there. If so, do they know you got them trapped in this bottle? Do they even care?',
        sprite:'',
        priority:20,
        check: sum => sum>10  && Number.isInteger(Math.sqrt(sum)) && sum % 2 === 0,
    },
     {
        name:"Potion of sacrifice",
        description:"Nothing in this life is free. You have to give something up to gain something else. I just hope it was worth it.",
        sprite:'',
        priority:20,
        check: sum => sum%2 === 0 && sum%3 !== 0 && sum >= 6 && sum <= 16,
    },
    {
        name:"Potion of frog",
        description:"Every time you open it — the potion croaks like a frog. Might be a fun party trick.",
        sprite:'',
        priority:50,
        check: sum => sum === 2,
    },
    {
        name:"Potion of courage",
        description:"Even just looking at the pink fluid fills you with determination.",
        sprite:'',
        priority:20,
        check: sum => sum >= 18 && sum % 9 === 0,
    },
    {
        name:"Potion of undead",
        description:"Inside the murky black liquid you can see bones floating around. Maybe you should invest in a better blender?",
        sprite:'',
        priority:30,
        check: sum => sum >= 11 && sum % 11 === 0 && sum % 2 === 1,
    },
    {
        name:"Potion of vampirism",
        description:"It's a simple vial of blood, nothing extraordinary. You won't turn into a vampire should you drink it. Don't you trust me?",
        sprite:'',
        priority:90,
        check: sum => sum >= 19 && sum % 19 === 0,
    },
    {
        name:"Potion of womanhood",
        description:"Drinking this violet liquid turns anyone into a woman. Forever. If you already are a woman — good for you.",
        sprite:'',
        priority:60,
        check: sum => sum>25 && sum%2 !== 0 ,
    },
    {
        name:"Potion of nostalgia",
        description:"Tastes like strawberries on a summer evening. You are not sure if it also sounds just like a song.",
        sprite:'',
        priority:90,
        check: sum => sum>=25 && sum<=50 && sum%5 === 0,
    },
    {
        name:"Potion of the disco",
        description:"Glittery. Flashy. Bold. Side effects: strong urge to dance.",
        sprite:'',
        priority:90,
        check: sum => sum%16 === 0 && sum >= 16,
    },
    {
        name:"Potion of the devil",
        description:"You ever had a magic 8 ball? This looks similar, but instead of a polyhedron there is a small devil inside. Whenever you ask them a question, they respond. If they don't, just shake the potion until they do.",
        sprite:'',
        priority:100,
        check: sum => sum >= 666,
    },
    {
        name:"Potion of longing",
        description:"This deep blue liquid fills you with sadness. You feel like you lost something important, but can't remember what it was. Drinking it doesn't make the feeling go away.",
        sprite:'',
        priority:10,
        check: sum => sum >= 11 && sum <= 16,
    },
    {
        name:"Potion of giggles",
        description:"Have you ever tickled yourself? With this potion it's easy — just drink up and have your solo fun.",
        sprite:'',
        priority:10,
        check: sum => sum%2 === 0 && sum%3 === 0 && sum>0,
    },
    {
        name:"Potion of hiccups",
        description:"Yellow. Sour. Does it give you hiccups or make them go away?",
        sprite:'',
        priority:30,
        check: sum => Math.sqrt(sum)%2 === 0 && sum>0,
    },
    {
        name:"Potion of ...cheese?",
        description:"It looks like melted cheese. Smells like melted cheese. Is this just melted cheese?",
        sprite:'',
        priority:80,
        check: sum => sum%25 === 0 && sum >= 50,
    },
    {
        name:"Potion of the stream",
        description:"Crystal clear. Cool to the touch. Refreshing. Instantly makes you want to pee.",
        sprite:'',
        priority:30,
        check: sum =>  sum>0 && Number.isInteger(Math.sqrt(sum)) && sum%3 === 0,
    },
    {
        name:"Potion of fear",
        description:"This potion insists that you should fear it, but it won't elaborate on its effects. After all, true horror lies in uncertainty.",
        sprite:'',
        priority:60,
        check: sum => sum > 0 && Number.isInteger(Math.sqrt(sum)) && sum%6 === 0,
    },
    
];