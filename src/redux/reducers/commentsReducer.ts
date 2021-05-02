import { COMMENT_FETCHING, COMMENT_SUCCESS, COMMENT_ERROR, SEND_COMMENT_SUCCESS, } from '../actions/galleryAction'


// @ts-ignore
export const commentsReducer = (state, action) => {
    switch (action.type) {
        case SEND_COMMENT_SUCCESS:
            return {
                ...state,
                isloading: false,
                details: {
                    ...state.details,
                    comments: [
                        ...state.details.comments,
                        action.payload,
                    ]
                },
            };
        default:
            return state;
    }
}