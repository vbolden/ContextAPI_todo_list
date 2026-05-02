import { useState } from "react";
import { TodoContext } from "../context/TodoContext";

type Task = {
    id: string | number;
    text: string;
    completed: boolean;
}

function TodoProvider({ children }: { children: React.ReactNode }) {
    // STORE MULTIPLE TODOS IN AN ARRAY
    const [tasks, setTasks] = useState<Task[]>([])

    // FUNCTION FOR ADDING TODO TASKS
    function addTask(text: string) {
        const newTask = {
            id: crypto.randomUUID(),
            text: text,
            completed: false,
        }

        setTasks((prevTasks) => [...prevTasks, newTask])
    }

    // FUNCTION FOR TOGGLING COMPLETED TASKS
    function toggleTask(id: string) {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task)
        )
    }

    // FUNCTION TO DELETE A TASK
    function deleteTask(id: string) {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
    };

    // FUNCTION TO EDIT TASK 
    function editTask(id: string, newText: string) {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, text: newText }
                    : task
            )
        )
    }

    return (
        <TodoContext.Provider value={{ tasks, addTask, toggleTask, deleteTask, editTask }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;