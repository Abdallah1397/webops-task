import React,{useEffect} from 'react';
import {getAllImageRequest} from '../../store/actions/all_Image'
import {connect} from 'react-redux'

const Images=({image,getImage})=>{
    useEffect(()=>{
        getImage();
    },[]);
    console.log(image);
    const displayAllImage=image.map(item=>{
        return(
        <img src={item.image}/>
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