import apiClient from "../api/api"

export const postTodos = async (data) => {
    const response = await apiClient.post("/posts", data);
    return response.data;
};