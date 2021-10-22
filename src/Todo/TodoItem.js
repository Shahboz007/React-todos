import React, { useContext } from "react";
import "./Todo.css";
import Context from "../context";
import PropTypes from "prop-types";

function TodoItem({ todo, index }) {
  const { onChange, removeTodo } = useContext(Context);

  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li className="todo-item">
      <span className={classes.join(" ")}>
        <input
          className="input"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <b className="index">{index + 1}</b>
        {todo.title}
      </span>
      <button className="remove-btn" onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TodoItem;
