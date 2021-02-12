import React from "react";
import Header from "../components/Header";
import Description from "../components/Description";
import styled from "styled-components";
import NormalButton from "../components/normalButton";
import {
  RadioGroup,
  FormControl,
  Radio,
  FormLabel,
  FormControlLabel,
} from "@material-ui/core";

const Level4 = ({ onClick }) => {
  const Subject = "Þú ert frábær!";
  const Message = "Sæl Hrafnhildir, eigðu frábæran dag!";
  const [dadi, setDadi] = React.useState("/daðilost.png");
  const [geit, setGeit] = React.useState("/ikeageit.jpg");
  const [header, setHeader] = React.useState("Hjálpið Daða að skipulegja næsta Ikea-geitar-íkveikjuna sína!");
  const [text, setText] = React.useState("");
  const [showNextButton, setShowNextButton] = React.useState(false);
  const [showFinalButton, setShowFinalButton] = React.useState(false);
  const showButton = () => {
    setShowNextButton(true);
  };

  const [eldfaeri, setEldfaeri] = React.useState("");
  const [clothes, setClothes] = React.useState("");
  const [alibi, setAlibi] = React.useState("");
  const handleClick = () => {
    if (
      eldfaeri === "flamethrower" &&
      clothes === "christmas" &&
      alibi === "car"
    ) {
      setDadi("/dadisuccess.jpg");
      setGeit("/ikeageitinnbrann.png");
      setShowNextButton(true);
      setHeader("VEL GERT!")
    } else {
      setText("ah, reyndu aftur!");
    }
  };
  const handleChange = (event, func) => {
    func(event.target.value);
  };
  const checkBoxes = [
    {
      id: 1,
      checked: false,
    },
  ];
  return (
    <div>
      <Header image="/level4.gif" />
      <Description text={header} />
      <Container>
        <StyledImg image={dadi} />
        {
            !showNextButton && 
            <ContainerSpecial>
          <FormControl component="fieldset">
            <FormLabel component="legend">Veljið eldfæri</FormLabel>
            <StyledRadioGroup
              aria-label="eldfaeri"
              name="eldfaeri"
              value={eldfaeri}
              onChange={(event) => handleChange(event, setEldfaeri)}
            >
              <FormControlLabel
                value="flint"
                control={<StyledRadio />}
                label="Tinnusteinn"
              />
              <FormControlLabel
                value="flamethrower"
                control={<StyledRadio />}
                label="Eldkastari (e. flamethrower)"
              />
              <FormControlLabel
                value="lighter"
                control={<StyledRadio />}
                label="Kveikjari"
              />
              <FormControlLabel
                value="swearwords"
                control={<StyledRadio />}
                label="Blótsyrði"
              />
            </StyledRadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">Veljið klæðnað</FormLabel>
            <StyledRadioGroup
              aria-label="clothes"
              name="clothes"
              value={clothes}
              onChange={(event) => handleChange(event, setClothes)}
            >
              <FormControlLabel
                value="ninja"
                control={<StyledRadio />}
                label="Ninju-búning"
              />
              <FormControlLabel
                value="christmas"
                control={<StyledRadio />}
                label="Jólasveinabúning"
              />
              <FormControlLabel
                value="helmet"
                control={<StyledRadio />}
                label="Huliðshjálm"
              />
              <FormControlLabel
                value="none"
                control={<StyledRadio />}
                label="Engan (Það þekkir hann hvort sem er engin)"
              />
            </StyledRadioGroup>
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">Veljið fjarvistarsönnun</FormLabel>
            <StyledRadioGroup
              aria-label="clothes"
              name="clothes"
              value={alibi}
              onChange={(event) => handleChange(event, setAlibi)}
            >
              <FormControlLabel
                value="home"
                control={<StyledRadio />}
                label="Ég var bara heima sko"
              />
              <FormControlLabel
                value="car"
                control={<StyledRadio />}
                label="Nei, ég er á bíl"
              />
              <FormControlLabel
                value="kid"
                control={<StyledRadio />}
                label="Ég var að sækja krakkann á leikskóla"
              />
              <FormControlLabel
                value="none"
                control={<StyledRadio />}
                label="Engin (Hver ætti svo sem að trúa honum?)"
              />
            </StyledRadioGroup>
          </FormControl>
          
          <Description text={text} />
          <StyledButton text="Submit" onClick={handleClick} level="he" />
        </ContainerSpecial>
        }
        {showNextButton && <NormalButton text="Áfram" onClick={onClick} level="level5"/>}
        <StyledImg image={geit} />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;

  padding: 20px;
`;
const StyledRadioGroup = styled(RadioGroup)`
  && {
    display: flex;
    flex-direction: row;
  }
`;
const StyledButton = styled(NormalButton)`
  && {
    margin: 5px;
  }
`;
const StyledRadio = styled(Radio)`
  && {
    color: violet;
    &.Mui-checked {
      color: purple;
    }
  }
`;
const ContainerSpecial = styled(Container)`
  background-color: beige;
  flex-direction: column;
  justify-content: space-around;
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
  background-image: url(${(props) => props.image});
  height: 400px;
  width: 300px;
  background-size: cover;
  background-position: center;
`;
export default Level4;
