import { all, put, takeEvery } from 'redux-saga/effects'
import {GALLERY_FETCHING,  MODAL_DETAILS_FETCHING } from '../actions/galleryAction'
import gallerySaga from './gallerySaga'
import modalDetailsSaga from './modalDetailsSaga'

function* rootSaga() {
    yield all([
        takeEvery(GALLERY_FETCHING, gallerySaga),
        takeEvery(MODAL_DETAILS_FETCHING, modalDetailsSaga),
    ])
}

export default rootSaga

