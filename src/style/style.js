import styled from 'styled-components';

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr)
`
export const Item = styled.div`
justify-self: center`

export const Flex = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 48% 0`

export const Button = styled.button`
background: lightblue;
width: 10vw
text-align: center
border-radius: 10%
padding: 1vh`

export const Hr = styled.hr`

// display: block;
height: 1px;
// border: 0; 
border-top: 1px solid #ccc;
margin: 1em 0; 
// padding: 0;`

export const SongListContainer = styled.div`
margin: 0 20vw`

export const CenterText = styled.div`
text-align: center;`