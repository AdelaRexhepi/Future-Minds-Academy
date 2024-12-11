import {useQuery} from "@tanstack/react-query"
import { getTodos } from "../services/getTodos";

export function useTodos(){
    const{
        isLoading, 
        data:items,
        isError, 
        error
    } = useQuery({
        queryFn: getTodos,
        queryKey: ["todos"],
    });

    return {isLoading, items, isError, error};
}