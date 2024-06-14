import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f937235f05e241e086e26745689158d8'
    }
})


