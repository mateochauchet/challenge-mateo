import { renderHook, act } from "@testing-library/react";
import { useItems } from "../useItems";
import itemService from "../../services/item.service";
import { useItemsContext } from "../../context/ItemsContext";
import { mockItems } from "../../mocks/items.mocks";

jest.mock("../../services/item.service");
const mockItemService = itemService.getItems as jest.Mock;

jest.mock("../../context/ItemsContext", () => ({
  useItemsContext: jest.fn(),
}));

describe("useItems Hook", () => {
  const mockSetItems = jest.fn();
  const mockSetLoading = jest.fn();
  const mockSetPage = jest.fn();
  const mockSetHasNext = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useItemsContext as jest.Mock).mockReturnValue({
      state: { items: mockItems },
      actions: {
        setItems: mockSetItems,
        setLoading: mockSetLoading,
        setPage: mockSetPage,
        setHasNext: mockSetHasNext,
      },
    });
  });

  describe("requestItems", () => {
    it("fetches data successfully and updates context", async () => {
      mockItemService.mockResolvedValueOnce(mockItems);

      const { result } = renderHook(() => useItems());

      await act(async () => {
        await result.current.requestItems();
      });

      expect(mockSetPage).toHaveBeenCalled();
      expect(mockSetItems).toHaveBeenCalledWith(mockItems);
      expect(mockSetLoading).toHaveBeenCalledTimes(2);
      expect(mockSetHasNext).toHaveBeenCalled();
    });
  });

  describe("requestNextItems", () => {
    it("fetches data successfully and append items", async () => {
      const stateItems = mockItems;
      const newItems = mockItems;
      mockItemService.mockResolvedValueOnce(mockItems);

      const { result } = renderHook(() => useItems());

      await act(async () => {
        await result.current.requestNextItems();
      });

      expect(mockSetPage).toHaveBeenCalled();
      expect(mockSetItems).toHaveBeenCalledWith([...stateItems, ...newItems]);
      expect(mockSetLoading).toHaveBeenCalledTimes(2);
    });
  });
});
