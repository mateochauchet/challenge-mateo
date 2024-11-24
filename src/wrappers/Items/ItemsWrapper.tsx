import { useEffect } from "react";
import { ItemsList } from "../../components";
import { useItems } from "../../hooks/useItems";
import { useScroll } from "../../hooks/useScroll";
import { useItemsContext } from "../../context/ItemsContext";

const ItemsWrapper = () => {
  const { state } = useItemsContext();
  const {
    pagination: { currentPage, hasNext },
  } = state;
  const { requestItems } = useItems();

  const handleOnBottom = () => {
    if (hasNext) {
      requestItems({ page: currentPage + 1 });
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
      <ItemsList />
    </div>
  );
};

export default ItemsWrapper;
