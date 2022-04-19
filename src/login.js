import React from 'react';
import './App.css'
import {MainComponent,LoginComponent,Topic,Inp,InputComponent,ButtonComponent,Button} from './components/Style';

function Login () {
    return(
        <MainComponent>
            <LoginComponent>
                <Topic>Login</Topic>
                <InputComponent>
                <Inp type="text" placeholder="Email"/>
                <Inp type="Password" placeholder="Password"/>
                </InputComponent>
                <ButtonComponent>
                <Button type="button">Login</Button>
                </ButtonComponent>
            </LoginComponent>
        </MainComponent>
    );
}
export default Login;