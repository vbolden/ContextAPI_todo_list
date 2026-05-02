import { useState } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoProvider({children}) {
    const [task, setTask] = useState({
        id: "",
        text: "",
        completed: false,
    })

    function addTodo() {
        const todoList = [];

        
    }
}