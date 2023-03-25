import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectRouters from "./Routers/ProjectRouters"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProjectRouters />
    </>
    
  )
}

export default App
