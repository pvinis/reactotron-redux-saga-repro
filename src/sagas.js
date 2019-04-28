import { AppState } from 'react-native'
import { put, all, delay, fork, take, call } from 'redux-saga/effects'


function isInForeground() {
    return AppState.currentState === 'active';
}

export function* doSomethingIfOrWaitUntil(
    fn,
    initialStateEffect,
    onState,
) {
    const isOn = yield initialStateEffect; // <-- isOn becomes undefined
    if (!isOn) {
        yield take(onState);
    }
    yield call(fn);
}

export function doWhenInForeground(fn) {
    return doSomethingIfOrWaitUntil(fn, call(isInForeground), 'IN_FOREGROUND');
}

function something() {
    console.log('success!')
}

export function* watchCounter() {
    while (true) {
        yield take('INCREASE_COUNTER')
        yield doWhenInForeground(something);
    }
}

export function* counterSaga() {
    yield fork(watchCounter);
}

export default function* rootSaga() {
  yield fork(counterSaga)
}
