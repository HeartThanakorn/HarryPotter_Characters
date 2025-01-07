import { create } from "zustand";
import { IHarrypotterDetailResponse } from "../interface/harrypotterDetail";

const initStore = {
  harrypotter: {
    data: [],
    loading: false,
    error: null,
  },
  fetchHarrypotter: {
    data: [],
    loading: false,
    error: null,
  },
};

type harrypotterType = {
  data: IHarrypotterDetailResponse[];
  loading: boolean;
  error: null | any;
};

type UseHarrypotterListStoreType = {
  harrypotter: harrypotterType;
  fetchHarrypotter: harrypotterType;
  setHarrypotterList: (value: harrypotterType) => void;
  setFetchHarrypotterList: (value: harrypotterType) => void;
  clearHarrypotter: () => void;
};

export const useHarrypotterListStore = create<UseHarrypotterListStoreType>(
  (set) => ({
    ...initStore,
    setHarrypotterList: (value: harrypotterType) => set({ harrypotter: value }),
    setFetchHarrypotterList: (value: harrypotterType) =>
      set({ fetchHarrypotter: value }),
    clearHarrypotter: () => set({ ...initStore }),
  })
);
