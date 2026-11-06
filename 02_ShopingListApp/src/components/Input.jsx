import { useState } from "react";
import "../App.css";

const Input = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if(item.trim() === ""){
      return;
    }
    setItems([...items, item]);
    setItem("");
  };

  const deleteItem = (index) =>{
    setItems(items.filter((value,i) => i != index))

  }
 return (
  <div className="todo-card">
    <h2>My Todo List</h2>

    <input
      placeholder="Enter your item"
      value={item}
      onChange={(e) => setItem(e.target.value)}
    />

    <button onClick={addItem}>Add</button>
    

    <div className="todo-list">
      {items.map((value, index) => (
        <li key={index}>{value}
        <button onClick={() => deleteItem(index)}>
          Delete
        </button>
        </li>

      ))}
    </div>

    


  </div>
);
};

export default Input;
