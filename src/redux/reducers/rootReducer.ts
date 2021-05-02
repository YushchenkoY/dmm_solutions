import { galleryReducer } from './galleryReducer';
import { imageReducer } from './imageReducer'
import { commentsReducer } from './commentsReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    gallery: galleryReducer,
    image: imageReducer,
    comment: commentsReducer
})

export default rootReducer;