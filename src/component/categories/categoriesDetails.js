import React,{useEffect,useState} from 'react';
import {getAllImageRequest} from '../../store/actions/all_Image'
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';


const CategoriesDetails=({image,getImage})=>{
    const params=useParams();
    const [category,setCategory]=useState([]);
    useEffect(()=>{
        getImage();
        const result=image.filter((item)=>{
            console.log(item);
            return item.categories_id==params.id;
        });
        setCategory(result);
        console.log(result);
    },[]);

    console.log(category);
    return(
        <div>
               {category.map((i) => {
        return (
          <div>
            <p>{i.id}</p>
            <img src={i.image} />
          </div>
        );
      })}
        </div>
    )
}
const mapStateToProps=(state)=>({
    image:state.all_Image.image,
    });
    const mapDispatchToProps={
        getImage:getAllImageRequest,
    };
export default connect(mapStateToProps,mapDispatchToProps)(CategoriesDetails);