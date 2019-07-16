import React, { Component } from 'react'
import UserData from '../components/UserData'
import EqpModel from '../components/EqpModel'
import WorkItemModel from '../components/WorkItemModel'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import { ud } from '../actions/retrieveUserData'
import {userData} from '../reducers'
import {siteData} from '../reducers'
import {workItemData} from '../reducers'
import {setActiveEqp} from '../reducers'
import {sd} from '../actions/retrieveSiteData'
import './Db.scss';

class Db extends Component{
    componentDidMount(){
        this.props.fetchUserData();
        this.props.fetchSiteData();
    }
    render(){
        return(
        <div className='columns'>
            <div className='user-data-wrapper'>
                <UserData userData={this.props.userData} />
            </div>
            <div className='data-wrapper'>
                {console.log(this.props.sae)}
                {this.props.sae !== undefined && this.props.sae !== '' && this.props.sae !== null ? <EqpModel data={this.props.sae} /> : null}
            </div>
            <div className='workitem-wrapper'>
                {this.props.workItemData !== undefined && this.props.workItemData !== '' && this.props.workItemData !== null ? <WorkItemModel data={this.props.workItemData} /> : null}
            </div>
        </div>
        )
    }
}

export default connect(
    state => (
        {
            userData: userData(state),
            siteData: siteData(state),
            workItemData: workItemData(state),
            sae: setActiveEqp(state)
        }
    ),
    {
        fetchUserData: ud,
        fetchSiteData: sd
    }
)(Db);
