import React from 'react';
import HeaderTop from './components/Dashboard/Dashboard/Dashboard';
import Footer from './components/Shared/Footer/Footer';
import UserNavbar from './components/Shared/Navbar/UserNavbar';

const User = () => {
    return (
        <div>
            <UserNavbar></UserNavbar>
            <HeaderTop></HeaderTop>
            <Footer></Footer>
            
        </div>
    );
};

export default User;