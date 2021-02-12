import React from 'react'
import styled from 'styled-components'

const Description = ({text}) => {

    return <StyledText>{text}</StyledText>
}
const StyledText = styled.div`
    font-size: 40px;
    background-color: white;
    margin-bottom: 20px;
`;
export default Description;

