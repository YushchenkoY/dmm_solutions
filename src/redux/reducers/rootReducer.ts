import { galleryReducer } from './galleryReducer';
import { modalDetailsReducer } from './modalDetailsReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    gallery: galleryReducer,
    modal: modalDetailsReducer,
})

export default rootReducer;