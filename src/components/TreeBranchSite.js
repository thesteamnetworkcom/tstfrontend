import React, { Component } from 'react'
import TreeBranchComplex from './TreeBranchComplex'
import { connect } from 'react-redux'
import { cd } from '../actions/retrieveComplexData'
import { wd } from '../actions/retrieveWorkItemData'
import { complexData } from '../reducers'
import { setActiveEqpReplacer } from '../reducers/setActiveEqp'
import './TreeBranch.scss'

class TreeBranchSite extends Component {
    state={
        open:false
    }
    onOpen = () => {
        if(this.state.open === false){
            if(this.props.type === "Site"){
                console.log(this.props.data.pk)
                this.props.fetchComplexData(this.props.data.pk)
                console.log(this.props)
                this.props.setActiveEqp('SetActiveEqp', {data:this.props.data})
                this.props.fetchWorkItemData('SetWorkItemList', {data:this.props.data})
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
            <div className='tree-branch site' onClick={this.onOpen}>
                {console.log(this.props.data.fields)}
                {this.props.data.fields.SiteName}
                {this.state.open === true ? this.props.complexData !== '' ? this.props.complexData.map(function(complex, i){
                    return <TreeBranchComplex data={complex} type={"Complex"} key={i} />
                }) : null : null}
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchComplexData: id=>{
            dispatch(cd(id))
        },
        fetchWorkItemData: id=>{
            dispatch(wd(id))
        },
        setActiveEqp: (type, payload) => {
            dispatch(setActiveEqpReplacer(type, payload))
        }
    }
}
export default connect(
    state => (
        { complexData : complexData(state) }
    ),
    mapDispatchToProps
)(TreeBranchSite)
