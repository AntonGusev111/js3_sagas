import { takeLatest, put, spawn, retry } from 'redux-saga/effects';
import { searchList, searchValue } from '../api/index';
import {GET_SERVICES_REQUEST, GET_SINGLE_REQUEST,} from "../actions/actionTypes";
import {getServicesSuccess, getServicesFailure, getSinglesSuccess, getSinglesFailure} from "../actions/actionCreators";



// worker
function* handleGetSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, searchList, action.payload.services);
        yield put(getServicesSuccess(data));
    } catch (e) {
        yield put(getServicesFailure(e.message));
    }
}

// watcher
function* watchGetSaga() {
    yield takeLatest(GET_SERVICES_REQUEST, handleGetSaga);
}

// worker
function* handleGetItemSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, searchValue, action.payload.id);
        yield put(getSinglesSuccess(data));
    } catch (e) {
        yield put(getSinglesFailure(e.message));
    }
}

// watcher
function* watchGetItemSaga() {
    yield takeLatest(GET_SINGLE_REQUEST, handleGetItemSaga);
}





export default function* saga() {
    yield spawn(watchGetSaga);
    yield spawn(watchGetItemSaga)
}