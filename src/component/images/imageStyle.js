import Styled from 'styled-components';
import px2vw from '../../styles/px2vw';
export const Container=Styled.div`
width:100%;
margin-top:15%;
@media (max-width:768px){
margin-top:25%;
}
`;
export const ImageDiv=Styled.div`
width:100%
float:left;
`;
export const Image =Styled.img`
width:30%;
hieght:200px;
margin-left:3%;
margin-top:2%;
float:left;
@media (max-width: 450px) 
{
    
    width:80%;
    margin-left:10%;

 }
 @media (min-width: 451px) and (max-width: 768px)
{
    
    width:45%;
    hieght:200px;
    margin-left:5%
 }
`
export const Title=Styled.h2`
font-size:50px;
font-family: 'Arial Narrow Bold';
margin-left:20%;
`

export const SearchDiv=Styled.div`
width:80%;
margin-left:10%;
margin-top:10%
`;
export const SearchBar=Styled.input`
font-size:25px;
width:100%;
display:block;
margin-top:1px;
@media (max-width: 450px) 
{
    
    width:100%;
    display:block;

 }
 @media (min-width: 451px) and (max-width: 968px)
{
    width:80%;
    display:block;

    
 }

 `
export const Button =Styled.button`
font-size:15px;
color:white;
background-color:#000000;
`
