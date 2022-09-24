import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Login from './components/Login';
import Register from './components/Register';
import ForgotPas from './components/ForgotPas';
import StepTwo from './components/StepTwo';
import Account from './components/Account';
import Verification from './components/Verificaon';


function App() {
  const [link, setLink] = useState("")

  return (
    <div className="App">
    <BrowserRouter>
     <Header />
     <Routes>
      <Route path="/login" element={<Login />}  />
      <Route path="/register" element={<Register />}  />
      <Route path="/forgot" element={<ForgotPas />}  />
      <Route path="/stepTwo" element={<StepTwo link={link} setLink={setLink} />}  />
      <Route path="/account" element={<Account link={link} />}  />
      <Route path="/verification" element={<Verification />}  />
     </Routes>
   </BrowserRouter>
    </div>
 
  )
}



export default App
