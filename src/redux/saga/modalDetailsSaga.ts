import { put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchingImage, fetchingModalDetails, successComment, successImage} from '../actions/galleryAction';
import { IAction } from '../../types';

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
    console.log(responseComment)


}

export default modalDetailsSaga;

