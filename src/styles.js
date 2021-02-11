import styled from 'styled-components'

export const MainBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BackgroundImage = styled.div`
    height:100vh;
	width:100vw;
	position:absolute;
	left:0;
	top:0;
	z-index:-1;
	background-image:url("/backgroundHype.jpg");
	background-size:auto;
	background-repeat: repeat;
`