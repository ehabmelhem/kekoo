import { ADD_TODO, REMOVE__TODO } from "./ActionTypes";

export const addTodo = (content, id) => ({
    type: ADD_TODO,
    payload: {
        content,
        id,
    },
});
export const removeTodo = (id) => ({
    type: REMOVE__TODO,
    payload: {
        id,
    },
});