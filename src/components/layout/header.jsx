import React from 'react';
import '../layout/header.css'
import logo from '../../assets/logo.png'
import Navtext from '../common/navtext'

const Headerr = () => {
    return ( 
        <header className='headerr'>
            <nav className='main-nav-header'>
                <img src={logo} alt='logo'></img>
                <ul className='list-navigation-bar'>
                    <Navtext />
                </ul>
            </nav>
        </header>
     );
}
 
export default Headerr;