import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState(0);
  const addToCart = () => {
    setCart((prev) => {
      if (prev < 10) {
        return prev + 1;
      } else {
        alert("It is out of stock / Max limit reached");
      }
    });
  };
  const removeToCart = () => {
    if (cart > 0) {
      setCart(cart - 1);
    } else {
      alert("Sorry It is minimum limit reached");
    }
  };
  return (
    <>
      <div className="min-h-screen  ">
        <Navbar cart={cart} />
        <div className="flex flex-row flex-wrap gap-5 p-10">
          <Card addToCart={addToCart} removeToCart={removeToCart} />
          <Card addToCart={addToCart} removeToCart={removeToCart} />
          <Card addToCart={addToCart} removeToCart={removeToCart} />
          <Card addToCart={addToCart} removeToCart={removeToCart} />
          <Card addToCart={addToCart} removeToCart={removeToCart} />
          <Card addToCart={addToCart} removeToCart={removeToCart} />
          <Card addToCart={addToCart} removeToCart={removeToCart} />
        </div>
      </div>
    </>
  );
};

export default App;
