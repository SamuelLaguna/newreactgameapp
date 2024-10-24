
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENERES } from "../constants";
import APIClient, { FetchResponse } from "../service/apiClient";



const apiClient = new APIClient<Genre>('/genres')

export interface Genre {
  id: number;
  name: string;
  image_background: string 

}
export interface FetchGenreResponse <T>{
  count: number;
  results: T[];
}

const useGenres = () => useQuery<FetchResponse<Genre>>({
  queryKey: CACHE_KEY_GENERES,
  queryFn: () => apiClient.getAll({}),
  staleTime: 24 * 60 * 60 * 1000

})
export default useGenres;
