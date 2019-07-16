import React, { Component } from 'react';
import './EqpModel.scss';

export default class EqpModel extends Component {
    render(){
        return(
            <>
                <h1>{this.props.data.model}</h1>
                <div className='detail-wrapper'>
                    <div className='keys'>
                        {
                            Object.keys(this.props.data.fields).map(function(keyName, keyIndex){
                                return(
                                    <div key={keyIndex}>
                                        <span>{keyName}: </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='inputs'>
                        {
                            Object.keys(this.props.data.fields).map(function(keyName, keyIndex){
                                return(
                                    <div key={keyIndex}>
                                        <input type="text" value={this.props.data.fields[keyName]} />
                                    </div>
                                )
                            }.bind(this))
                        }
                    </div>
                </div>
            </>
        )
    }
}
