import React, {Component} from 'react'
import { Alert, Button, Jumbotron, Form } from 'reactstrap';
import TextInput from './TextInput'
import './LoginForm.scss'

export default class LoginForm extends Component{
    state={
        username:'',
        password:''
    }
    handleInputChange = (event) => {
        const target = event.target,
        value = target.type === 'checkbox' ? target.checked : target.value,
        name = target.name

        this.setState({
            [name]:value
        });
    }
    onSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.username, this.state.password)
    }
    onRegister = (event) =>{
        event.preventDefault()
        this.props.register(this.state.username, this.state.password)
    }
    render(){
        console.log(this.props.errors);
        console.log(this.props);
        const errors = this.props.errors || {}
        return(
            <Jumbotron className="container">
                <Form onSubmit={this.onSubmit}>
                    <h1>Authentication</h1>
                    {
                        errors.non_field_errors?
                        <Alert color="danger">
                            {errors.non_field_errors}
                        </Alert>:""
                    }
                    {
                        errors.detail?
                        <Alert color="danger">
                            {errors.detail}
                        </Alert>:""
                    }
                    {
                        this.props.registerResponse.message !== null && this.props.registerResponse.message !== ""?
                            this.props.registerResponse.message === "SUCCESS"?
                            <Alert color="success">
                                {this.props.registerResponse.response.text}
                            </Alert>:
                            <Alert color="danger">
                                {this.props.registerResponse.response.text}
                            </Alert>
                        :""
                    }
                    <TextInput name="username" label="Username" error={errors.username} onChange={this.handleInputChange} />
                    <TextInput name="password" label="Password" error={errors.password} onChange={this.handleInputChange} />
                    <Button className='loginButton' type="submit" size="lg">
                        Log In
                    </Button>
                    <Button className='registerButton' onClick={this.onRegister} type="submit" size="lg">
                        Register
                    </Button>
                </Form>
            </Jumbotron>
        )
    }
}
