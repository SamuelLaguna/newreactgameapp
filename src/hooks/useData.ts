import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";
import { CanceledError } from "axios";


export interface FetchResponse <T>{
  count: number;
  results: T[];
}

const useData =<T> (endpoint:string) => {
  const [data, setData] = useState<T[]>([]);

  //useState for error
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  //create a helper function to help us fetch out code

  // const fetchGames = () => {

  // }
  //Need a useEffect to fetch out data

  useEffect(() => {
    //We need an instance of AbortController() to help us unsubscribe to the api, we are going to save it variable
    const controller = new AbortController();

    setIsLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((response) => {
        setIsLoading(false)

        setData(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setIsLoading(true);
        setError(error.message);
        setIsLoading(false)
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
