import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import Reactotron from './reactotron'
import reducer from './reducer'
import rootSaga from './sagas'


const create = () => {
    const sagaMonitor = Reactotron.createSagaMonitor()
    const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
    const store = createStore(reducer,
      compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer())
    )
    sagaMiddleware.run(rootSaga)

    return store

}

export default create
