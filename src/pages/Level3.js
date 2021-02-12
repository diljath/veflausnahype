import React from 'react'
import Header from "../components/Header";
import Description from "../components/Description";
import styled from 'styled-components'
import NormalButton from "../components/normalButton";

const Level3 = ({onClick}) => {
const Subject = "Þú ert frábær!"
const Message = "Sæl Hrafnhildir, eigðu frábæran dag!"
const [hrafnhildur, setHrafnhildur] = React.useState("/hrafnhildurleid.png")
const [text, setText] = React.useState("Hrafnhildur er leið :(")
const [showNextButton, setShowNextButton] = React.useState(false)
const [showFinalButton, setShowFinalButton] = React.useState(false)
const showButton = () => {
    setShowNextButton(true)
}
const buttonClicked = () => {
    setHrafnhildur("/hrafnhildurglod.png")
    setText("Vá! Sjáiði hvað hún varð glöð?")
    setShowFinalButton(true)
    setShowNextButton(false)

}
    return (<div>
      <Header image="/level3.gif" />
<Description text={text} />
{ !showFinalButton && <StyledA href={`mailto: hrafnhildur.sverrisdottir@advania.is?subject=${Subject}&body=${Message}`} onClick={() => showButton()}> 
Sendið henni fallegt email til að gleðja hana!
</StyledA>}
<Container>

<StyledImg image={hrafnhildur} />
{showNextButton && <NormalButton text="Búin/n?" onClick={buttonClicked} level="hehe"/>}
{showFinalButton && <NormalButton text="Áfram" onClick={onClick} level="level4"/>}
</Container>
        </div>)
}
const Container = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;
const StyledA = styled.a`
    
   text-decoration: none;
   color: violet;
   background-color: beige;
   border: 1px solid #d4d4d4;
   font-size: 30px;
   padding: 10px;
`;
const StyledImg = styled.div`
    background-image: url(${props => props.image});
    height: 400px;
    width: 300px;
    background-size: cover;
    background-position: center;
`;
export default Level3