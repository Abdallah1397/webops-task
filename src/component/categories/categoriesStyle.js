import Styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom'

export const Container =Styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 250x;
width:20%;
margin:15px 15px;
display:inline;
color: #fff;
font-size: 4em;
`;
export const Title=Styled.span`
color:#fff;
width:8%;
font-size:20px;
text-align:center;
display:inline-block;



`;
export const Icon =Styled.i`
margin-left:12px;
@media(max-width:800px){
  margin-top:20px;
}
`;

export const MainDiv=Styled.div`
background-color:#000;
width:90%;
margin-left:5%;
hieght:200px;
margin-top:10px;
`;

export const NavLink=Styled(Link)`

`;