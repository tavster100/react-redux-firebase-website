import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import createSagaMiddle from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import thunk from 'redux-thunk'

const sagaMiddleware = createSagaMiddle()

export const middlewares = [thunk, sagaMiddleware, logger]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
)
sagaMiddleware.run(rootSaga)

export default store