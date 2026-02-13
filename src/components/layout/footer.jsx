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
import pic17 from '../../assets/pic17.png'
import pic18 from '../../assets/pic18.png'
import pic19 from '../../assets/pic19.png'
import pic20 from '../../assets/pic20.png'
import pic21 from '../../assets/pic21.png'
import pic22 from '../../assets/pic22.png'
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
                <ul className='list-part2-footer'>
                            <Footernavs />
                            <Footernavs />
                            <Footernavs />
                             <Footernavs />
                </ul>
                <ul className='pic-list-footer'>
                    <li>
                        <img src={pic17} alt='icon' ></img>
                    </li>
                    <li>
                        <img src={pic18} alt='icon' ></img>
                    </li>

                    <li>
                        <img src={pic19} alt='icon' ></img>
                    </li>
                                        <li>
                        <img src={pic20} alt='icon' ></img>
                    </li>
                                                            <li>
                        <img src={pic21} alt='icon' ></img>
                    </li>
                   <li>
                        <img src={pic22} alt='icon' ></img>
                    </li>


                </ul>
                </nav>

            </nav>
            <div className='lastpart-footer'>
                <div className='container-copyrights'>
                    <h3 className='copyrights'>Copyright © 2025 Commercial International Bank</h3>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;