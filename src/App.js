import React, { Component } from 'react';
import './App.scss'
import UserData from './components/UserData'
import EqpModel from './components/EqpModel'
import WorkItemModel from './components/WorkItemModel'
import Db from './components/Db.js'
import { Route, Switch, Redirect } from 'react-router'
import { connect } from 'react-redux'
import { ud } from './actions/retrieveUserData'
import {userData} from './reducers'
import {siteData} from './reducers'
import {workItemData} from './reducers'
import {setActiveEqp} from './reducers'
import {sd} from './actions/retrieveSiteData'

export default class App extends Component {
    render(){
        return(
            <>
                <Db />
            </>
        );
    }
}
