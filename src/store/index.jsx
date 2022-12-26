import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from './rootReducer'

// import reducer from './reducers'
// import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware)
)

// sagaMiddleware.run(mySaga)

export default store