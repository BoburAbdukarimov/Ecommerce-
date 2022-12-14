import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faUnlockKeyhole} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { useNavigate } from "react-router-dom";



const Login = ({email, setEmail, password, setPassword}) => {
    const [arr, setArr] = useState("")
    const [style, setStyle] = useState({})
		
		
		const navigate = useNavigate();

    const creatdata = (e) => {
			e.preventDefault()
    //api bn ishaymiz

    let myHeaders = new Headers();
    myHeaders.append("Content-Type",
    "application/json");

    let raw = JSON.stringify({
        "email": email,
        "password": password,
    });

    let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
		axios.post("http://207.154.246.125:8888/login", requestOptions)	
        .then(res => {
			console.log(res);
			toast.success("Success Notification !", {
				position: toast.POSITION.TOP_RIGHT
			});
			navigate("/account");
		})
        .catch(err =>{
			console.log("err", err);
			toast.error("Error Notification !", {
        position: toast.POSITION.TOP_LEFT
      });
			navigate("/login");

		
		})
    //api bn ishaymiz

    //////////////// 

     // validation
     let style = {}
     if(email === "" || password === ""){
        style = {
          border : "2px solid red"
        }
     }else{
        style = {
            border: "2px solid green"
        }
     }
     setStyle(style)

   
    // validation


      
    
    }

    // onchange
    const validateChange =(e)=>{
        let elInputName = e.target.name;
        let elInputValue = e.target.value;
        let a = {[elInputName] : elInputValue}
        

        let style = {}
        
        if(a[elInputName] === ""){
           style = {
             border : "2px solid red"
           }
				   setArr("To'ldirish majburiy!")
        }else{
           style = {
               border: "2px solid green"
           }
					 setArr("")

        }
        setStyle(style)
   

        setEmail(elInputValue)
        setPassword(elInputValue)
   }
    // onchange

   

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
                <LoginTitle>Kirish</LoginTitle>
                <LoginText>Barcha xarajatlar va daromadlaringizni bir joyda kuzatib borish uchun hozir tizimga kiring!</LoginText>
                    <form >
                        <RegisterBox>
                        <RegisterLabel htmlFor='firstName' >elektron pochta</RegisterLabel>
												<IconInput>
												   <RegisterInput 
                                                   style={style}
                                                   id='firstName'
                                                   name='firstName'
                                                   type="email" 
                                                   placeholder='Ex: abc@example.com' 
                                                   onChange={validateChange} 
                                                   />
																									 
                                                   
                           <FontAwesomeIcon icon={faAt} className="inputIcon" />
											 </IconInput>
										 <p style={{color: "red"}}>{arr} </p>
												
                        </RegisterBox>
                       
                       <RegisterBox>
                       <RegisterLabel>Parol</RegisterLabel>
                       <IconInput>
                          <RegisterInput 
                                                    style={style}
													type="password"
													 placeholder='**********'
													 onChange={validateChange}
													  />
					    	<FontAwesomeIcon icon={faUnlockKeyhole} className="inputIcon" />
                       </IconInput>
										 <p style={{color: "red"}}>{arr} </p>
                       
                        <Link to="/forgot">
                        <RegisterAround>Parolni unutdingizmi?</RegisterAround>
                        </Link>
                        <RegisterBtn type='submit' onClick={creatdata}>Kirish</RegisterBtn>
                        
                       </RegisterBox>
                       <RegisterBlok>
                        <AccountNot>Accountingiz mavjud emasmi?</AccountNot>
                        <Link to="/register">
                        <NextLink>Ro???yxatdan o???tish</NextLink>
                        </Link>
                        </RegisterBlok>
                    </form>
            </Row>
        </LoginStyle>
    );
};

const LoginStyle = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const Row = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 380px;
`
const LoginTitle = styled.h1`
       color: #673ab7;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: .25px;
        line-height: 38px;
        text-align: start;
`
const LoginText = styled.p`
         color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    height: 48px;
    letter-spacing: -.011em;
    line-height: 24px;
    margin: 10px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
    width: 360px;
`
const RegisterBox = styled.div`
        display: flex;
        flex-direction: column;
        margin: 15px 0;
`
const RegisterLabel = styled.label`
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
`
const RegisterInput = styled.input`
      border: 2px solid #673ab7;
			border-radius: 10px;
			height: 40px;
			outline: none;
			padding: 10px 15px 10px 40px;
			width: 343px;
			margin-bottom: 15px;
`
const RegisterAround = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-decoration-style: solid;
    color: #673ab7;
`
const RegisterBtn = styled.button`
        background: linear-gradient(180deg,#673ab7,#512da8);
        border: 2px solid #673ab7;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        height: 40px;
        letter-spacing: -.011em;
        line-height: 24px;
        margin-top: 15px;
        width: 343px;
`
const RegisterBlok = styled.div`
        display: flex;
        margin-top: 18px;
        text-align: center;
`
const NextLink = styled.a`
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        margin-left: 15px;
        -webkit-text-decoration-line: underline;
        text-decoration-line: none;
        color: #673ab7;
`
const AccountNot = styled.p`
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: -.011em;
        line-height: 19px;
`
const IconInput = styled.span`
position: relative;
`

export default Login;