import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { Task } from 'redux-saga'
import rootReducer from './reducers/rootReducer';
import rootSaga from './saga/rootSaga'



    const sagaMiddleware = createSagaMiddleware();

    let storeRedux = createStore(
        rootReducer,
        // @ts-ignore
        applyMiddleware(sagaMiddleware),
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
    
    sagaMiddleware.run(rootSaga);
    
    export default storeRedux;