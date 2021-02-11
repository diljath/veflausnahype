import React from "react";
import NormalButton from "../components/normalButton";
import styled from 'styled-components'
import Header from '../components/Header'

const Level0 = ({ onClick }) => {
  return (
    <Container >
       <Header image="/velkominn.gif" />

      <NormalButton text="START" onClick={onClick} level="level1"/>
      </Container>
  );
};

const Container = styled.div`
    
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;


export default Level0;
