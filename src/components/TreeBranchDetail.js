import React, { Component } from 'react'
import { connect } from 'react-redux'
import './TreeBranch.scss'
import { setActiveEqpReplacer } from '../reducers/setActiveEqp'

class TreeBranchDetail extends Component {
    state = {}
    onOpen = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if(this.props.type === "Detail"){
            this.props.setActiveEqp('SetActiveEqp', {data:this.props.data})
        }
    }
    render(){
        return(
            <div className='tree-branch detail' onClick={this.onOpen}>
                {this.props.data.fields.IDNumber}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setActiveEqp: (type, payload) => {
            dispatch(setActiveEqpReplacer(type, payload))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(TreeBranchDetail)
