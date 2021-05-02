import {put} from 'redux-saga/effects';
import axios from 'axios';
import { fetchingImage } from '../actions/galleryAction';

// @ts-ignore
function* imageSaga(action) {
// @ts-ignore
    const url = ` https://tzfrontend.herokuapp.com/images/${image_id}/`;
// @ts-ignore
    const response = yield axios.get(url);
    yield put(fetchingImage(response.data_image));
}

export default imageSaga;
