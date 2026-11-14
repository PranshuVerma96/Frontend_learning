import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("white");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center pt-10 tracking-wide text-gray-900 drop-shadow-lg">
  Background Changer Project
</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-3 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-3xl text-white shadow-sm cursor-pointer"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-3xl text-white shadow-sm cursor-pointer"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-3xl text-white shadow-sm cursor-pointer"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-3xl text-white shadow-sm cursor-pointer"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("Green")}
              className="outline-none px-4 py-1 rounded-3xl text-white shadow-sm cursor-pointer"
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("Brown")}
              className="outline-none px-4 py-1 rounded-3xl text-white shadow-sm cursor-pointer"
              style={{ backgroundColor: "brown" }}
            >
              Brown
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-3xl text-white shadow-sm cursor-pointer"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("")}
              className="outline-none px-4 py-1 rounded-3xl shadow-sm cursor-pointer"
            >
              All Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
