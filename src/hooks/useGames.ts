import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { CACHE_KEY_GAMES } from "../constants";
import { Platform } from "./usePlatforms";
import APIClient, { FetchResponse } from "../service/apiClient";
import ms from 'ms';


const apiClient = new APIClient<Game>('/games')

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

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error >({
  queryKey:  [CACHE_KEY_GAMES, gameQuery], // 
  queryFn: ({pageParam = 1}) => 
    apiClient.getAll({
      params:{
                genres:gameQuery.genreId, 
                parent_platforms:gameQuery.platformId,
                ordering:gameQuery.sortOrder,
                search:gameQuery.searchText,page: pageParam
            }
      
    }),
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1; undefined
    },
    staleTime: ms('24h')
})
// const useGames = (gameQuery: GameQuery) => useData<Game>('/games', {params: {genres:gameQuery.genre?.id,parent_platforms:gameQuery.platform?.id, ordering: gameQuery.sortOrder, search:gameQuery.searchText}}, [gameQuery])

export default useGames;
