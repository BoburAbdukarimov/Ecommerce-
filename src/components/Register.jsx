import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

//styled components 
import {LoginStyle, Row, LoginTitle, LoginText,  RegisterBox, RegisterLabel, RegisterInput, RegisterBtn, RegisterBlok,
AccountNot, NextLink,IconInput,  ImageIcon } from "../styles"

const Register = () => {
    return (
        <LoginStyle>
        <Row>
            <LoginTitle>Ro‘yxatdan o‘tish</LoginTitle>
            <LoginText>Barcha xarajatlar va daromadlaringizni bir joyda kuzatib borish uchun hozir tizimga kiring!</LoginText>
            
                <form>
                    <RegisterBox>
                    <RegisterLabel>toliq ism</RegisterLabel>
                    <IconInput>
                    <RegisterInput type="text" placeholder='Ex. Saul Ramirez' />
					    	<FontAwesomeIcon icon={faUser} className="inputIcon" />
                    </IconInput>
                    </RegisterBox>
                   
                   <RegisterBox>
                   <RegisterLabel>toliq nomer</RegisterLabel>
                   <IconInput>
                     <RegisterInput type="tel" required value="+998" />
                     <ImageIcon src="https://cdn-icons-png.flaticon.com/512/168/168176.png" alt="flag" className="inputIcon" />
                   </IconInput>
                   
                    <RegisterBtn>Keyingi</RegisterBtn>
                   </RegisterBox>
                </form>
                <RegisterBlok>
                        <AccountNot>Accountingiz mavjud emasmi?</AccountNot>
                        <Link to="/login">
                        <NextLink>Kirish</NextLink>
                        </Link>
                </RegisterBlok>
        
        </Row>
    </LoginStyle>
    );
};

export default Register;