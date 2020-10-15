import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import charactersReducer from '../ducks'
import { mySaga } from '../ducks/sagas'

const logger = createLogger()

const sagaMiddleware = createSagaMiddleware()
const store = createStore(charactersReducer, applyMiddleware(logger, sagaMiddleware))

sagaMiddleware.run(mySaga)

export { store }
