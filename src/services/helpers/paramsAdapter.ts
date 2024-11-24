import { IGetItemsParams } from "../item.service";

export const adaptParams = (params?: IGetItemsParams): Record<string, any> => {
  return {
    _page: params?.page || "1",
    title_like: params?.search || "",
  };
};
