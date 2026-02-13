import React from 'react';
import '../layout/footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (  
        <footer className='footer-big-container'>
            <nav className='first-nav-footer'>
                <nav className='first-box-footer'>
                    <img src={logo} alt='logo'></img>
                    <nav className='main-navigations-footer'>
                        <ul className='list-container-footer'>

                        </ul>
                    </nav>
                </nav>
            </nav>
        </footer>
    );
}
 
export default Footer;