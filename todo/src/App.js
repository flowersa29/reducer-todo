import React, { useState } from "react"
import "./App.css"

function App() {
  //setup our to-do list
  const [todoList, setToDoList] = useState([{ text: "move the trash" }, { text: "wash the car" }, { text: "kick the cat" }])

  //setup our Input value
  const [value, setValue] = useState("")

  // handle the submit of form
  const handleSubmit = (e) => {
    e.preventDefault()
    addToDo(value)
    setValue("")
    console.log("form submitted")
  }

  // add to-do
  const addToDo = (text) => {
    const upDatedToDoList = [...todoList, { text }]
    setToDoList(upDatedToDoList)
  }
  // delete to-do
  const handledDelete = (todo) => {
    const filteredToDoList = todoList.filter((currentToDListValue) => currentToDListValue !== todo)
    setToDoList(filteredToDoList)
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <div className="container"></div>
      {todoList.map((todo, i) => (
        <div key={i}>
          <p>{todo.text}</p>
          <button onClick={() => handledDelete(todo)}>Delete</button>
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
