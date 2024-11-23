import { ItemCard } from "..";
import { useItemsContext } from "../../context/ItemsContext";
import "./index.css";

const className = "items-list";

const ItemsList = () => {
  const {
    state: { items },
  } = useItemsContext();
  return (
    <div className={className}>
      {items.map((item) => (
        <ItemCard {...item} />
      ))}
    </div>
  );
};

export default ItemsList;
