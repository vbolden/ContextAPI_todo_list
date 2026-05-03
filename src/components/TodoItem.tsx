import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoItem() {
    const todoContext = useContext(TodoContext);

    if(!todoContext) return null;
}