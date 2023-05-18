import React from 'react';
import FooterDetail from './FooterDetail';
import './Footer.css';

const Footer = () => {
    const contact = [
        { name: "Emergency Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        
    ]
    
   
    const services = [
        { name: "Donate Blood", link: "/emergency" },
        { name: "Request Blood", link: "/checkup" },
        
    ]

    return (
        <footer className="footer-area clear-both sm-pe-5" id="AboutPage">
            <div className="container pt-5">
                <div className="row md-py-5 footer-content">
                    {/* <FooterDetail key={1} menuTitle={"."} menuItems={noNamed} /> */}
                    <FooterDetail key={2} menuTitle="Services" menuItems={services} />
                    <FooterDetail key={2} menuTitle="Contact" menuItems={contact} />
                    
                   
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;