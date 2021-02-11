import React from 'react'
import styled from 'styled-components'

const Header = ({image}) => {
    
    return <StyledImg src={image} />

}

const StyledImg = styled.img`
    margin-top: 40px;

`;

export default Header;