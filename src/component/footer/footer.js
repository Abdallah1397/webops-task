import React from 'react';
import { MainDiv ,Icon,Container,Title} from './footerStyle';
const footer=[ {
    "id":1,
    "title":"Enjoy a happy time in our unique website, we are ready for all your requests",
    "icon":"fa fa-address-book fa-5x"
},
{
    "id":2,
    "title":"Enjoy a happy time in our unique website, we are ready for all your requests",
    "icon":"fa fa-american-sign-language-interpreting fa-5x"  
},{
    "id":3,
    "title":"Enjoy a happy time in our unique website, we are ready for all your requests",
    "icon":"fa fa-flask fa-5x"  
},{
    "id":4,
    "title":"Enjoy a happy time in our unique website, we are ready for all your requests",
    "icon":"fa fa-briefcase fa-5x"  
},{
    "id":5,
    "title":"Enjoy a happy time in our unique website, we are ready for all your requests",
    "icon":"fa fa-cubes fa-5x"  
},{
    "id":6,
    "title":"Enjoy a happy time in our unique website, we are ready for all your requests",
    "icon":"fa fa-drivers-license-o fa-5x"  
}]
const Footer =()=>{
    const allIcons=footer.map((item)=>{
        return(
            <Container key={item.id}>
            <Icon className={item.icon}/>
            <Title> {item.title} </Title>
            </Container>
        )
    });
    return(
        <MainDiv>
           {allIcons}
        </MainDiv>
    )
}
export default Footer;
