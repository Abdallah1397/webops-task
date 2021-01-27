import React from 'react';
import {NavLink} from 'react-router-dom'
const Navlink=()=>{
    return(
        <div>
            <NavLink exact to="/" >Images</NavLink>
            <NavLink exact to="/categories" >Categories</NavLink>
                
        </div>
    )
}
export default Navlink;