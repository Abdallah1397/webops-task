import Styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container =Styled.div`
margin-top:100px;
margin-left:10%;
@media (max-width: 450px) 
{
    margin-top:10%;
   
}
`;
export const CategoriesContainer=Styled.div`
margin-left:-5%;
@media (max-width: 450px) 
{
    margin-top:30%;

}
@media (min-width:451px) and (max-width: 786px){
    margin-top:20%;
}
@media (min-width:1200px) and (max-width: 1300px){
    margin-left:-20%;    
}
`;

export const Title=Styled.h2`
font-size:30px;
font-family: 'Arial Narrow Bold';
margin-left:10%;
`;
export const ButtonCategory = Styled.button`
    border:2px solid black;
    margin-left:20%;
    margin-top:10%;
    text-align:center;
    font-family:bold;
    font-size:20px;
    background-color:#fff;
    width:30%;
    height:50px;
    @media (max-width: 450px) 
    {
        margin-top:1%;
        width:48%;
        height:40px;
        margin-left:2%;
        font-size:7px;

    }
    @media (min-width:451px) and (max-width: 1200px) 
    {
        margin-top:5%;
        width:45%;
        height:60px;
        margin-left:4%;
        font-size:10px;
        text-align:center;
    }
    `;
export const Icon =Styled.i`
        margin-left:12px;
        @media(max-width:800px){
        margin-top:20px;
        }
`;
export const Form =Styled.form`
width:30%;
display:inline-block;
height:50px;


@media (max-width: 450px) 
{
    margin-top:1%;
    width:48%;
    height:40px;
    margin-left:1%;
    font-size:7px;
}
@media (min-width:451px) and (max-width: 1200px) 
{
    margin-top:5%;
    width:45%;
    height:60px;
    margin-left:1%;
    font-size:10px;
    
}

`;
export const InputCategory = Styled.input`
    border:2px solid black;
    background-color:#fff;
    width:100%;
    height:100%;
    text-align:center;
    font-family:bold;
    margin-left:2px;
    font-size:20px;
    @media (max-width: 450px) 
{
    margin-top:1%;
    width:100%;
    height:40px;
    margin-left:1%;
    font-size:7px;
}
@media (min-width:451px) and (max-width: 1200px) 
{
    margin-top:5%;
    width:100%;
    height:60px;
    margin-left:1%;
    font-size:10px;
    
}
   
    `;

export const NavLink = Styled(Link)`
width:30%;
display:inline-block;
margin-left:3%;
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
export const Image=Styled.img`
    width:100%;
    hieght:200px;
    margin-left:3%;
    margin-top:2%;
    float:left;
    `;
 

