import {combineReducers} from 'redux';
import all_ImageReducer from './all_Image';
import all_CategoriesReducer from './all_categories';

const rootReducer=combineReducers({
all_Image:all_ImageReducer,
all_Categories:all_CategoriesReducer,
});
export default rootReducer;