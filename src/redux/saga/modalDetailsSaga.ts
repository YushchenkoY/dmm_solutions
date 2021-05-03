import { put } from 'redux-saga/effects';
import axios from 'axios';
import { sendCommentSuccess, successComment, successImage} from '../actions/galleryAction';
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
    const responseNewComment: Comment = yield axios.post(url, {
            // @ts-ignore
        image_id: +action.payload.image_id,
            // @ts-ignore
        name: action.payload.name,
            // @ts-ignore
        description: action.payload.description,
    }, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    });
    console.log('saga run')
    yield put(sendCommentSuccess(responseNewComment));

    
}


export default modalDetailsSaga;
