
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENERES } from "../constants";
import APIClient, { FetchResponse } from "../service/apiClient";
import ms from "ms";



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
  staleTime: ms('24h')

})
export default useGenres;
