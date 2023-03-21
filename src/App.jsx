import  React,{ useState } from 'react'
import './App.css'
import {HomePage,DadJokesPage} from "./pages"
import { Route,Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route element={<HomePage />} path="/" />
        <Route element={<DadJokesPage />} path="/jokes" /></Route>
      </Routes>
      </>
    
  )
}

export default App
