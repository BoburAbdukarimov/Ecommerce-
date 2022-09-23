import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {LoginStyle, Row, LoginTitle, LoginText,  RegisterBox, RegisterLabel, RegisterInput, RegisterBtn, IconInput} from "../styles"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Verification = () => {
    const [checkmail, setCheckmail] = useState("")

		const navigate = useNavigate()

    const creatpost = (e) =>{
        e.preventDefault()

            // api
                axios.post("http://207.154.246.125:8888/verificationcode", {
                    email: checkmail
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
                        navigate("/verification")

                    })
            // api
    
    }
    return (
        <LoginStyle>
        <Row>
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
            <LoginTitle>Parolni Unutdingizmi?</LoginTitle>
            <LoginText>Agar parolni unutgan bo'lsangiz, parolingizni tiklang!</LoginText>
                <form>
                    <RegisterBox>
                    <RegisterLabel>elektron pochta</RegisterLabel>
                    <IconInput>
                         <RegisterInput 
                         type="text" 
                         placeholder='EX: 123456' 
                         onChange={(e) => setCheckmail(e.target.value)}
                         />
					    	<FontAwesomeIcon icon={faAt} className="inputIcon" />
                    </IconInput>
                    <RegisterBtn onClick={creatpost}>Qabul qilish</RegisterBtn>
                    </RegisterBox>
                </form>
        </Row>
    </LoginStyle>
    );
};

export default Verification;