import { IItem } from "../entities";

export interface IState {
  items: IItem[];
}

export interface ItemsActions {
  setItems: (items: IItem[]) => void;
}
