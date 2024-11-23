import { createContext, useContext } from "react";
import { IState, ItemsActions } from "./types";

export interface ItemsContextType {
  state: IState;
  actions: ItemsActions;
}

export const ItemsContext = createContext<ItemsContextType | undefined>(
  undefined
);

export const useItemsContext = (): ItemsContextType => {
  const context = useContext(ItemsContext);
  if (context === undefined) {
    throw new Error("useItemsContext must be used inside an ItemsProvider");
  }
  return context;
};
