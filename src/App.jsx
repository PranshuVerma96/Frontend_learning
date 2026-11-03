import React from 'react'
import './App.css'

function App() {
  let counter = 5;
  const addValue = () =>{
    counter = counter  +1;

    console.log("clicked" ,counter);
    
    
  }
  return (
    <>
      <div className='box'>
        <h1>Chai aur React</h1>
        <h2>Counter Value : {counter}</h2>
        <button
        onClick={addValue}
        >Add Value</button>
        <br />
        <button>Remove Value</button>
      </div>
    </>
  )
}

export default App