import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  //1st part is variable 2nd is method which is responding for chaging variable

  // function changecolor(color){
  //   setColor(color)
  // }

  return (
    <>
    {/* more optimised way of doing it  */}
    <div className='w-full h-screen duration-200 'style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center  bg-white gap-3 px-3 py-2 rounded-3xl'>
          <button 
          onClick={()=>setColor('red')}
          style={{backgroundColor:'red'}}
          className='rounded-full outline-none px-4 py-1 bg-white shadow-lg text-black font-bold'>Red</button>

          <button 
          onClick={()=>setColor('green')}
          style={{backgroundColor:'green'}}
          className='rounded-full outline-none px-4 py-1 bg-white shadow-lg text-black font-bold'>Green</button>

          <button 
          onClick={()=>setColor('Yellow')}
          style={{background:'yellow'}}
          className='rounded-full outline-none px-4 py-1 bg-white shadow-lg text-black font-bold'>Yellow</button>
        </div>
      </div>
    </div>

    {/* <div className='w-full h-screen duration-200 'style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl'>
          <button 
          onClick={()=>changecolor('red')}
          
          className='rounded-full outline-none px-4 py-1 bg-white shadow-lg text-black'>Red</button>

          <button 
          onClick={()=>changecolor('green')}
          className='rounded-full outline-none px-4 py-1 bg-white shadow-lg text-black'>Green</button>

          <button 
          onClick={()=>changecolor('Yellow')}
          className='rounded-full outline-none px-4 py-1 bg-white shadow-lg text-black'>Yellow</button>
        </div>
      </div>

    </div> */}
      
    </>
  )
}

export default App
