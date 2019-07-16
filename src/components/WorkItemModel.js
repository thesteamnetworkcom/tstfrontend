import React, { Component } from 'react';

export default class WorkItemModel extends Component {
    render(){
        return(
            <>
                <h3>Work Items</h3>
                {this.props.data.map(function(workitem, index){
                    return(
                        <div className='workitem' key={index}>
                            WorkItem
                        </div>
                    )
                })}
            </>
        )
    }
}
