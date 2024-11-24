import React, { useState } from "react";
import { ItemsContext } from "./ItemsContext";
import { IItem } from "../entities";
import { IState, ItemsActions } from "./types";

export const ItemsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<IItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);

  const state: IState = {
    items,
    loading,
    pagination: { currentPage, hasNext },
  };
  const actions: ItemsActions = { setItems, setLoading, setPage, setHasNext };

  return (
    <ItemsContext.Provider value={{ state, actions }}>
      {children}
    </ItemsContext.Provider>
  );
};
