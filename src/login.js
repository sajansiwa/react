import React, { useState } from 'react';

import './App.css'
import {MainComponent,LoginComponent,Topic,Inp,InputComponent,ButtonComponent,Button} from './components/Style';


function Login(){
    const [username, setUSername] = useState("");
    const [Password, setPassword] = useState("");
    const [loggedin, setloggedin] = useState();

    
    const submitForm = (e) =>{
         e.preventDefault();
         if(username === "admin" && Password === "admin123"){
            setloggedin (true);
        }
        else
        {
            setloggedin(false);
        }
    }
       
    return(
        <MainComponent islogged={loggedin}>
            <LoginComponent  onSubmit={submitForm}>
                <Topic>Login</Topic>
                <InputComponent>
                <Inp type="text" placeholder="username" value={username} onChange={(e) => setUSername(e.target.value) }/>
                
                </InputComponent>
                <InputComponent>
                <Inp type="Password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value) }/>
               
                </InputComponent>
                <ButtonComponent >
                <Button type="submit" >Login</Button>
                </ButtonComponent>
            </LoginComponent>
        </MainComponent>
    );
}
export default Login;