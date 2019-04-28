import { put, takeEvery, all, delay, fork, take, call } from 'redux-saga/effects'


function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* counterFn() {
    console.log('inside saga')
    yield put({ type: 'NOTHING' })
}

export function* watchCounter() {
    while (true) {
        yield take('INCREASE_COUNTER')
        yield call(counterFn)
    }
}

export function* counterSaga() {
    yield fork(watchCounter);
}

export default function* rootSaga() {
  yield fork(helloSaga)
  yield fork(counterSaga)
}
