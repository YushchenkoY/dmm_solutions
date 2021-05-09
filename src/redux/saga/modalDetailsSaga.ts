import { Action } from 'redux';
import { put } from 'redux-saga/effects';
import axios from 'axios';
import { sendCommentSuccess, successComment, successImage } from '../actions/galleryAction';

export function* modalDetailsSaga(action: {type: string; payload: number;}) {
  const url_1 = `https://tzfrontend.herokuapp.com/images/${ action.payload }/`;
  // @ts-ignore
  const responseImage = yield axios.get(url_1);
  yield put(successImage(action.payload, responseImage.data.src));


  // @ts-ignore
  const url_2 = `https://tzfrontend.herokuapp.com/comments/${ action.payload }`;
  // @ts-ignore
  const responseComment = yield axios.get(url_2);

  if (!Array.isArray(responseComment.data)) {
      yield put(successComment([]));
  } else {
      yield put(successComment(responseComment.data));
  }


}
export function* addCommentSaga(action: {type: string; payload: any;}) {
  const url = `https://tzfrontend.herokuapp.com/comments/add/`;
  // @ts-ignore
  const response = yield axios.post(url, {
      name: action.payload.name,
      description: action.payload.description,
      image_id: +action.payload.imageId
    }
  );

  yield put(sendCommentSuccess(response.data));

}

