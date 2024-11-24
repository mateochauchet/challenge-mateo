import { IItem } from "../entities";

export interface IState {
  items: IItem[];
  pagination: IPagination;
  loading: boolean;
}

interface IPagination {
  currentPage: number;
  hasNext: boolean;
}

export interface ItemsActions {
  setItems: (items: IItem[]) => void;
  setLoading: (loading: boolean) => void;
  setPage: (page: number) => void;
  setHasNext: (hasNext: boolean) => void;
}
