import axios from "axios";
import { HARRYPOTTER_BASE_URL } from "../utils/constant";
import { IHarrypotterListResponse } from "../interface/harrypotterList";
import { handleResponse, IResponse } from "../utils/handleResponse";

interface IGetHarrypotterListResponse extends IResponse {
  status: number | undefined;
  data?: IHarrypotterListResponse;
}

export const harrypotterListServices = {
  getHarrypotterList: async (
    size: number = 20,
    page: number = 1,
    keyword: string = ""
  ): Promise<IGetHarrypotterListResponse> => {
    try {
      const response = await axios.get(
        `${HARRYPOTTER_BASE_URL}?page[size]=${size}&page[number]=${page}&filter[name_cont]=${keyword}`
      );
      return handleResponse.success(response);
    } catch (error: any) {
      return handleResponse.error(error);
    }
  },
};
