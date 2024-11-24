import { ChangeEvent } from "react";
import { useItemsContext } from "../../context/ItemsContext";
import { useItems } from "../../hooks/useItems";

const Filters = () => {
  const {
    actions: { setFilters },
    state: { filters },
  } = useItemsContext();

  const { requestItems } = useItems();

  const handleChangeSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    setFilters({ ...filters, search });
    requestItems({ page: 1, search });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Busca tu producto"
        onChange={handleChangeSearch}
        value={filters.search}
      />
    </div>
  );
};

export default Filters;
