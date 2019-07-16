import React, { Component } from 'react'
import { connect } from 'react-redux'
import TreeBranchEquipment from './TreeBranchEquipment'
import { ed } from '../actions/retrieveEquipmentData'
import { equipmentData } from '../reducers'
import './TreeBranch.scss'
import { setActiveEqpReplacer } from '../reducers/setActiveEqp'

class TreeBranchFacility extends Component {
    state = {
        open:false
    }
    onOpen = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if(this.state.open === false){
            if(this.props.type === "Facility"){
                console.log(this.props.data.pk)
                this.props.fetchEquipmentData(this.props.data.pk)
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
            <div className='tree-branch facility' onClick={this.onOpen}>
                {this.props.data.fields.FacilityName}
                {this.state.open === true ? this.props.equipmentData !== undefined && this.props.equipmentData !== '' ? this.props.equipmentData.map(function(equipment, i){
                    return <TreeBranchEquipment data={equipment} type={"Equipment"} key={i} />
                }) : null : null}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEquipmentData : id => {
            dispatch(ed(id))
        },
        setActiveEqp: (type, payload) => {
            dispatch(setActiveEqpReplacer(type, payload))
        }
    }
}

export default connect(
    state => (
        {equipmentData : equipmentData(state) }
    ),
    mapDispatchToProps
)(TreeBranchFacility)
