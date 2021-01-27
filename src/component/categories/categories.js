import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import {getAllCategoriesRequest} from '../../store/actions/all_Categories';
const Categories=({categories,getCategories})=>{
    useEffect(()=>{
        getCategories();
    },[]);
    return(
        <div>
   
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