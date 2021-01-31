import Styled from "styled-components";
import px2vw from "../../styles/px2vw";
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
@media (max-width: 450px) 
{
    margin-top:30%;

}
@media (min-width:451px) and (max-width: 786px){
    margin-top:20%;
}
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
    @media (min-width:451px) and (max-width: 935px) 
    {
        margin-top:5%;
        width:45%;
        height:60px;
        margin-left:4%;
        font-size:10px;
        text-align:center;
    }
    `;
export const InputCategory = Styled.input`
    border:2px solid black;
    margin-top:10%;
    background-color:#fff;
    width:30%;
    height:50px;
    text-align:center;
    font-family:bold;
    margin-left:2px;
    font-size:20px;
    @media (max-width: 450px) 
    {
        margin-top:1%;
        width:48%;
        height:40px;
        margin-left:1%;
        font-size:7px;
    }
    @media (min-width:451px) and (max-width: 935px) 
    {
        margin-top:5%;
        width:45%;
        height:60px;
        margin-left:1%;
        font-size:10px;
        
    }
    `;

export const NavLink = Styled(Link)`
    display:block;
    cursor:pointer;
    margin-left:10%;
    @media (max-width: 450px) 
    {
        font-family:bold;
        font-size:9px;
        width:200px;
    }  
    @media (min-width:451px) and (max-width: 786px) 
    {
        width:100%;
        height:60px;
        margin-left:2%;
        font-size:15px;
        
    }
    `;
export const Image=Styled.img`
    width:40%;
    height:40%;
    display:block;
    margin-top:2%;
    margin-left:20px;
    @media (max-width: 450px) 
    {
        width:90%;
        height:90%;
        margin-left:.5%;
        margin-top:2%;
    }
    @media (min-width:451px) and (max-width: 786px) 
    {
        width:400px;
        height:400px;
        margin-top:2%   
        margin-left:-5%;
    }

    `;

