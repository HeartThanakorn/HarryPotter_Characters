import { useEffect } from "react";
import { harrypotterListServices } from "../../services";
import { useHarrypotterListStore } from "../../store/harrypotterList";
import { useForm } from "react-hook-form";

const useSearchForm = () => {
  const { register, watch } = useForm();

  const { setFetchHarrypotterList } = useHarrypotterListStore();

  const keyword = watch("keyword");

  const callData = async (searchKeyword: string = "") => {
    const responseList = await harrypotterListServices.getHarrypotterList(
      20,
      1,
      searchKeyword
    );

    if (responseList.status === 200 && responseList.data) {
      setFetchHarrypotterList({
        data: responseList.data.data,
        loading: false,
        error: null,
      });
    } else {
      setFetchHarrypotterList({
        data: [],
        loading: false,
        error: responseList.error,
      });
    }
  };

  useEffect(() => {
    setFetchHarrypotterList({ data: [], loading: true, error: null });
    callData(keyword); // ส่งคำค้นหาไปยัง API
  }, [keyword]);

  return {
    fieldKeyword: register("keyword"),
  };
};

export { useSearchForm };
