import React from "react"
import {Routes,Route} from 'react-router-dom'

import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/LoginPage/LoginPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import JobPage from "./pages/JobPage/JobPage"
function App() {

  return (
    <>
       <Routes>
         <Route path="/login" element={<LoginPage/>}/>
         <Route path="/register" element={<RegisterPage/>}/>
         <Route path='/' element={<HomePage/>}/> 
         <Route path="/add-job" element={<JobPage/>} />
       </Routes>

    </>
  )
}

export default App
