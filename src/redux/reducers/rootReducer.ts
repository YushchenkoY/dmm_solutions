import { galleryReducer } from './galleryReducer';
import { modalDetailsReducer } from './modalDetailsReducer'
import { commentsReducer } from './commentsReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    gallery: galleryReducer,
    modal: modalDetailsReducer,
    // comment: commentsReducer
})

export default rootReducer;