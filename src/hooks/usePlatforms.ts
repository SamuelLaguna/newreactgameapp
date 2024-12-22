import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../constants";
import APIClient from "../service/apiClient";
import { FetchGameResponse } from "./useGames";
import ms from "ms";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

export interface Platform {
    id: number;
    name: string;
    slug: string
}

const usePlatform = () => useQuery<FetchGameResponse<Platform>>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: ()=> apiClient.getAll({}),
    staleTime: ms('24h')
})

export default usePlatform;