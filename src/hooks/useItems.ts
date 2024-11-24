import { useItemsContext } from "../context/ItemsContext";
import itemService from "../services/item.service";

const useItems = () => {
  const {
    state: { items },
    actions,
  } = useItemsContext();
  const { setItems, setLoading, setPage, setHasNext } = actions;

  const requestTables = async (params?: Record<string, any>) => {
    try {
      setLoading(true);
      const newItems = await itemService.getItems(params);

      if (!newItems.length) {
        setHasNext(false);
        return;
      }

      setItems([...items, ...newItems]);
      setPage(params?._page || 1);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  return { requestTables };
};

export { useItems };
