import React, { Component } from 'react'
import { connect } from 'react-redux'
import TreeBranchDetail from './TreeBranchDetail'
import { dd } from '../actions/retrieveDetailData'
import { detailData } from '../reducers'
import './TreeBranch.scss'
import { setActiveEqpReplacer } from '../reducers/setActiveEqp'

class TreeBranchEquipment extends Component {
    state = {
        open:false
    }
    onOpen = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if(this.state.open === false){
            if(this.props.type === "Equipment"){
                console.log(this.props.data.pk)
                this.props.fetchDetailData(this.props.data.pk)
                this.props.setActiveEqp('SetActiveEqp', {data:this.props.data})
                this.setState({
                    open:true
                })
            }
        }else{
            this.props.setActiveEqp('SetActiveEqp', {data:this.props.data})
            this.setState({
                open:false
            })
        }
    }
    render(){
        return(
            <div className='tree-branch equipment' onClick={this.onOpen}>
                {this.props.data.fields.SectionName}
                {this.state.open === true ? this.props.detailData !== undefined && this.props.detailData !== ''? this.props.detailData.map(function(detail, i){
                    return <TreeBranchDetail data={detail} type={"Detail"} key={i} />
                }) : null : null}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDetailData: id => {
            dispatch(dd(id))
        },
        setActiveEqp: (type, payload) => {
            dispatch(setActiveEqpReplacer(type, payload))
        }
    }
}

export default connect(
    state => (
        {detailData : detailData(state)}
    ),
    mapDispatchToProps
)(TreeBranchEquipment)
