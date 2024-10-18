import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import useData, { FetchResponse } from "./useData";
import apiClient from "../service/apiClient";
import { CACHE_KEY_GAMES } from "../constants";

;


export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
 export interface FetchGameResponse <T> {
  count: number;
  results: T[];
}

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error >({
  queryKey:  [CACHE_KEY_GAMES, gameQuery], // 
  queryFn: () => apiClient.get<FetchGameResponse<Game>>('/games', {params: {genres:gameQuery.genre?.id,parent_platforms:gameQuery.platform?.id, ordering: gameQuery.sortOrder, search:gameQuery.searchText}})
  .then(res => res.data),
})
// const useGames = (gameQuery: GameQuery) => useData<Game>('/games', {params: {genres:gameQuery.genre?.id,parent_platforms:gameQuery.platform?.id, ordering: gameQuery.sortOrder, search:gameQuery.searchText}}, [gameQuery])

export default useGames;
