import Styled from 'styled-components';

export const MainDiv=Styled.div`
margin-top:15%;
`;
export const Image =Styled.img`
width:100%;
hieght:200px;
margin-left:3%;
margin-top:2%;
float:left;

`;
export const Title=Styled.p`
width:100%;
margin-left:3%;
font-size:20px;
text-align:center;


`;

export const Container=Styled.div`
margin-left:3%;
width:30%;
display:inline-block;
margin-top:3%;
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
`;