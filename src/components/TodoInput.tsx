import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoInput() {
    const [text, setText] = useState("");

    const todoContext = useContext(TodoContext);

    if(!todoContext) return null;

    const addTodo = todoContext.addTodo;
}