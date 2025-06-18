import React, { useState, useCallback, useMemo } from "react";
import TodoList from "./ToDoList";

function ToDoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const addTodo = useCallback(() => {
    if (input.trim() === "") return;
    setTodos((prev) => [...prev, { id: Date.now(), text: input }]);
    setInput("");
  }, [input]);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(search.toLowerCase())
    );
  }, [todos, search]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Memoized To Do App</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add new todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          Add
        </button>
      </div>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TodoList todos={filteredTodos} />
    </div>
  );
}

export default ToDoApp;
