import React, { useState } from "react";
import TodoItem from './TodoItem'

function App() {

  
  const [ changeInput, setChangeInput ] = useState('')
  const [ items, setItems ] = useState([])

  const submitHandler = () => {
    setItems(prevItems => {
      return [...prevItems, changeInput]
    })
    setChangeInput('') 
  }

  const changeInputHandler = (event) => {
    const val = event.target.value
    setChangeInput(val)
  }



  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={changeInputHandler} 
          name='input' 
          type="text" 
          value={changeInput}/>
        <button onClick={submitHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item => {
            return <TodoItem item={item}/>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
