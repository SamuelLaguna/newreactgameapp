import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../constants";
import APIClient from "../service/apiClient";
import { FetchGameResponse } from "./useGames";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

export interface Platform {
    id: number;
    name: string;
    slug: string
}

const usePlatform = () => useQuery<FetchGameResponse<Platform>>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: ()=> apiClient.getAll({}),
    staleTime: 24 * 60 * 60 * 1000
})

export default usePlatform;