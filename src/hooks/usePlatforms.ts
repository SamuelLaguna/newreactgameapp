import { useQueries, useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import { CACHE_KEY_PLATFORMS } from "../constants";
import apiClient from "../service/apiClient";


export interface Platform {
    id: number;
    name: string;
    slug: string
}

const usePlatform = () => useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn:  () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
})

export default usePlatform;