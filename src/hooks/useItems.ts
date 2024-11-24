import { useItemsContext } from "../context/ItemsContext";
import itemService, { IGetItemsParams } from "../services/item.service";

const useItems = () => {
  const {
    state: { items },
    actions,
  } = useItemsContext();
  const { setItems, setLoading, setPage, setHasNext } = actions;

  const requestItems = async (params?: IGetItemsParams) => {
    try {
      setLoading(true);
      const newItems = await itemService.getItems(params);

      if (!newItems.length) {
        setHasNext(false);
        return;
      }

      setItems([...items, ...newItems]);
      setPage(params?.page || 1);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  return { requestItems };
};

export { useItems };
