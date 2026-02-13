import React from 'react';
import '../layout/footer.css'
import logo from '../../assets/logo.png'
import Footernavs from '../common/footernavs'

const Footer = () => {
    return (  
        <footer className='footer-big-container'>
            <nav className='first-nav-footer'>
                <nav className='first-box-footer'>
                    <img src={logo} alt='logo' className='logo-footer'></img>
                    <nav className='main-navigations-footer'>
                        <ul className='list-container-footer'>
                            <Footernavs />
                            <Footernavs />
                            <Footernavs />
                            <Footernavs />
                        </ul>
                        <ul className='list-container-footer'>
                            <Footernavs />
                            <Footernavs />
                            <Footernavs />
                            <Footernavs />
                        </ul>
                        <ul className='list-container-footer'>
                            <Footernavs />
                            <Footernavs />
                            <Footernavs />
                            <Footernavs />
                        </ul>
                    </nav>
                </nav>
            </nav>
        </footer>
    );
}
 
export default Footer;