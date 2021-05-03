import { IAction, IModalState } from '../../types';
import { IMAGE_FETCHING, IMAGE_SUCCESS, IMAGE_ERROR, COMMENT_FETCHING, COMMENT_SUCCESS, COMMENT_ERROR, SEND_COMMENT_REQ, SEND_COMMENT_SUCCESS, SEND_COMMENT_ERROR } from '../actions/galleryAction'

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
        case COMMENT_ERROR:
            return state;

        case SEND_COMMENT_REQ:
            return { ...state, isloading: true };
        case SEND_COMMENT_SUCCESS:
            return {
                ...state,
                isloading: false,
                data: { ...state.data, 
                    comments: [
                        ...state.data.comments,
                        action.payload,
                    ] }
            };
        case SEND_COMMENT_ERROR:
            return state;

        default:
            return state;
    }
}