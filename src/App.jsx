import React, { useEffect, useState } from 'react'
import './App.css'
import NewToDoForm from './NewToDoForm';
import ToDoList from './ToDoList';

const App = () => {
  const [toDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []

    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(toDos))
  }, [toDos])

  const addToDo = (title) => {
    setToDos((currentToDos) => {
      return [
        ...currentToDos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  const toggleToDo = (id, completed) => {
    setToDos(currentToDos => {
      return currentToDos.map(toDo => {
        if (toDo.id === id) {
          return { ...toDo, completed }
        }
        return toDo
      })
    })
  }

  const deleteToDo = (id) => {
    setToDos(currentToDos => {
      return currentToDos.filter(toDo => toDo.id !== id)
    })
  }

  return (
    <section className='container'>
      <NewToDoForm onSubmit={addToDo} />
      <h2 className='header'>To Do List</h2>
      <ToDoList 
      toDos = {toDos} 
      toggleToDo = {toggleToDo} 
      deleteToDo = {deleteToDo}
      />
    </section>
  )
}

export default App;
