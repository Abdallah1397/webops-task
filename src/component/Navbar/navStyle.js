import Styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
export const Logo = Styled.img`
align-items: center;
width:70px;
height:70px;
margin-left:1%;
@media(max-width:768px){
display:none;
}
`;
export const Nav = Styled.nav`
display: flex;
align-items: center;
flex-wrap: wrap;
background: white;
position: absolute;
top: 0;
left: 0;
right: 0;
margin-top:3%;
margin-left:25%;
@media (max-width:768px){
  margin-left:10px;
}
@media (min-width: 769px) and (max-width:990px)
{
  margin-left:20%;
}
@media (min-width: 991px) and (max-width:1300px)
{
margin-left:12%;
}

`;
export const NavLink = Styled(Link)`
padding: 1rem 2rem;
cursor: pointer;
text-align: center;
text-decoration: none;
color: #000;
transition: all 0.3s ease-in;
font-size: 0.9rem;
@media (max-width: 768px){
  padding: 1rem 1rem;

}
@media (min-width: 769px) and (max-width:980px)
{
  padding: 1rem .5rem;

}
`;
export const Menu = Styled.div`
  display: flex;
  margin-left:1%;
  align-items: center;
  position: relative;
  border-top:2px solid black;
  border-bottom:2px solid black;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ click }) => (click ? "100%" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    border:none;
  }
`;
export const Bar = Styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    
  }
`;
export const Icon =Styled.i`
margin-left:40px;
@media(max-width:500px){
  margin-top:20px;
}
`;

export const AbsoluteLogo=Styled.img`
display:none;
@media(max-width:500px){
  postion:absolute;
  display:block;
  width:50px;
  height:50px;
  margin-left:25%;
}
@media (min-width:501px) and (max-width:768px){
  postion:absolute;
  display:block;
  width:70px;
  height:70px;
  margin-top:2%;
  margin-left:40%;
}
`;
