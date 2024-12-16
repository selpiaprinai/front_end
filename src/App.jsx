import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataUser from './component/DataUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
        <DataUser />
       
    </>
  )
}

export default App
