import { useState } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoProvider({children}) {
    // STORE MULTIPLE TODOS IN AN ARRAY
    const [tasks, setTasks] = useState([])

    function addTodo(text: string) {
        const newTask = {
            id: crypto.randomUUID(),
            text: text,
            completed: false,
        }

        
        
    }
}