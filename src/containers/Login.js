import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import './Login.scss'
import LoginForm from '../components/LoginForm'
import { login } from '../actions/auth'
import { ru } from '../actions/registerUser'
import { authErrors, isAuthenticated, registerResponse } from '../reducers'

const Login = (props) => {
    console.log(props.isAuthenticated);
    if(props.isAuthenticated){
        return (
            <Redirect to='/' />
        )
    }else{
        return(
            <div className='login-page'>
                <LoginForm {...props} />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    errors: authErrors(state),
    isAuthenticated: isAuthenticated(state),
    registerResponse: registerResponse(state)
})
const mapDispatchToProps = (dispatch) => ({
    onSubmit: (username, password) => {
        dispatch(login(username, password))
    },
    register: (username, password) => {
        dispatch(ru(username, password))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
