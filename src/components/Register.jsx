import { faAt, faLink, faUnlockKeyhole, faUser } from '@fortawesome/free-solid-svg-icons';
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

const Register = ({link, setLink, name, setName, number, setNumber, email, setEmail, password, setPassword}) => {

   

    const navigate = useNavigate()

    const creatpost = (e) =>{
        e.preventDefault()

            // api
                axios.post("http://207.154.246.125:8888/register", {
                    fullname: name,
                    phone: number,
                    email: email,
                    password: password,
                    username: link
                    })
                    .then(res => {
                        console.log(res);
                        toast.success("Success Notification !", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        navigate("/account")
                    }).catch(err =>{
                        console.log(err);
                        toast.error("Error Notification !", {
                            position: toast.POSITION.TOP_LEFT
                          });
                    })
            // api
    
    }


    // Java script validation
    
    // Java script validation
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
                   
                   </RegisterBox>

                   <RegisterBox>
                    <RegisterLabel htmlFor='firstName' >elektron pochta</RegisterLabel>
                                            <IconInput>
                                               <RegisterInput 
                                               id='firstName'
                                               name='firstName'
                                               type="email" 
                                               placeholder='Ex: abc@example.com' 
                                               onChange={(e) => setEmail(e.target.value)} 
                                               />
                                               
                       <FontAwesomeIcon icon={faAt} className="inputIcon" />
                                         </IconInput>
                 
                                            
                    </RegisterBox>

                    <RegisterBox>
                   <RegisterLabel htmlFor='password'>Parol</RegisterLabel>
                   <IconInput>
                      <RegisterInput 
                                                name='password'
                                                id='password'
                                                type="password"
                                                 placeholder='**********'
                                                 onChange={(e) => setPassword(e.target.value)}
                                                  />
                        <FontAwesomeIcon icon={faUnlockKeyhole} className="inputIcon" />
                   </IconInput>
                   </RegisterBox>

                   <RegisterBox>
                    <RegisterLabel htmlFor='firstName' >Foydalanuvchi nomi</RegisterLabel>
                                            <IconInput>
                                               <RegisterInput 
                                               id='firstName'
                                               name='firstName'
                                               type="text" 
                                               placeholder='Ex. Saul Ramirez' 
                                               onChange={(e) => setLink(e.target.value)} 
                                               />
                                               
                       <FontAwesomeIcon icon={faLink} className="inputIcon" />
                                         </IconInput>
                                         <Link to="/forgot">
                    <RegisterBtn onClick={creatpost}>Keyingi</RegisterBtn>                       
                    </Link>
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