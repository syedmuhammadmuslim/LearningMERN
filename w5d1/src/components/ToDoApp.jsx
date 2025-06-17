import React, { useReducer } from "react";

const ToDoApp = () => {
  const initialState = {
    // todos: [{ text: "To Do 1" }],
    todos: [],
    inputValue: "",
  };

  const todosReducer = (currentState, event) => {
    switch (event.whatToDo) {
      case "setInput":
        return { ...currentState, inputValue: event.value };
      case "addTodo":
        return {
          ...currentState,
          todos: [...currentState.todos, { text: event.value }],
          inputValue: "",
        };

      default:
        return currentState;
    }
  };
  const [toDoState, toDoDispatcher] = useReducer(todosReducer, initialState);
  return (
    <div className="my-3">
      <h2>To Do List</h2>
      <form onSubmit={(e) => e.preventDefault()} className="mb-4">
        <input
          type="text"
          className="form-control mb-2"
          value={toDoState.inputValue}
          onChange={(e) =>
            toDoDispatcher({ whatToDo: "setInput", value: e.target.value })
          }
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() =>
            toDoDispatcher({ whatToDo: "addTodo", value: toDoState.inputValue })
          }
        >
          Add ToDo
        </button>
      </form>
      <ul className="list-group">
        {toDoState.todos.map((item, index) => (
          <li key={index} className="list-group-item">
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
