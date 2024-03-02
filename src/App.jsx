import React from "react"
import {Routes,Route} from 'react-router-dom'

import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/LoginPage/LoginPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
function App() {

  return (
    <>
       <Routes>
         <Route path="/login" element={<LoginPage/>}/>
         <Route path="/register" element={<RegisterPage/>}/>
         <Route path='/' element={<HomePage/>}/> 
       </Routes>

    </>
  )
}

export default App
