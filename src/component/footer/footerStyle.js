import Styled from 'styled-components'

export const MainDiv=Styled.div`
width:80%;
margin-left:10%;
display:block;
margin-top:10%;

@media (max-width:450px){
    margin-top:10%;
    width:90%;
    margin-left:5%;
}
@media (min-width:451px) and (max-width:790px){
{
    margin-top:180px;
    width:90%;
    margin-left:5%;   
}
@media (min-width:791px) and (max-width:1200px){
    {
        margin-top:5%;
        width:95%;
        margin-left:2.5%;   
    }
`;

export const Container=Styled.div`
width:35vw;
height:30vh;
display:inline-block;
background-color:white;
margin-top:20px;
margin-left:40px;
@media (max-width:450px){
    margin-top:5%;
    width:95%;
    margin-left:2.5%;
}
@media (min-width:451px) and (max-width:790px){
    margin-top:5%;
    width:48%;
    margin-left:1%;
}
@media (min-width:791px) and (max-width:1200px)
{
    margin-top:5%;
    width:48%;
    margin-left:1%;
}
`;
export const Icon =Styled.i`
margin-left:8%;
margin-top:2%;
width:100px;
height:100px;
`;
export const Title=Styled.p`
display:inline-block;
font-size:23px;
margin-left:3%;
width:250px;
@media (max-width:450px){
    margin-top:5%;
    font-size:14px;
    margin-left:2%;
    width:100px;
}
@media (min-width:451px) and (max-width:790px){
    margin-top:.5%;
    font-size:15px;
    margin-left:1%;
    width:50%;
}
@media (min-width:791px) and (max-width:1200px){
    margin-top:5%;
    font-size:100%;
    margin-left:2%;
    width:50%;
}
`;
