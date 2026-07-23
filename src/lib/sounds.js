import brewSound from "../assets/sounds/brewing.wav";
import potionReadySound from "../assets/sounds/potion.wav";
import dumpCauldronSound from "../assets/sounds/dump.wav";
import addIngredientSound from "../assets/sounds/drop.wav";


const sounds = {};

export function loadSounds() {
  sounds.brew = new Audio(brewSound);
  sounds.brew.preload = "auto";

  sounds.potionReady = new Audio(potionReadySound);
  sounds.potionReady.preload = "auto";

  sounds.dumpCauldron = new Audio(dumpCauldronSound);
  sounds.dumpCauldron.preload = "auto";

  sounds.addIngredient = new Audio(addIngredientSound);
  sounds.addIngredient.preload = "auto";
}

export function playSound(name) {
  sounds[name].currentTime = 0;
  sounds[name].play();
}