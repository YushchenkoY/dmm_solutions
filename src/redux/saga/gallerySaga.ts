import { IAction } from '../../types';
import {put} from 'redux-saga/effects';
import axios from 'axios';
import { successGallery } from '../actions/galleryAction';

function* gallerySaga(action: IAction) {
    const url = `https://tzfrontend.herokuapp.com/images/`;
            // @ts-ignore
    const response = yield axios.get(url);
    yield put(successGallery(response.data));
}

export default gallerySaga;
