import React from "react";
import Header from "../components/Header";
import Description from "../components/Description";
import styled from "styled-components";
import NormalButton from "../components/normalButton";
import { useRouter } from 'next/router'
import {
  RadioGroup,
  FormControl,
  Radio,
  FormLabel,
  FormControlLabel,
} from "@material-ui/core";

const Level5 = ({ onClick }) => {
  const [dadi, setDadi] = React.useState("/daðilost.png");
  const [geit, setGeit] = React.useState("/ikeageit.jpg");
  const [header, setHeader] = React.useState("Takk fyrir að hype-a þig upp með Veflausnum!");
  const [text, setText] = React.useState("");
  const [showNextButton, setShowNextButton] = React.useState(false);
  const [showFinalButton, setShowFinalButton] = React.useState(false);
  const showButton = () => {
    setShowNextButton(true);
  };

  const [eldfaeri, setEldfaeri] = React.useState("");
  const [clothes, setClothes] = React.useState("");
  const [alibi, setAlibi] = React.useState("");
 
  const stig = Math.floor(Math.random()*394);
  if(stig < 100 ) {
    console.log(stig)
    setText("(Hefðir nú geta gert betur enn þetta...)")
  }
  const router = useRouter()
  const handleClick = () => {
    router.push("https://youtu.be/kfVsfOSbJY0")
  }
  return (
    <Main>
      <Header image="/success.gif" />
      <Description text="Dýrmæti liðsfélagi, þér tókst að klára leikinn með heil..." />
      
      <ContainerSpecial>
      <Description text={` ${stig} stig!!!`} />
      <div>{text}</div>
      <Description text={header} />
        <StyledA href="https://youtu.be/kfVsfOSbJY0" >Náðu í vinninginn þinn!</StyledA>
      </ContainerSpecial>
      <StyledImg image="/veflausnir.jpg"/>
    </Main>
  );
};

const Main = styled.div`
  text-align: center;
`;
const Container = styled.div`
  display: flex;
text-align: center;
  padding: 20px;
  justify-content: center;
`;

const ContainerSpecial = styled(Container)`
  background-color: beige;
  flex-direction: column;
`;
const StyledA = styled.a`
  text-decoration: none;
  color: violet;
  background-color: brown;
  border: 1px solid #d4d4d4;
  font-size: 30px;
  padding: 10px;
`;
const StyledImg = styled.div`
  background-image: url(${(props) => props.image});
  height: 400px;
  background-size: cover;
  background-position: center;
`;
export default Level5;
