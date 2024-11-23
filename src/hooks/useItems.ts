import { useItemsContext } from "../context/ItemsContext";
import itemService from "../services/item.service";

const useItems = () => {
  const { actions } = useItemsContext();
  const { setItems } = actions;

  const requestTables = async () => {
    try {
      const items = await itemService.getItems();
      setItems(items);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  return { requestTables };
};

export { useItems };
