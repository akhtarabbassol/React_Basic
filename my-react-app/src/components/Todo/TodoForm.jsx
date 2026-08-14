import { useState } from "react";

function TodoForm({ onAddTodo }) {

  const [todoText, setTodoText] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    const text = todoText.trim();

    if (!text) {
      return;
    }

    onAddTodo(text);

    setTodoText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>

      <input type="text" placeholder="Enter a todo..." value={todoText} onChange={(event) =>setTodoText(event.target.value)}
      />

      <button type="submit">
        Add Todo
      </button>

    </form>
  );
}

export default TodoForm;