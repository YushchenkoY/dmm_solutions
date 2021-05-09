import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from './saga/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

let storeRedux = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default storeRedux;
