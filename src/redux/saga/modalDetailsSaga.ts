import { put } from 'redux-saga/effects';
import axios from 'axios';
import { sendCommentRequest, successComment, successImage } from '../actions/galleryAction';
import { IAction, Comment } from '../../types';

function* modalDetailsSaga(action: IAction) {
    // @ts-ignore
    const url_1 = ` https://tzfrontend.herokuapp.com/images/${action.payload}/`;
    // @ts-ignore
    const responseImage = yield axios.get(url_1);
    yield put(successImage(responseImage.data.src));


    // @ts-ignore
    const url_2 = `https://tzfrontend.herokuapp.com/comments/${action.payload}`;
    // @ts-ignore
    const responseComment = yield axios.get(url_2);

    yield put(successComment(responseComment.data));


    const url = ` https://tzfrontend.herokuapp.com/comments/add/`;
    // @ts-ignore
    const response = yield axios.post(url, {

        body: {
            // @ts-ignore
            name: action.payload.name,
            // @ts-ignore
            description: action.payload.description,
            // @ts-ignore
            image_id: +action.payload.image_id
        }
    }, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    });
    console.log('saga run')
    // @ts-ignore
    yield put(sendCommentRequest(response));


}


export default modalDetailsSaga;
