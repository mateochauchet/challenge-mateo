import { useEffect } from "react";
import { ItemsList } from "../../components";
import { useItems } from "../../hooks/useItems";
import { useScroll } from "../../hooks/useScroll";
import { useItemsContext } from "../../context/ItemsContext";
import Filters from "../Filters/Filters";

const ItemsWrapper = () => {
  const { state } = useItemsContext();
  const {
    pagination: { currentPage, hasNext },
    filters,
  } = state;
  const { requestItems, requestNextItems } = useItems();

  const handleOnBottom = () => {
    if (hasNext) {
      requestNextItems({ ...filters, page: currentPage + 1 });
    }
  };

  useScroll({
    onBottom: handleOnBottom,
  });

  useEffect(() => {
    requestItems({ page: 1 });
  }, []);

  return (
    <div>
      <Filters />
      <ItemsList />
    </div>
  );
};

export default ItemsWrapper;
