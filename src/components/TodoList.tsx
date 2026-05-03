import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { FilterContext } from "../context/FilterContext";
import TodoItem from "./TodoItem";

function TodoList() {
    const todoContext = useContext(TodoContext);

    const filterContext = useContext(FilterContext);

    if(!todoContext || !filterContext) return null;

    const todos = todoContext.todos;
    const filter = filterContext.filter;

    
}

export default TodoList;