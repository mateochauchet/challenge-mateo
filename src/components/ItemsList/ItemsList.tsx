import { ItemCard, Loading } from "..";
import { useItemsContext } from "../../context/ItemsContext";
import "./index.css";

const className = "items-list";

const ItemsList = () => {
  const {
    state: { items, loading },
  } = useItemsContext();
  return (
    <div className={className}>
      {items.map((item) => (
        <>
          <p>{item.id}</p>
          <ItemCard {...item} key={item.id} />
        </>
      ))}
      <Loading isLoading={loading} />
    </div>
  );
};

export default ItemsList;
