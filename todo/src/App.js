import React, { useState, useReducer } from "react"
import {initialState, todoReducer} from "./reducers"
import "./App.css"

function App() {
  //setup our to-do list
  // const [todoList, setToDoList] = useState([{ text: "move the trash" }, { text: "wash the car" }, { text: "kick the cats" }])

  //setup our Input value
  const [value, setValue] = useState("")

  const [state, dispatch] = useReducer(todoReducer, initialState)

  console.log("this is my state", state)

  // handle the submit of form
  const handleSubmit = (e) => {
    e.preventDefault()
    addToDo(value)
    setValue("")
    console.log("form submitted")
  }

  // add to-do
  const addToDo = (text) => {
    const upDatedToDoList = [...state.todoList, { text }]
    state.setToDoList(upDatedToDoList)
  }
  // delete to-do
  const handledDelete = (todo) => {
    const filteredToDoList = state.todoList.filter((currentToDListValue) => currentToDListValue !== todo)
    state.setToDoList(filteredToDoList)
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <div className="container"></div>
      {state.todoList.map((todo, i) => (
        <div key={i}>
          <p>{todo.text}</p>
          <button onClick={() => handledDelete(state.todo)}>Delete</button>
        </div>
      ))}
      <div>
        <form onSubmit={handleSubmit}>
          <input placeholder="type To-Do Here" value={value} onChange={(e) => setValue(e.target.value)} />
          <button type={handleSubmit}>add to-do</button>
        </form>
      </div>
    </div>
  )
}

export default App
