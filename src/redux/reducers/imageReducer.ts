import {IMAGE_FETCHING, IMAGE_SUCCESS, IMAGE_ERROR} from '../actions/galleryAction'


// @ts-ignore
export const imageReducer = (state, action) => {
    switch (action.type) {
        case IMAGE_FETCHING:
            return { ...state, isloading: true };
        case IMAGE_SUCCESS:
            return {
                ...state,
                isloading: false,
                data: action.payload,
            };
        case IMAGE_ERROR:
            return state;
        default:
            return state;
    }
}