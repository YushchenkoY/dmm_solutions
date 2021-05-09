import { IAction, IStateGallery } from '../../types';
import {
  GALLERY_FETCHING,
  GALLERY_SUCCESS,
  GALLERY_ERROR
} from '../actions/galleryAction';

const initialState: IStateGallery = {
  isLoading: false,
  data: []
};

export const galleryReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case GALLERY_FETCHING:
      return {
        ...state,
        isLoading: true
      };
    case GALLERY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case GALLERY_ERROR:
      return state;
    default:
      return state;
  }
};
