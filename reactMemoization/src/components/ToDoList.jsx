import React from "react";

const TodoList = React.memo(({ todos }) => {
  console.log("Rendering TodoList");
  return (
    <ul className="list-group">
      {todos.length === 0 && (
        <li className="list-group-item text-muted">No todos found.</li>
      )}
      {todos.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.text}
        </li>
      ))}
    </ul>
  );
});

export default TodoList;
