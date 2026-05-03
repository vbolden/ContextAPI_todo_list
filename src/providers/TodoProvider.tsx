import { useState } from "react";
import { TodoContext } from "../context/TodoContext";

type Todo = {
    id: string | number;
    text: string;
    completed: boolean;
}

function TodoProvider({ children }: { children: React.ReactNode }) {
    // STORE MULTIPLE TODOS IN AN ARRAY
    const [todos, setTodos] = useState<Todo[]>([])

    // FUNCTION FOR ADDING TODO TASKS
    function addTodo(text: string) {
        const newTodo = {
            id: crypto.randomUUID(),
            text: text,
            completed: false,
        }

        setTodos((prevTodos) => [...prevTodos, newTodo])
    }

    // FUNCTION FOR TOGGLING COMPLETED TASKS
    function toggleTodo(id: string) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo)
        )
    }

    // FUNCTION TO DELETE A TASK
    function deleteTodo(id: string) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    };

    // FUNCTION TO EDIT TASK 
    function editTodo(id: string, newText: string) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
                    ? { ...todo, text: newText }
                    : todo
            )
        )
    }

    // FUNCTION TO CLEAR COMPLETED TASKS
    function clearCompleted() {
        setTodos((prevTodos) =>
            prevTodos.filter(
                (todo) => todo.completed
            )
        )
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;