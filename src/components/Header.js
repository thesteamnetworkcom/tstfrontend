import React, { Component } from 'react'
import './Header.scss'
import { connect } from 'react-redux'
import { isAuthenticated } from '../reducers'
import { logout } from '../actions/logout'
import { Button } from 'reactstrap'

class HeaderLayout extends Component{
    logout = (event) => {
        event.preventDefault()
        this.props.logout()
    }
    render(){
        return(
            <div className='header'>
                <div className='title'>
                    <h3>PMMS-PMMT</h3>
                </div>
                <div>
                    {
                        this.props.isAuthenticated?
                            <Button onClick={this.logout}>Logout</Button>
                        :null
                    }
                </div>
                {this.props.children}
            </div>
        )
    }
}

const Header = (props) => {
    return(
        <HeaderLayout {...props} />
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticated(state)
})
const mapDispatchToProps = (dispatch) => ({
    logout: () => (
        dispatch({type:logout()})
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
