import { IAction, IStateModal } from '../../types';
import {
  IMAGE_FETCHING,
  IMAGE_SUCCESS,
  IMAGE_ERROR,
  COMMENT_FETCHING,
  COMMENT_SUCCESS,
  COMMENT_ERROR,
  SEND_COMMENT_REQ,
  SEND_COMMENT_SUCCESS,
  SEND_COMMENT_ERROR
} from '../actions/galleryAction';

const initialState: IStateModal = {
  isLoading: false,
  data: {
    activeImageId: -1,
    linkToImage: '',
    comments: []
  }
};

export const modalDetailsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case IMAGE_FETCHING:
      return { ...state, isLoading: true };
    case IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          activeImageId: action.payload.imageId,
          linkToImage: action.payload.bigImageUrl
        }
      };
    case COMMENT_FETCHING:
      return { ...state, isLoading: true };
    case COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: { ...state.data, comments: action.payload }
      };
    case COMMENT_ERROR:
      return state;

    case SEND_COMMENT_REQ:
      return { ...state, isLoading: true };
    case SEND_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          comments: [...state.data.comments, action.payload]
        }
      };
    case SEND_COMMENT_ERROR:
      return state;

    default:
      return state;
  }
};
