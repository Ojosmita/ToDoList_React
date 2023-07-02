import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import classes from './ToDoList.module.css';

const ToDoList = ({ toDos, toggleToDo, deleteToDo }) => {
  return (
    <ul className={classes['list']}>
      {toDos.length === 0 && "No ToDos"}
      {toDos.map(toDo => {
        return (
          <ToDoItem
            {...toDo}
            key={toDo.id}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo}
          />
        )
      })}

    </ul>
  )
}

export default ToDoList;