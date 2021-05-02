import { all, put, takeEvery } from 'redux-saga/effects'
import {GALLERY_FETCHING, IMAGE_FETCHING, COMMENT_FETCHING, SEND_COMMENT_REQ } from '../actions/galleryAction'
import commentSaga from './commentsSaga'
import gallerySaga from './gallerySaga'
import imageSaga from './imageSaga'
import sendCommentSaga from './sendCommentSaga'

function* rootSaga() {
    yield all([
        takeEvery(GALLERY_FETCHING, gallerySaga),
        takeEvery(IMAGE_FETCHING, imageSaga),
        takeEvery(COMMENT_FETCHING, commentSaga),
        takeEvery(SEND_COMMENT_REQ, sendCommentSaga),
    ])
}

export default rootSaga

