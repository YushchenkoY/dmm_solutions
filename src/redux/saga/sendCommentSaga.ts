import {put} from 'redux-saga/effects';
import axios from 'axios';
import { sendCommentRequest, sendCommentSuccess } from '../actions/galleryAction';

// @ts-ignore
function* sendCommentSaga(action) {
    const url = ` https://tzfrontend.herokuapp.com/comments/add/`;
    // @ts-ignore
    const response = yield axios.post(url, {
        postId: +action.payload.postId,
        name: action.payload.name,
        description: action.payload.description,
    }, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    });

    yield put(sendCommentSuccess(response.data));
}

export default sendCommentSaga;
