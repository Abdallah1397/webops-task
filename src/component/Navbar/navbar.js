import React,{useState} from 'react';
import {Nav,NavLink,Logo,Menu,Bar,Icon,AbsoluteLogo} from './navStyle'
import logo from '../../styles/logo360.png';
import reduxSaga from 'redux-saga';
/**/
const Navlink=()=>{
    const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
    return(
        
        <div>
        <Nav>
            <Bar onClick={handleClick}>
                <Icon className={click ? 'fa fa-times' : 'fa fa-bars'}/>
            </Bar>  
            <AbsoluteLogo src={logo}/>
            <Menu click={click}>
            <NavLink exact to="#">HER</NavLink>
            <NavLink exact to="#">HIM</NavLink>
            <NavLink exact to="#">THE WEDDING</NavLink> 
            </Menu> 
            <Logo src={logo}/> 
            <Menu click={click}>
            <NavLink exact to="#">VENDORS</NavLink>
            <NavLink exact to="/gallery">GALLERY</NavLink>
            <NavLink exact to="#">IDEAS&MORE</NavLink> 
            </Menu>
        </Nav>

       
        


        </div>
        
    )
}
export default Navlink;

