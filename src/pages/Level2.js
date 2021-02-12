import React from "react";
import Header from "../components/Header";
import styled from 'styled-components'

const Level2 = ({ onClick }) => {
  const myndir = [
    '/gris1.jpg',
    '/gris2.jpg',
    '/gris3.jpg',
    '/gris4.jpg',
    '/gris5.jpg',
  ]
  const handleClick = (item) => {
    if(item === "/gris4.jpg"){
      alert("AUÐVITAÐ ER BERGLIND SÆTASTI GRÍSINN!")
    }
    onClick("level3")
  }
  return (
    <div>
      <Header image="/level2.gif" />
      <StyledText>Hjálpið Berglindi að velja SÆTASTA grísinn!</StyledText>
      <ImageContainer>
      {myndir.map(item => {
        return <StyledImg image={item} onClick={() => handleClick(item)}/>
      })}
      </ImageContainer>
    </div>
  )
};

const StyledText = styled.div`
    font-size: 40px;
    background-color: white;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledImg = styled.div`
    background-image: url(${props => props.image});
    height: 300px;
    width: 300px;
    background-size: cover;
    background-position: center;
`;
export default Level2;
