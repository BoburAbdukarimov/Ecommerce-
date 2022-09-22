import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Login from './components/Login';
import Register from './components/Register';
import ForgotPas from './components/ForgotPas';


function App() {

  return (
    <div className="App">
    <BrowserRouter>
     <Header />
     <Routes>
 
      <Route path="/login" element={<Login />}  />
      <Route path="/register" element={<Register />}  />
      <Route path="/forgot" element={<ForgotPas />}  />
   
     </Routes>
   </BrowserRouter>
    </div>
 
  )
}



export default App
