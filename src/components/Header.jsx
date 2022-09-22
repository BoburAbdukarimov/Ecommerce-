import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLink } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <Headers>
           <Container>
               <Row>
                <Left>
                    <FontAwesomeIcon icon={faLink} className="icon" />
                    Toplink
                </Left>
                <Right>
									<ContentOne>
									  <Alink href="#">u qanday ishlaydi</Alink>
                    <Alink href="#">Xususiyat</Alink>
									</ContentOne>

                  <ContentTwo>
                    <Link to="/login">
										<Alinks href="#">Kirish</Alinks>
                    </Link>
                    <Link to="/register">
                    <Alinkk href="#">Ro'yxatdan o'tish</Alinkk>
                    </Link>
									</ContentTwo>
                    
                </Right>
               </Row>
           </Container>
       </Headers>
    );
};

const Headers = styled.div`
    width: 100%;
    padding: 20px 20px;
    background-color: #E8E9F1;

`
const Container = styled.div`
   width: 80%;
   margin: 0 auto;

`
const Row = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

`
const Left = styled.a`
color: #5831AD;
font-size: 24px;
font-weight: 700;
display: flex;
justify-content: center;
align-items: center;
`
const Right = styled.div`
color: #b4dcff;
display: flex;
justify-content: space-between;
`

const Alinks = styled.a`
    background-color: #5831AD;
    margin: 0 10px;
    padding: 12px 24px;
		border-radius: 5px;
		color: #fff;
		text-transform: capitalize;
    &:nth-child(2){
      background: none;
		border: 2px solid #5831AD;

    }
  &:hover{
		background: #fff;
		border-radius: 5px;
    padding: 12px 24px;
		border: 2px solid #5831AD;
		color: #5831AD;
    transition: all .2s ease-in-out;
	}		
`
const Alinkk = styled.a`
    background-color: #fff;
    margin: 0 10px;
    padding: 12px 24px;
		border-radius: 5px;
		color: #000000;
		text-transform: capitalize;
		border: 2px solid #5831AD;
  &:hover{
	  background-color: #5831AD;
      color: #fff;
		border: 2px solid #5831AD;
		border-radius: 5px;
    padding: 12px 24px;
    transition: all .2s ease-in-out;
	}	
`
const Alink = styled.a`
			margin: 0 20px;
			color: #000;
			font-size: 16px;
			text-transform: capitalize;
			padding: 10px;

		&:hover{
				border-radius: 5px;
				border: 2px solid #5831AD;
				color: #5831AD;
				padding: 10px;
        transition: all .2s ease-in-out;
		}


` 
const ContentOne = styled.div`
  margin-right: 60px;
	display: inline-block;
` 
const ContentTwo = styled.div`
` 

export default Header;