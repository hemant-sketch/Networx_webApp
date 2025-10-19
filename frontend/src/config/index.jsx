import axios from "axios";

// export const BASE_URL = "http://localhost:9090";
export const BASE_URL = "https://networx-webapp-w75u.onrender.com";


export const clientServer = axios.create({
    baseURL: BASE_URL,
});