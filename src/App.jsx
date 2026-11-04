import React, { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;

  const addValue = () => {
    if (counter >= 20) {
      alert("Sorry you are cross your today's limit");
    } else {
      // counter = counter + 1;
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter <= 0) {
      alert("Negative value is not allowed");
    } else {
      // counter = counter - 1;
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <div className="box">
        <h1>Chai aur React</h1>
        <h2>Counter Value : {counter}</h2>
        <button onClick={addValue}>Add Value {counter}</button>
        <br />
        <button onClick={removeValue}>Remove Value {counter}</button>
        <p>Footer : {counter}</p>
      </div>
    </>
  );
}

export default App;
