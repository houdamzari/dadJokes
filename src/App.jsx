import  React,{ useState } from 'react'
import './App.css'
import HomePage from "./pages/HomePage"
import dadJokesPage from "./pages/dadJokesPage"
import { Route,Routes } from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<dadJokesPage />} path="/jokes" />
      </Routes>
      </>
    
  )
}

export default App
