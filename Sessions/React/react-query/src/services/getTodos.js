import apiClient from "../api/api"

export const getTodos = async ()=>{
    const response = await apiClient.get("/todos")
    return response.data.slice(0,10)
}