import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../Redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCheckbox = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  const handleClick = () => {
    dispatch(deleteTodo({ id }));
  };
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onClick={handleCheckbox}
          ></input>
          {title}
        </span>
        <button className="btn btn-danger" onClick={handleClick}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
