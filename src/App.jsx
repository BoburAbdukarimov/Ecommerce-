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
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="App">
    <BrowserRouter>
     <Header />
     <Routes>
      <Route path="/login" element={<Login 
       email={email}
       setEmail={setEmail}
       password={password}
       setPassword={setPassword}
        />}  />
      <Route path="/register" element={<Register
        link={link}
        setLink={setLink}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        number={number}
        setNumber={setNumber}
        />}  />
      <Route path="/forgot" element={<ForgotPas />}  />
      <Route path="/account" element={<Account link={link} />}  />
      <Route path="/verification" element={<Verification />}  />
     </Routes>
   </BrowserRouter>
    </div>
 
  )
}



export default App
