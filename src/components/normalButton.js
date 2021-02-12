import styled from 'styled-components'
import {Button } from '@material-ui/core' 
export const NormalButton = ({ onClick, text, level}) => {
    

    return <WoWButton onClick={(event) => onClick(level)}>{text} </WoWButton>
}

const WoWButton = styled(Button)`
&&{

    background-color: pink;
    border: 1px solid black;
    cursor: pointer;
    width: max(200px, 13.88vw);
    height: max(100px, 6.94vw);
    margin: 30px;
    font-size: 48px;
}
`;
export default NormalButton