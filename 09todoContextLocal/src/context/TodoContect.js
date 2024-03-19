import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        { id: 1,
         title: "Todo 1", 
         completed: false },
    ],
    addTodo: (todo) => {},
    deleteTodo: (id, todo) => {},
    toggleTodo: (id) => {},
    updateTodo: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
    }

export const TodoProvider = TodoContext.Provider;