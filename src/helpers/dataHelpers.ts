import { ItemType, type Item } from "../@types"

const items: Item[] = [
  {
    name: "Acthar",
    description: "is an adrenocorticotropic hormone used to treat relapsing multiple sclerosis (MS), infantile spasms, and nephrotic syndrome (a collection of symptoms that indicate kidney damage).",
    type: ItemType.DRUG
  },
  {
    name: "Aggrenox",
    description: "is a combination of a salicylate and a platelet aggregation inhibitor used to reduce the risk of stroke in people who have had blood clots.",
    type: ItemType.DRUG
  },
  {
    name: "Asmanex",
    description: "is a maintenance treatment that helps prevent and control asthma symptoms.",
    type: ItemType.DRUG
  },
  {
    name: "Cinryze",
    description: "is used to prevent attacks of angioedema.",
    type: ItemType.DRUG
  },
  {
    name: "Halcion",
    description: "is a sedative used to treat insomnia.",
    type: ItemType.DRUG
  },
  {
    name: "Prinivil",
    description: "is used to treat high blood pressure (hypertension).",
    type: ItemType.DRUG
  },
  {
    name: "Tazorac",
    description: "is a vitamin A derivative that can treat psoriasis and acne.",
    type: ItemType.DRUG
  },
  {
    name: "Zocor",
    description: "can treat high cholesterol and triglyceride levels.",
    type: ItemType.DRUG
  },
  {
    name: "Alatar",
    description: "the blue is one of the five Istari in Tolkien's legendarium.",
    type: ItemType.WIZARD
  },
  {
    name: "Allanon",
    description: "is a main character in The Shannara Chronicles. He is the last remaining member of the Druids of Paranor.",
    type: ItemType.WIZARD
  },
  {
    name: "Elminster",
    description: "Aumar, the Sage of Shadowdale, is a fictional character appearing in the Forgotten Realms campaign setting for the Dungeons & Dragons fantasy role-playing game.",
    type: ItemType.WIZARD
  },
  {
    name: "Gwydion",
    description: "fab Dôn is a magician, hero and trickster of Welsh mythology.",
    type: ItemType.WIZARD
  },
  {
    name: "Radagast",
    description: "the Brown is a wizard in J. R. R. Tolkien's fictional writings.",
    type: ItemType.WIZARD
  },
  {
    name: "Raistlin",
    description: "Majere is a fictional character from the Dragonlance series of books created by Margaret Weis and Tracy Hickman.",
    type: ItemType.WIZARD
  },
  {
    name: "Tretiak",
    description: "is the Directorate Wizard in The Chronicles of Blood and Stone.",
    type: ItemType.WIZARD
  },
  {
    name: "Vainamoinen",
    description: "is a Finnish folklore hero. He was described as an old and wise man, and he possessed a potent, magical singing voice.",
    type: ItemType.WIZARD
  }
]

export const getRandomItem = (notToMatch: string[] = []): Item => {
  let i;
  do {
    i = Math.floor(Math.random() * Math.floor(items.length));
  }
  while (notToMatch.includes(items[i].name));
  return items[i];
}