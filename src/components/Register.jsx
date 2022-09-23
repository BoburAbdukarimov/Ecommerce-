import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//styled components 
import {LoginStyle, Row, LoginTitle, LoginText,  RegisterBox, RegisterLabel, RegisterInput, RegisterBtn, RegisterBlok,
AccountNot, NextLink,IconInput,  ImageIcon } from "../styles"

const Register = () => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
   

    const navigate = useNavigate()

    const creatpost = (e) =>{
        e.preventDefault()

            // api
                axios.post("http://207.154.246.125:8888/register", {
                    email: name,
                    password: number
                    })
                    .then(res => {
                        console.log(res);
                        toast.success("Success Notification !", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        navigate("/stepTwo")
                    }).catch(err =>{
                        console.log(err);
                        toast.error("Error Notification !", {
                            position: toast.POSITION.TOP_LEFT
                          });
                    })
            // api
    
    }
    return (
        <LoginStyle>
               <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        <Row>
            <LoginTitle>Ro‘yxatdan o‘tish</LoginTitle>
            <LoginText>Barcha xarajatlar va daromadlaringizni bir joyda kuzatib borish uchun hozir tizimga kiring!</LoginText>
            
                <form>
                    <RegisterBox>
                    <RegisterLabel>toliq ism</RegisterLabel>
                    <IconInput>
                    <RegisterInput 
                    type="text" 
                    placeholder='Ex. Saul Ramirez'
                    onChange={(e) => setName(e.target.value)}
                    />
					    	<FontAwesomeIcon icon={faUser} className="inputIcon" />
                    </IconInput>
                    </RegisterBox>
                   
                   <RegisterBox>
                   <RegisterLabel>toliq nomer</RegisterLabel>
                   <IconInput>
                     <RegisterInput 
                     type="tel" 
                     required 
                     placeholder='+998'
                     onChange={(e) => setNumber(e.target.value)}
                     />
                     <ImageIcon src="https://cdn-icons-png.flaticon.com/512/168/168176.png" alt="flag" className="inputIcon" />
                   </IconInput>
                   
                    <RegisterBtn onClick={creatpost}>Keyingi</RegisterBtn>
                   </RegisterBox>
                </form>
                <RegisterBlok>
                        <AccountNot>Accountingiz mavjud emasmi?</AccountNot>
                        <Link to="/login">
                        <NextLink >Kirish</NextLink>
                        </Link>
                </RegisterBlok>
        
        </Row>
    </LoginStyle>
    );
};

export default Register;