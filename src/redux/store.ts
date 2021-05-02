import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { Task } from 'redux-saga'
import rootReducer from './reducers/rootReducer';
import rootSaga from './saga/rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension';



    const sagaMiddleware = createSagaMiddleware();

    let storeRedux = createStore(
        rootReducer,
        // @ts-ignore
        composeWithDevTools(applyMiddleware(sagaMiddleware))
        );
    
    sagaMiddleware.run(rootSaga);
    
    export default storeRedux;