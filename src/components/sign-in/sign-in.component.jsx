import React, { Component } from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        const { name ,value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                     
                    <FormInput name='email' type='email' 
                            handleChange={this.handleChange} 
                            value={this.state.email} 
                            required 
                            label='Email' />

                    <FormInput name='password' type='password' 
                            handleChange={this.handleChange} 
                            value={this.state.password} 
                            required
                            label='Password' />

                        <CustomButton type='submit' value='LOG IN' />
                        <CustomButton onClick={signInWithGoogle} value='SIGN IN WITH GOOGLE' />

                </form>
            </div>
        );
    }
}

export default SignIn;
