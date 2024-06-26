import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";
import { CanceledError } from "axios";
import useData from "./useData";


export interface Genre {
  id: number;
  name: string;
  image_background: string 

}
export interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => useData<Genre>('genres')

export default useGenres;
