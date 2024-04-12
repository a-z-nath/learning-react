import { useState } from "react";

function App() {
  
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen"
     style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-white shadow-lg">
    <button
    className="outline-none px-4 py-1 rounded-full"
    style={{backgroundColor: "red"}}
    onClick={()=> setColor("red")}
    >Red</button>

    <button
    className="outline-none px-4 py-1 rounded-full"
    style={{backgroundColor: "green"}}
    onClick={()=> setColor("green")}
    >Green</button>

    <button
    className="outline-none px-4 py-1 rounded-full"
    style={{backgroundColor: "blue"}}
    onClick={()=> setColor("blue")}
    >Blue</button>
    <button
    className="outline-none px-4 py-1 rounded-full"
    style={{backgroundColor: "skyblue"}}
    onClick={()=> setColor("skyblue")}
    >Skyblue</button>
    <button
    className="outline-none px-4 py-1 rounded-full"
    style={{backgroundColor: "gray"}}
    onClick={()=> setColor("gray")}
    >Gray</button><button
    className="outline-none px-4 py-1 rounded-full"
    style={{backgroundColor: "black"}}
    onClick={()=> setColor("black")}
    >black</button><button
    className="outline-none px-4 py-1 rounded-full text-black border"
    style={{backgroundColor: "white"}}
    onClick={()=> setColor("white")}
    >white</button><button
    className="outline-none px-4 py-1 rounded-full"
    style={{backgroundColor: "tomato"}}
    onClick={()=> setColor("tomato")}
    >tomato</button><button
    className="outline-none px-4 py-1 rounded-full"
    style={{backgroundColor: "gray"}}
    onClick={()=> setColor("gray")}
    >Gray</button>
    </div>
      </div>
    </div>
  )
}

export default App
