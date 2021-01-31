import Styled from "styled-components";
import px2vw from "../../styles/px2vw";
import { NavLink as Link } from "react-router-dom";

export const Container =Styled.div`
margin-top:100px;
@media (max-width: 450px) 
{
    margin-top:10%;
   
}
`;
export const ButtonCategory = Styled.button`
    border:2px solid black;
    margin-left:22%;
    margin-top:10%;
    background-color:#fff;
    width:30%;
    height:50px;
    @media (max-width: 450px) 
    {
        margin-top:1%;
        width:40%;
        height:40px;
        margin-left:2%;
        font-size:9px;

    }
    @media (min-width:451px) and (max-width: 786px) 
    {
        margin-top:1%;
        width:45%;
        height:60px;
        margin-left:4%;
        font-size:15px;
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
        width:40%;
        height:40px;
        margin-left:1%;
        font-size:9px;
    }
    @media (min-width:451px) and (max-width: 786px) 
    {
        margin-top:1%;
        width:45%;
        height:60px;
        margin-left:1%;
        font-size:20px;
        
    }
    `;

export const NavLink = Styled(Link)`
    display:block;
    font-family:bold;
    font-size:20px;
    text-decoration:none;
    cursor:pointer;
    color:#000;
    width:300px;
    height:300px;
    margin-left:150px;
    margin-top:50px;
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
    width:40%
    margin-left:30px;
    display:block;
    margin-top:2%
    @media (max-width: 450px) 
    {
        width:90;
        margin-left:5%
        margin-top:2%
    }

    `;
