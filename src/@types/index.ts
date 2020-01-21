export enum ItemType {
  WIZARD = "WIZARD",
  DRUG = "DRUG"
}

export interface Item {
  name: string;
  description: string;
  type: ItemType;
}