import Types from '../types/imageType';

const INITAL_STATE={
    image:[],
    loading:false,
};

export default function allImage(state=INITAL_STATE,action){
    const {type,payload}=action;
    switch(type){
        case Types.GET_ALL_IMAGE_SUCCESS:{
            return{
                ...state,
                image:payload.data,
                loading:false,
            };
        }
        case Types.GET_ALL_IMAGE_FAIL:{
            return{
                ...state,
                image:[],
                loading:true,    
            };
        }
        case Types.SET_LOADING:{
            return{
                ...state,
                loading:true,
            }
        }
        default:{
            return{
                ...state,
            };
        }
     
        

    }
}