import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse <T>{
    count: number;
    next:string | null;
    results: T[];
  }

const axiosInstance = axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f937235f05e241e086e26745689158d8'
    }
})

class APIClient<T> {
    endpoint: string ;
    constructor(endpoint: string){
        this.endpoint = endpoint

    }

    getAll(config: AxiosRequestConfig){
        return axiosInstance
        .get(this.endpoint,config)
        .then(res => res.data)
    }
}

export default APIClient;



