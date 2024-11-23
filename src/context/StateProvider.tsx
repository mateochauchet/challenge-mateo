import React, { useState } from "react";
import { ItemsContext } from "./ItemsContext";
import { IItem } from "../entities";
import { mockItems } from "../mocks/items.mocks";

export const ItemsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<IItem[]>(mockItems);

  const state = { items };
  const actions = { setItems };

  return (
    <ItemsContext.Provider value={{ state, actions }}>
      {children}
    </ItemsContext.Provider>
  );
};
