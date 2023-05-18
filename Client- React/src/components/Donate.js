import React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import axios from 'axios';
import Header from './Home/Header/Header';
import './Button.css';

function Donate(){
    const [name, setName] = useState('');
    const [blood, setBloodGroup] = useState('');
    const [phone, setPhone] = useState('');
    

    const handleNameChange = (value) => {
        setName(value);
    };
    const handleBloodGroupChange = (value) => {
        setBloodGroup(value);
    };
    const handlePhoneChange = (value) => {
        setPhone(value);
    };
    

    const handleSave = () =>{
        const data = {
            Name: name,
            BloodGroup: blood,
            Unit: "Filled by Admin",
            Hospital: "Filled  by Admin",
            Phone: phone,
            Status: "Yes"
            
        };
        const url = 'https://localhost:44327/api/Blood/donate';
        axios.post(url,data).then((result) =>{
            alert(result.data);
        }).catch((error) =>{
            alert(error);
        })
        window.location = "http://localhost:3000/user";
    }
    
    return(
        <Fragment>
            <Header></Header>
            <center>
            <h2> Donate Blood </h2>
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
                <td> <label> BloodGroup &nbsp;</label></td>
                <td>
                    <select name="Blood Group" id="blood" onChange={(e) => handleBloodGroupChange(e.target.value)}>
                        <option value="A Positive">A+</option>
                        <option value="B Positive">B+</option>
                        <option value="O Positive">O+</option>
                        <option value="AB Positive">AB+</option>
                        <option value="A Negative">A-</option>
                        <option value="B Negative">B-</option>
                        <option value="O Negative">O-</option>
                        <option value="ABNegative">AB-</option>
                    </select>
                </td>
            </tr>
            <br></br>
            <tr>
                <td><label>Phone &nbsp;</label></td>
                <td>
                <input type="text" id="txtPhone" placeholder='Enter Phone' onChange={(e) => handlePhoneChange(e.target.value)} /> <br></br>
                <br></br> 
                </td>
            </tr>
            
            </table>
            
            <button class="button" onClick={() => handleSave()}>Donate</button>
            </center>
        </Fragment>
        
    )
}


export default Donate;