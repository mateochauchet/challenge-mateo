import { IItem } from "../entities";

const API_URL = "http://localhost:3000/items";

const getItems = async (params?: Record<string, any>): Promise<IItem[]> => {
  try {
    const URL = `${API_URL}?` + new URLSearchParams(params);

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
