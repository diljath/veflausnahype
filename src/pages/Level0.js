import React from "react";
import NormalButton from "../components/normalButton";
import styled from "styled-components";
import Header from "../components/Header";
import Description from "../components/Description";

const Level0 = ({ onClick }) => {
  return (
    <Container>
      <Header image="/velkominn.gif" />
      <Description text=" "></Description>
      <Description text="Ert þú nógu hype?"></Description>
      <Description text=" Tjékkaðu á því með þessum bráðskemmtilega og nýtískulega HYPE-leik!"></Description>
      <Description text="psst. hafðu kveikt á heyrnartólunum og settu Oppa Gagnam style í gang uppí horninu <3"></Description>
      <NormalButton text="START" onClick={onClick} level="level1" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export default Level0;
