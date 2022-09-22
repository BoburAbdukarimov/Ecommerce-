import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faUnlockKeyhole} from '@fortawesome/free-solid-svg-icons'


const Login = () => {
    return (
        <LoginStyle>
            <Row>
                <LoginTitle>Kirish</LoginTitle>
                <LoginText>Barcha xarajatlar va daromadlaringizni bir joyda kuzatib borish uchun hozir tizimga kiring!</LoginText>
                <LoginForm>
                    <form>
                        <RegisterBox>
                        <RegisterLabel>elektron pochta</RegisterLabel>
												<IconInput>
												   <RegisterInput type="text" placeholder='Ex: abc@example.com' />
                           <FontAwesomeIcon icon={faAt} className="inputIcon" />
											 </IconInput>
                     
												
                        </RegisterBox>
                       
                       <RegisterBox>
                       <RegisterLabel>Parol</RegisterLabel>
                       <IconInput>
                          <RegisterInput type="password" placeholder='**********' />
					    	<FontAwesomeIcon icon={faUnlockKeyhole} className="inputIcon" />
                       </IconInput>
                       
                        <Link to="/forgot">
                        <RegisterAround>Parolni unutdingizmi?</RegisterAround>
                        </Link>
                        <RegisterBtn>Kirish</RegisterBtn>
                       </RegisterBox>
                       <RegisterBlok>
                        <AccountNot>Accountingiz mavjud emasmi?</AccountNot>
                        <Link to="/register">
                        <NextLink>Ro‘yxatdan o‘tish</NextLink>
                        </Link>
                        </RegisterBlok>
                    </form>
                </LoginForm>
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
const LoginForm = styled.div`
    
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