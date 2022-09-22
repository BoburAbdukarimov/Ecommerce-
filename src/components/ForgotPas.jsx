import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {LoginStyle, Row, LoginTitle, LoginText,  RegisterBox, RegisterLabel, RegisterInput, RegisterBtn, IconInput} from "../styles"


const ForgotPas = () => {
    return (
        <LoginStyle>
        <Row>
            <LoginTitle>Parolni Unutdingizmi?</LoginTitle>
            <LoginText>Agar parolni unutgan bo'lsangiz, parolingizni tiklang!</LoginText>
                <form>
                    <RegisterBox>
                    <RegisterLabel>elektron pochta</RegisterLabel>
                    <IconInput>
                         <RegisterInput type="text" placeholder='Ex. Saul Ramirez' />
					    	<FontAwesomeIcon icon={faAt} className="inputIcon" />
                    </IconInput>
                    <RegisterBtn>Qabul qilish</RegisterBtn>
                    </RegisterBox>
                </form>
        </Row>
    </LoginStyle>
    );
};

export default ForgotPas;