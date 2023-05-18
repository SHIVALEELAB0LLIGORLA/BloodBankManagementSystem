import React from 'react';
import { Stock } from '../components/Stock';
import Footer from './components/Shared/Footer/Footer';
import Dashboard from './components/Shared/Navbar/AdminNavbar';

const Dashboard = () => {
    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <h2>Pending Blood Requests</h2>
            <h2>Blood Stock Details</h2>
            <Stock></Stock>
            <Footer></Footer>
            
        </div>
    );
};

export default Dashboard;