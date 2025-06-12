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
    name: "Malathion",
    description: "can treat head lice.",
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
    name: "Wixela",
    description: "is used to control and prevent symptoms of asthma and COPD",
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

const additionalItems: Item[] = [  
  // More drugs
  { name: "Aldomet", description: "Used to treat high blood pressure.", type: ItemType.DRUG },
  { name: "Betaseron", description: "A treatment for multiple sclerosis.", type: ItemType.DRUG },
  { name: "Crestor", description: "Lowers cholesterol levels.", type: ItemType.DRUG },
  { name: "EpiPen", description: "Emergency treatment for severe allergic reactions.", type: ItemType.DRUG },
  { name: "Flovent", description: "A preventive asthma treatment.", type: ItemType.DRUG },
  { name: "Humalog", description: "Fast-acting insulin for diabetes management.", type: ItemType.DRUG },
  { name: "Imuran", description: "Used to prevent organ rejection after transplants.", type: ItemType.DRUG },
  { name: "Jardiance", description: "Helps manage type 2 diabetes.", type: ItemType.DRUG },
  { name: "Kaletra", description: "An HIV treatment medication.", type: ItemType.DRUG },
  { name: "Lamictal", description: "Used to treat epilepsy and bipolar disorder.", type: ItemType.DRUG },
  { name: "Methotrexate", description: "Can treat cancer, psoriasis, and rheumatoid arthritis.", type: ItemType.DRUG },
  { name: "Nexium", description: "Reduces stomach acid to treat GERD.", type: ItemType.DRUG },
  { name: "Opana", description: "A pain reliever for moderate to severe pain.", type: ItemType.DRUG },
  { name: "Plavix", description: "Reduces risk of heart attack and stroke.", type: ItemType.DRUG },
  { name: "Revlimid", description: "A cancer treatment drug.", type: ItemType.DRUG },
  { name: "Synthroid", description: "Treats hypothyroidism.", type: ItemType.DRUG },
  { name: "Tamiflu", description: "An antiviral drug used for flu treatment.", type: ItemType.DRUG },
  { name: "Ultram", description: "Used for pain relief.", type: ItemType.DRUG },
  { name: "Ventolin", description: "A common asthma inhaler.", type: ItemType.DRUG },
  { name: "Xanax", description: "Used to treat anxiety disorders.", type: ItemType.DRUG },

  // More wizards  
  { name: "Belgarath", description: "A powerful sorcerer from The Belgariad series.", type: ItemType.WIZARD },
  { name: "Circe", description: "A sorceress from Greek mythology.", type: ItemType.WIZARD },
  { name: "Dumbledore", description: "Headmaster of Hogwarts and a master wizard.", type: ItemType.WIZARD },
  { name: "Fizban", description: "An eccentric and wise wizard from Dragonlance.", type: ItemType.WIZARD },
  { name: "Gandalf", description: "The famous wizard from Tolkien’s Middle-earth.", type: ItemType.WIZARD },
  { name: "Harry Dresden", description: "A detective wizard from The Dresden Files.", type: ItemType.WIZARD },
  { name: "Morgana", description: "A legendary sorceress from Arthurian tales.", type: ItemType.WIZARD },
  { name: "Merlin", description: "The iconic wizard from Arthurian legend.", type: ItemType.WIZARD },
  { name: "Orannis", description: "A powerful sorcerer in Garth Nix's Abhorsen series.", type: ItemType.WIZARD },
  { name: "Prospero", description: "A magician from Shakespeare’s The Tempest.", type: ItemType.WIZARD },
  { name: "Saruman", description: "A once-great but corrupted wizard in Middle-earth.", type: ItemType.WIZARD },
  { name: "Sparhawk", description: "A sorcerer-knight from The Elenium series.", type: ItemType.WIZARD },
  { name: "Thoth", description: "An ancient Egyptian god associated with magic and wisdom.", type: ItemType.WIZARD },
  { name: "Ulrich", description: "The wizard from Dragonslayer.", type: ItemType.WIZARD },
  { name: "Voldemort", description: "The infamous dark wizard in Harry Potter.", type: ItemType.WIZARD },
  { name: "Yennefer", description: "A powerful sorceress from The Witcher.", type: ItemType.WIZARD },
  { name: "Zeddicus", description: "A wizard from The Sword of Truth series.", type: ItemType.WIZARD },
  { name: "Zatanna", description: "A DC Comics magician known for her spellcasting.", type: ItemType.WIZARD },
  { name: "Zendikar", description: "A wizard of great renown from Magic: The Gathering.", type: ItemType.WIZARD }
];

export const extendedItems = [...items, ...additionalItems];

export const getRandomItem = (notToMatch: string[] = []): Item => {
  let i;
  do {
    i = Math.floor(Math.random() * Math.floor(extendedItems.length));
  }
  while (notToMatch.includes(extendedItems[i].name));
  return extendedItems[i];
}