import  React,{ useState } from 'react'
import './App.css'
import HomePage from "./pages/HomePage"
import dadJokesPage from "./pages/dadJokesPage"
import { Route,Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route element={<HomePage />} path="/" />
        <Route element={<dadJokesPage />} path="/jokes" /></Route>
      </Routes>
      </>
    
  )
}

export default App
