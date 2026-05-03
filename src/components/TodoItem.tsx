import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import type { Todo } from "../providers/TodoProvider";

function TodoItem({todo}: {todo: Todo}) {
    const todoContext = useContext(TodoContext);

    if (!todoContext) return null;

    const toggleTodo = todoContext.toggleTodo;
    const deleteTodo = todoContext.deleteTodo;

    return (
        <div>
            <span
                style={{
                    textDecoration:
                        todo.completed
                            ? "line-through"
                            : "none"
                }} >
                {todo.text}
            </span>

            <button
                onClick={() =>
                    toggleTodo(todo.id)
                }
            >
                Complete
            </button>

            <button
                onClick={() =>
                    deleteTodo(todo.id)
                }
            >
                Delete
            </button>
        </div>
    )
}

export default TodoItem;