import axios, { AxiosResponse } from "axios";
import { HARRYPOTTER_BASE_URL } from "../utils/constant";
import { IHarrypotterDetailResponse } from "../interface/harrypotterDetail";

interface IGetHarrypotterDetailResponse {
  status: number | undefined;
  data: IHarrypotterDetailResponse;
}

export const harrypotterDetailServices = {
  getHarrypotterDetail: async (
    slug: string
    // name: string
  ): Promise<AxiosResponse<IGetHarrypotterDetailResponse>> => {
    const response = await axios.get(`${HARRYPOTTER_BASE_URL}/${slug}`);
    return response;
  },
};
