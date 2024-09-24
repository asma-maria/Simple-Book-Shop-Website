import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import FAQ from './components/FAQ'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Homepage></Homepage> 
      
     
    </>
  )
}

export default App
