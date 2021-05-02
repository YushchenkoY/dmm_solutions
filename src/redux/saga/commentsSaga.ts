import {put} from 'redux-saga/effects';
import axios from 'axios';
import { successComment } from '../actions/galleryAction';

// @ts-ignore
function* commentSaga(action) {
// @ts-ignore
    const url = `https://tzfrontend.herokuapp.com/comments/${image_id}`;
            // @ts-ignore
    const response = yield axios.get(url);

    yield put(successComment(response.data_comment));
}

export default commentSaga;
