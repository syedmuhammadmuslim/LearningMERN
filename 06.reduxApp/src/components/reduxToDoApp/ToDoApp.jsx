import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo } from "./toDoSlicer";
import { useState } from "react";

const ToDoApp = () => {
  const data = useSelector((store) => store.toDoAppReducer.todos);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  return (
    <>
      <div className="container my-3">
        <h3 className="mb3">Redux To Do Application</h3>
        <input
          type="text"
          className="form-control"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter Task"
        />
        <button
          className="btn btn-primary my-2"
          onClick={() => dispatch(addToDo(task))}
        >
          Add To Do
        </button>
      </div>
      <ul className="list-group">
        {data
          ? data.map((item) => (
              <li
                className="list-group-item d-flex justify-content-between"
                key={item.id}
              >
                {item.text}
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteToDo(item.id))}
                >
                  Delete To Do
                </button>
              </li>
            ))
          : ""}
      </ul>
    </>
  );
};

export default ToDoApp;
