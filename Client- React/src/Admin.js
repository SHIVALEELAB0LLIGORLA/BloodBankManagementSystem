import React from 'react';
import { Receiver } from './components/Receiver';
import Footer from './components/Shared/Footer/Footer';
import AdminNavbar from './components/Shared/Navbar/AdminNavbar';

const Admin = () => {
    return (
        <div>
           
            <AdminNavbar></AdminNavbar>           
            <h3>Blood Requests</h3>
            <Receiver></Receiver>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Admin;