import React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import axios from 'axios';
import Header from './components/Home/Header/Header';
import './App.css';

function Login(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (value) => {
        setName(value);
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
    };

    const handleLogin = () =>{
        const data = {
            Name: name,
            Password: password
            
        };
        const url = 'https://localhost:44327/api/Login/Login';
        axios.post(url,data).then((result) =>{
            alert(result.data);
            if (password === "admin") {
                window.location = "http://localhost:3000/admin";
              } else if(password != "admin"){
                window.location = "http://localhost:3000/user";
              }
              else{
                window.location = "http://localhost:3000/";
              }
        }).catch((error) =>{
            alert(error);
        })
    }

    return(
        <Fragment>
            <Header></Header>
            <center>
            <h2>Login</h2> 
            <br></br>
            <table>
                <tr>
                    <td>
                    <label>Name &nbsp;</label>
                    </td>
                    <td>
                    <input type="text" id="txtName" placeholder='Enter Name'onChange={(e) => handleNameChange(e.target.value)} /> <br></br>
                    </td>
                </tr>
                <br></br>
                <tr>
                    <td>
                    <label>Password &nbsp;</label>
                    </td>
                    <td>
                    <input type="text" id="txtPassword" placeholder='Enter Password' onChange={(e) => handlePasswordChange(e.target.value)} /> <br></br>
                    </td>
                </tr>
                <br></br>
            </table>
            
            <button class="button" onClick={() => handleLogin()}>Login</button>
            
            </center>
            
        </Fragment>
        
    )
}


export default Login;