import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";
import { CanceledError } from "axios";

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
export interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);

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
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((response) => {
        setIsLoading(false)

        setGames(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setIsLoading(true);
        setError(error.message);
        setIsLoading(false)
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
