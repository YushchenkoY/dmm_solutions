import { all, put, takeEvery } from 'redux-saga/effects'
import {GALLERY_FETCHING, SEND_COMMENT_REQ, MODAL_DETAILS_FETCHING } from '../actions/galleryAction'
import gallerySaga from './gallerySaga'
import modalDetailsSaga from './modalDetailsSaga'
import sendCommentSaga from './sendCommentSaga'

function* rootSaga() {
    yield all([
        takeEvery(GALLERY_FETCHING, gallerySaga),
        takeEvery(MODAL_DETAILS_FETCHING, modalDetailsSaga),
        takeEvery(SEND_COMMENT_REQ, sendCommentSaga),
    ])
}

export default rootSaga

