import React, { Component } from 'react'
import { connect } from 'react-redux'
import TreeBranchFacility from './TreeBranchFacility'
import { fd } from '../actions/retrieveFacilityData'
import { facilityData } from '../reducers'
import './TreeBranch.scss'
import { setActiveEqpReplacer } from '../reducers/setActiveEqp'

class TreeBranchComplex extends Component {
    state = {
        open:false
    }
    onOpen = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if(this.state.open === false){
            if(this.props.type === "Complex"){
                console.log(this.props.data.pk)
                this.props.fetchFacilityData(this.props.data.pk)
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
            <div className='tree-branch complex' onClick={this.onOpen}>
                {this.props.data.fields.ComplexName}
                {this.state.open === true ? this.props.facilityData !== undefined ? this.props.facilityData.map(function(facility, i){
                    return <TreeBranchFacility data={facility} type={"Facility"} key={i} />
                }) : null : null}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFacilityData: id=>{
            dispatch(fd(id))
        },
        setActiveEqp: (type, payload) => {
            dispatch(setActiveEqpReplacer(type, payload))
        }
    }
}

export default connect(
    state => (
        { facilityData : facilityData(state) }
    ),
    mapDispatchToProps
)(TreeBranchComplex)
