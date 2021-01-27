import React,{useEffect} from 'react';
import {getAllImageRequest} from '../../store/actions/all_Image'
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

const Images=({image,getImage})=>{
    useEffect(()=>{
        getImage();
    },[]);
    console.log(image);
    const displayAllImage=image.map(item=>{
        return(
         
        <NavLink to={`/photo/${item.id}`} >
        <img src={item.image}/>
        </NavLink>
        
        );
    });
    return(
        <div>
            {displayAllImage}
            
        </div>
    )
}
const mapStateToProps=(state)=>({
image:state.all_Image.image,
});
const mapDispatchToProps={
    getImage:getAllImageRequest,
};
export default connect(mapStateToProps,mapDispatchToProps)(Images);