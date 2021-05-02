import { IAction, IModalState } from '../../types';
import { IMAGE_FETCHING, IMAGE_SUCCESS, IMAGE_ERROR, COMMENT_FETCHING, COMMENT_SUCCESS, COMMENT_ERROR } from '../actions/galleryAction'

const initialState: IModalState = {
    isloading: false,
    data: {
        // @ts-ignore
        linkToImage: {
            src: ''
        },
        // @ts-ignore
        comments: []
    },
};

export const modalDetailsReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case IMAGE_FETCHING:
            return { ...state, isloading: true };
        case IMAGE_SUCCESS:
            return {
                ...state,
                isloading: false,
                data: { ...state.data, linkToImage: { src: action.payload } },
            };
        case COMMENT_FETCHING:
            return { ...state, isloading: true };
        case COMMENT_SUCCESS:
            return {
                ...state,
                isloading: false,
                data: { ...state.data, comments: action.payload }
            }
        default:
            return state;
    }
}