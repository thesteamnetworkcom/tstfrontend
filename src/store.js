import storage from 'redux-persist/es/storage';
//import { createApiMiddleware } from './middleware';
//import { apiMiddleware } from 'redux-api-middleware';
import { applyMiddleware, createStore } from 'redux';
import { createFilter } from 'redux-persist-transform-filter';
import { persistReducer, persistStore } from 'redux-persist';
//import { routerMiddleware } from 'react-router-redux';
import { routerMiddleware } from 'connected-react-router';
import apiMiddleware from './middleware';
import rootReducer from './reducers';

export default (history) => {
    const persistedFilter = createFilter(
        'auth', ['access','refresh']
    );
    const reducer = persistReducer(
        {
            key: 'polls',
            storage: storage,
            whitelist: ['auth'],
            transfroms: [persistedFilter]
        },
        rootReducer(history)
    );
    const store = createStore(
        reducer,
        {},
        applyMiddleware(
            //createApiMiddleware,
            apiMiddleware,
            routerMiddleware(history)
        )
    );
    persistStore(store);
    return store;
}
