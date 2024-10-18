

import { useQuery } from "@tanstack/react-query";
import useData from "./useData";
import { CACHE_KEY_GENERES } from "../constants";
import apiClient from "../service/apiClient";


export interface Genre {
  id: number;
  name: string;
  image_background: string 

}
export interface FetchGenreResponse <T>{
  count: number;
  results: T[];
}

const useGenres = () => useQuery({
  queryKey: CACHE_KEY_GENERES,
  queryFn: () => apiClient.get<FetchGenreResponse<Genre>>('/generes').then(res => res.data)

})
export default useGenres;
