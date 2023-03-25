import { useState } from 'react'
import './App.css'
import Skills from './Components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Skills></Skills>
    </div>
  )
}

export default App
