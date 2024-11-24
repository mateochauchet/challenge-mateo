import { ChangeEvent, useCallback } from "react";
import { useItemsContext } from "../../context/ItemsContext";
import debounce from "lodash.debounce";
import { useItems } from "../../hooks/useItems";

const Filters = () => {
  const {
    actions: { setFilters },
    state: { filters },
  } = useItemsContext();

  const { requestItems } = useItems();

  const debounceSearch = useCallback(
    debounce((search) => {
      requestItems({ page: 1, search });
    }, 300),
    []
  );

  const handleChangeSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    setFilters({ ...filters, search });
    debounceSearch(search);
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
