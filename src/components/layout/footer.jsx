import React from 'react';
import '../layout/footer.css'
import logo from '../../assets/logo.png'
import Footernavs from '../common/footernavs'
import pic11 from '../../assets/pic11.png'
import pic12 from '../../assets/pic12.png'
import pic13 from '../../assets/pic13.png'
import pic14 from '../../assets/pic14.png'
import pic15 from '../../assets/pic15.png'
import pic16 from '../../assets/pic16.png'


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
                    <figure className='footer-imgs-container'>
                         <img src={pic11} alt='googleplay' className='footer-img-googleplay'></img>
                        <img src={pic12} alt='App store' className='footer-img-appstore'></img>
                    </figure>
                </nav>

                <figure className='img-decoration1-footer'>
                    <img src={pic13} alt='decoration' ></img>
                     <img src={pic14} alt='decoration' ></img>
                </figure>

                <figure className='img-decoration-footer-2'>
                    <img src={pic15} alt='decoration'></img>
                    <img src={pic16} alt='decoration'></img>
                </figure>


                <nav className='part2-footer'>
                <ul>
                    
                </ul>
            </nav>



            </nav>

        </footer>
    );
}
 
export default Footer;