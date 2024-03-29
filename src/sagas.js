import { put, takeEvery, all } from 'redux-saga/effects';

const delay = ms => new Promise(res => setTimeout(res,ms));

function* incrementAsync() {
    yield delay(1000)
    yield put({type: 'ADD_ONE' })
}

function* decrementAsync() {
    yield delay(1000)
    yield put({type: 'MINUS_ONE' })
}

function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* watchDecrementAsync() {
    yield takeEvery('DECREMENT_ASYNC', decrementAsync)
}

export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
        watchDecrementAsync()
    ])
}

