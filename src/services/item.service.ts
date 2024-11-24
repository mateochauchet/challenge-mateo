import { IItem } from "../entities";
import { adaptParams } from "./helpers/paramsAdapter";

const API_URL = "http://localhost:3000/items";

export interface IGetItemsParams {
  search?: string;
  page?: number;
}

const getItems = async (params?: IGetItemsParams): Promise<IItem[]> => {
  const adaptedParams = adaptParams(params);

  try {
    const URL = `${API_URL}?` + new URLSearchParams(adaptedParams);

    const response = await fetch(URL);

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default {
  getItems,
};
