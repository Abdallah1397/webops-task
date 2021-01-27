import {call,put,takeLatest} from 'redux-saga/effects';
import * as api from '../api/all_Image';
import * as actions from '../actions/all_Image';
import Types from '../types/imageType';

function* allImage(){
    yield put(actions.setLoading(true));
    try{
        const result=yield call(api.getAllImage);
        console.log(result);
        yield put(actions.getAllImageSuccess(result));
    }catch(error){
        console.log(error);
        yield put(actions.getAllImageFail());

    }finally{
        yield put(actions.setLoading(false));
    }
}
export default function* allImageSaga(){
    yield takeLatest(Types.GET_ALL_IMAGE_REQUEST,allImage);
}