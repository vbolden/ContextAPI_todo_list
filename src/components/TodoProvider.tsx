import { useState } from "react";
import { TodoContext } from "../context/TodoContext";

type Task = {
    id: string;
    text: string;
    completed: boolean;
}

function TodoProvider({children}: {children: React.ReactNode}) {
    // STORE MULTIPLE TODOS IN AN ARRAY
    const [tasks, setTasks] = useState<Task[]>([])

    function addTodo(text: string) {
        const newTask = {
            id: crypto.randomUUID(),
            text: text,
            completed: false,
        }

        setTasks((prevTasks) => [...prevTasks, newTask])
    }

    return (
        <TodoContext.Provider value={{tasks, addTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;