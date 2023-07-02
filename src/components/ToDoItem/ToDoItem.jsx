import React from "react";
import classes from './ToDoItem.module.css';

const ToDoItem = ({ completed, id, title, toggleToDo, deleteToDo }) => {
  return (
    <li>
      <label>
        <input type='checkbox'
          checked={completed}
          onChange={event => toggleToDo(id, event.target.checked)}
        />
        {title}
      </label>
      <button
        onClick={() => deleteToDo(id)}
        className={`${classes['btn']} ${classes['btn-danger']}`} >
        Delete
      </button>
    </li>
  )
}

export default ToDoItem;