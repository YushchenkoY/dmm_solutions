import { all, put, takeEvery } from 'redux-saga/effects'
import {GALLERY_FETCHING,  MODAL_DETAILS_FETCHING, SEND_COMMENT_REQ } from '../actions/galleryAction'
import gallerySaga from './gallerySaga'
import {modalDetailsSaga, addCommentSaga} from './modalDetailsSaga'

function* rootSaga() {
    yield all([
        takeEvery(GALLERY_FETCHING, gallerySaga),
        takeEvery(MODAL_DETAILS_FETCHING, modalDetailsSaga),
        takeEvery(SEND_COMMENT_REQ, addCommentSaga),
    ])
}

export default rootSaga

