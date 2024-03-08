import { useState } from 'react'
import Card from './Components/Card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 classNameName='text-3xl bg-green-300 p-3 rounded-md'>Vite with tailwind</h1>
    <Card username="dhanashri"></Card><br/>

    <Card></Card><br/>

    <Card></Card>

    </>
  )
}

export default App
