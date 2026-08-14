import { useEffect, useState } from "react";

import TodoForm from "../components/Todo/TodoForm";
import TodoItem from "../components/Todo/TodoItem";
import TodoFilter from "../components/Todo/TodoFilter";

import "../components/Todo/Todo.css";

function TodoPage() {

  // Load todos from localStorage
  const [todos, setTodos] = useState(() => {

    const savedTodos =
      localStorage.getItem("todos");

    return savedTodos
      ? JSON.parse(savedTodos)
      : [];
  });


  // Filter state
  const [filter, setFilter] =
    useState("all");


  // Save todos to localStorage
  useEffect(() => {

    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );

  }, [todos]);


  // Add Todo
  const addTodo = (text) => {

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTodos((previousTodos) => [
      ...previousTodos,
      newTodo
    ]);
  };


  // Complete / Uncomplete
  const toggleTodo = (id) => {

    setTodos((previousTodos) =>
      previousTodos.map((todo) => {

        if (todo.id === id) {

          return {
            ...todo,
            completed: !todo.completed
          };

        }

        return todo;
      })
    );
  };


  // Delete Todo
  const deleteTodo = (id) => {

    setTodos((previousTodos) =>
      previousTodos.filter(
        (todo) => todo.id !== id
      )
    );
  };


  // Filter
  const filteredTodos = todos.filter(
    (todo) => {

      if (filter === "active") {
        return !todo.completed;
      }

      if (filter === "completed") {
        return todo.completed;
      }

      return true;
    }
  );


  // Remaining tasks
  const remainingTasks =
    todos.filter(
      (todo) => !todo.completed
    ).length;


  return (
    <div className="todo-page">

      <h1>Todo List</h1>

      <TodoForm
        onAddTodo={addTodo}
      />

      <TodoFilter
        filter={filter}
        setFilter={setFilter}
      />

      <div className="remaining-tasks">

        {remainingTasks}{" "}

        {remainingTasks === 1
          ? "task"
          : "tasks"}{" "}

        remaining

      </div>

      <div className="todo-list">

        {filteredTodos.length === 0 ? (

          <p className="empty-message">
            No todos found.
          </p>

        ) : (

          filteredTodos.map((todo) => (

            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />

          ))

        )}

      </div>

    </div>
  );
}

export default TodoPage;