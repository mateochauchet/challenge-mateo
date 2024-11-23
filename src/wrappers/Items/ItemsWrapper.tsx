import { useEffect } from "react";
import { ItemsList } from "../../components";
import { useItems } from "../../hooks/useItems";

const ItemsWrapper = () => {
  const { requestTables } = useItems();

  useEffect(() => {
    requestTables();
  }, []);

  return (
    <div>
      <ItemsList />
    </div>
  );
};

export default ItemsWrapper;
