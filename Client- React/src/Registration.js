import React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import axios from 'axios';
import Header from './components/Home/Header/Header';
import './App.css';

function Registration(){
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (value) => {
        setName(value);
    };
    const handleAddressChange = (value) => {
        setAddress(value);
    };
    const handlePhoneChange = (value) => {
        setPhone(value);
    };
    const handlePasswordChange = (value) => {
        setPassword(value);
    };

    const handleSave = () =>{
        const data = {
            Name: name,
            Address: address,
            Phone: phone,
            IsActive: "Yes",
            Password: password
        };
        const url = 'https://localhost:44327/api/Login/Registration';
        axios.post(url,data).then((result) =>{
            alert(result.data);            
        }).catch((error) =>{
            alert(error);
        })
        window.location = "http://localhost:3000/login";
    }

    return(
        <Fragment>
            <Header></Header>
            <center>
            <h2> Registration </h2>
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
                            <label>Address &nbsp;</label>
                        </td>
                        <td>
                        <input type="text" id="txtAddress" placeholder='Enter Address' onChange={(e) => handleAddressChange(e.target.value)} /> <br></br>
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td>
                            <label>Phone &nbsp;</label>
                        </td>
                        <td>
                        <input type="text" id="txtPhone" placeholder='Enter Phone' onChange={(e) => handlePhoneChange(e.target.value)} /> <br></br> 
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
           
            <button class="button" onClick={() => handleSave()}>Register</button>
            </center>
        </Fragment>
        
    )
}


export default Registration;