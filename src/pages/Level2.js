import React from "react";
import Header from "../components/Header";
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog';
const Level2 = ({ onClick }) => {
  const myndir = [
    '/gris1.jpg',
    '/gris2.jpg',
    '/gris3.jpg',
    '/gris4.jpg',
    '/gris5.jpg',
  ]
  const [open, setOpen] = React.useState(false)
  const handleClick = (item) => {
    if(item === "/gris4.jpg"){
      setOpen(true)
    }
  }
  const handleClose = () => {
    setOpen(false);
    onClick("level3")

  };

  return (
    <div>
      <Header image="/level2.gif" />
      <StyledText>Hjálpið Berglindi að velja SÆTASTA grísinn!</StyledText>
      <ImageContainer>
      {myndir.map((item, index) => {
        return <StyledImg key={index} image={item} onClick={() => handleClick(item)}/>
      })}
      </ImageContainer>
      <Dialog onClose={handleClose} open={open} onClose={handleClose}>

          <StyledDialog>AUÐVITAÐ ER BERGLIND SÆTASTI GRÍSINN!</StyledDialog>
      </Dialog>
    </div>
  )
};

const StyledText = styled.div`
    font-size: 40px;
    background-color: white;
`;
const StyledDialog = styled.div`
  &&{
    width: 400px;
    height: 300px;
    text-align: center;
    padding: 50px;
    font-size: 58px;
  }
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
