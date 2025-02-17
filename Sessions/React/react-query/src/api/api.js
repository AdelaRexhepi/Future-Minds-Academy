import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json", // Note the correct key name
    },
});

export default apiClient;

