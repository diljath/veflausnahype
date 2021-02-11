import React from 'react'
import Header from '../components/Header';
import {Description} from '../components/Description';
import Game from '../components/Game';
import styled from 'styled-components'
const Level1 = ({onClick}) => {
    const [dagbjort, setDagbjort] = React.useState("/dagbjort.png")
    const [text, setText] = React.useState("Dagbjört er enn og aftur að flytja! Hjálpið henni með nokkra kassa <3")
    const [helperText, setHelperText] = React.useState("psssst dragið kassana að nýja húsinu hennar!")
    const handleDone = () => {
        setDagbjort("/dagbjortglod.png")
        setText("OOoooh Dagbjört þakkar innilega fyrir hjálpina!")
        setHelperText("")
    }
    return (
    <Container>
        <Header image="/level1.gif"/>
        <StyledText>{text}</StyledText>
        <MiniContainer>
            
            <img src={dagbjort}></img>
        <Game onClick={onClick} onDone={handleDone}/>
        <StyledImg image="/House.png"></StyledImg>

        </MiniContainer>
        <StyledText>{helperText}</StyledText>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


const MiniContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top:40px;
`;
const StyledText = styled.div`
    font-size: 40px;
    background-color: white;
`;
const StyledImg = styled.div`
    background-image: url(${props => props.image});
    height: 500px;
    width: 200px;
    background-repeat: round;
    background-size: cover;
`;

export default Level1