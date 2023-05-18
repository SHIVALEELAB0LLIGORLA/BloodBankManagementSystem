import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import HeaderTop from '../HeaderTop/HeaderTop';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeaderTop></HeaderTop>
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default Home;