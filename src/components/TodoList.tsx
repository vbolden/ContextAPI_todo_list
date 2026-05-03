import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { FilterContext } from "../context/FilterContext";
import type { Todo } from "../providers/TodoProvider";
import TodoItem from "./TodoItem";

function TodoList() {
    const todoContext = useContext(TodoContext);

    const filterContext = useContext(FilterContext);

    if (!todoContext || !filterContext) return null;

    const todos = todoContext.todos;
    const filter = filterContext.filter;

    // CONSOLE LOGS FOR DEBUGGING
    // console.log(todos);
    // console.log(filter);

    const filteredTodos = todos.filter((todo: Todo) => {
        if (filter === "active") {
            return !todo.completed;
        }

        if (filter === "completed") {
            return todo.completed;
        }
        return true;
    });

    return (
        <div>
            {filteredTodos.map((todo: Todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </div>
    )
}

export default TodoList;