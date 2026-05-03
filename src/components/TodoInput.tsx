import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoInput() {
    const [text, setText] = useState("");

    const todoContext = useContext(TodoContext);

    if(!todoContext) return null;

    const addTodo = todoContext.addTodo;

    function handleSubmit (e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        if(!text.trim()) return;

        // ADD TODO FUNCTION CALL FROM TODOPROVIDER
        addTodo(text);

        // CLEAR INPUT AFTER SUBMIT
        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={text}
            onChange={(e) => 
                setText(e.target.value)
            }
            placeholder="Add todo" 
            />

            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoInput;