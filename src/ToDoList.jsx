import React from "react";
import ToDoItem from "./ToDoItem";
import './app.css';

const ToDoList = ({toDos, toggleToDo, deleteToDo}) => {

    console.log(toDos);
    return(
        <ul className='list'>
        {toDos.length === 0 && "No ToDos"}
        {toDos.map(toDo => {
           return (
            <ToDoItem 
            {...toDo}
            key= {toDo.id}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo}
            />
          )
        })}

      </ul>
    )
}

export default ToDoList;