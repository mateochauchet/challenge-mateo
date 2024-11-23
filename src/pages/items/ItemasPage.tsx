import { ItemsProvider } from "../../context/StateProvider";
import ItemsWrapper from "../../wrappers/Items/ItemsWrapper";

const ItemasPage = () => {
  return (
    <ItemsProvider>
      <ItemsWrapper />
    </ItemsProvider>
  );
};

export default ItemasPage;
