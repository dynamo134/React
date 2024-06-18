import{useState} from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button 
        onClick={()=> setColor("red")}
        className="flex flex-wrap rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"Red"}}>Red</button>
        <button 
        onClick={()=> setColor("green")}
        className="flex flex-wrap rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"Green"}}>Green</button>
        <button 
        onClick={()=> setColor("blue")}
        className="flex flex-wrap rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
        <button 
        onClick={()=> setColor("black")}
        className="flex flex-wrap rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"Black"}}>Black</button>
        <button 
        onClick={()=> setColor("grey")}
        className="flex flex-wrap rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"grey"}}>Grey</button>
        <button 
        onClick={()=> setColor("orange")}
        className="flex flex-wrap rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"Orange"}}>Orange</button>
        <button 
        onClick={()=> setColor("purple")}
        className="flex flex-wrap rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>
        <button 
        onClick={()=> setColor("yellow")}
        className="flex flex-wrap rounded-full px-4 py-1 text-white shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>

        </div>
      </div>
    </div>
  )
}

export default App
