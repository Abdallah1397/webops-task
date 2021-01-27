import {call,put,takeLatest} from 'redux-saga/effects';
import * as api from '../api/all_categories';
import * as actions from '../actions/all_Categories';
import Types from '../types/categoriesTypes';

function* allCategories(){
    yield put(actions.setLoading(true));
    try{
        const result=yield call(api.getAllCategories);
        console.log(result);
        yield put(actions.getAllCategoriesSuccess(result));
    }catch(error){
        console.log(error);
        yield put(actions.getAllCategoriesFail());

    }finally{
        yield put(actions.setLoading(false));
    }
}
export default function* allCategoriesSaga(){
    yield takeLatest(Types.GET_ALL_CATEGORIES_REQUEST,allCategories);
}