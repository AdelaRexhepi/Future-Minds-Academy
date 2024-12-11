import { useMutation } from "@tanstack/react-query";
import { postTodos } from "../services/postTodos";

export function usePostTodos(){
    const {
        isLoading, 
        mutate:sendUser, 
        isError,
        error,
    } = useMutation({
        mutationFn: postTodos,
    });

    return{ isLoading, sendUser, isError, error};
}