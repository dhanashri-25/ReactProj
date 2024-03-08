
import { useState } from 'react';
import './App.css'

function App() {
  const [counter,setcounter]=useState(15);
  
  const addValue=()=>{
    setcounter(counter+1);
    setcounter(counter+1);
    setcounter(counter+1);
    setcounter(counter+1);
    //we added it 4 times still it will add value only one time 

    //if we want to jump value from 15 to 17
    setcounter((prevcounter)=>prevcounter+1);
    setcounter((prevcounter)=>prevcounter+1);

    console.log(counter);
  }

  const remValue=()=>{
    setcounter(counter-1);
    console.log(counter);
  }

  return (
    <>
    <h1>Learning React {counter}</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Add value</button>
    <button onClick={remValue}>remove value</button>
    <p>footer:{counter}</p>

    </>
  )
}

export default App
//here we will learn state