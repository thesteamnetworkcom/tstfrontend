import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import Layout from './components/Layout';
import configureStore from './store'
import * as serviceWorker from './serviceWorker';
import { Route, Switch } from 'react-router'

import Login from './containers/Login';
import PrivateRoute from './containers/PrivateRoute';

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
    (<Provider store={store}>
            <ConnectedRouter history={history}>
                <Layout>
                    <Switch>
                        <Route exact path="/login/" component={()=>
                            <Login />}
                        />
                        <PrivateRoute path="/" component={()=>
                            <App />}
                        />
                    </Switch>
                </Layout>
            </ConnectedRouter>
    </Provider>),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
