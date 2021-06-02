import * as React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {SignUpContainer, SignUpTitle} from "./sign-up.styles";
import {signUpStart} from "../../redux/user/user.actions";
import { connect } from "react-redux";
import {useState} from "react";

const SignUpComponent = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            return;
        }

        signUpStart({ displayName, email, password });
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form className={'sign-up-form'} onSubmit={handleSubmit}>
                <FormInput type={'text'} name={'displayName'} label={'displayName'} value={displayName} handleChange={handleChange} required />
                <FormInput type={'email'} name={'email'} label={'email'} value={email} handleChange={handleChange} required />
                <FormInput type={'password'} name={'password'} label={'password'} value={password} handleChange={handleChange} required />
                <FormInput type={'password'} name={'confirmPassword'} label={'confirmPassword'} value={confirmPassword} handleChange={handleChange} required />

                <div className={'buttons'}>
                    <CustomButton type={'submit'}>Sign Up</CustomButton>
                </div>
            </form>
        </SignUpContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUpComponent);