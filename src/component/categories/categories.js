import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {getAllCategoriesRequest} from '../../store/actions/all_Categories';
const Categories=({categories,getCategories})=>{
    useEffect(()=>{
        getCategories();
    },[]);
    const DisplayAllCategories=categories.map(item=>{
        return(

            <NavLink to={`/category/${item.id}`}>
            <p>{item.title}</p>
            </NavLink>
        )
    })
    return(
        <div>
            {DisplayAllCategories}
        </div>
    )
}
const mapStateToProps=(state)=>({
    categories:state.all_Categories.categories,
});
const mapDispatchToProps={
    getCategories:getAllCategoriesRequest,
}
export default connect(mapStateToProps,mapDispatchToProps)(Categories);