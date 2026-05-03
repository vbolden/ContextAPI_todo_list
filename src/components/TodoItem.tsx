import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import type { Todo } from "../providers/TodoProvider";
import { useState } from "react";

function TodoItem({todo}: {todo: Todo}) {
    const todoContext = useContext(TodoContext);

    if (!todoContext) return null;

    const toggleTodo = todoContext.toggleTodo;
    const deleteTodo = todoContext.deleteTodo;
    const editTodo = todoContext.editTodo;

    const [isEditing, setIsEditing] = useState(false);

    return (
        <div>
            <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={() => 
                toggleTodo(todo.id)
            }/>
            <span
                style={{
                    textDecoration:
                        todo.completed
                            ? "line-through"
                            : "none"
                }} >
                {todo.text}
            </span>

            <button onClick={() => editTodo(todo.id)} >
                Edit
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