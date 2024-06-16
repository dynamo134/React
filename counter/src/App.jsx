import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    let [count,setCount] = useState(0) //React hooks
    // let count=0;

    const addValue=()=>{
         
        // if(count>=20)
        //     setCount(0);
        // else
            setCount(count+1)
    }
    const removeValue=()=>{
        if(count<=0){
            count=0;
            setCount(count);
        }  
        else
            setCount(count-1);
    }
    const reset=()=>{
        setCount(0)
    }
    return(
     <div className="container">
        <h1>React Counter</h1>
        <h2>Counter value : {count}</h2>
        <button onClick={reset}>Reset the Counter</button>
        <br />
        <button onClick={addValue}>increase Value</button>
        <button onClick={removeValue}>Decrease Value</button>
        
     </div>
    ) 
}

export default App;