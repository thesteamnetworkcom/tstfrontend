import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sd } from '../actions/retrieveSiteData'
import { siteData } from '../reducers'
import './UserData.scss'
import TreeBranchSite from './TreeBranchSite'

class UserData extends Component {
    componentDidMount(){
        this.props.fetchSiteData();
    }
    render(){
        return(
            <div className='user-data'>
                {this.props.userData.last_name},{" "}{this.props.userData.first_name}<br/>
                Username: {this.props.userData.username}<br/>
                {this.props.userData.email}<br/>
                {console.log(this.props)}
                <div className='bar'></div>
                {console.log(this.props.siteData)}
                {this.props.siteData !== '' ? <TreeBranchSite data={this.props.siteData[0]} type={"Site"} /> : null}
            </div>
        )
    }
}

export default connect(
    state => (
        { siteData : siteData(state) }
    ),
    { fetchSiteData : sd }
)(UserData);
