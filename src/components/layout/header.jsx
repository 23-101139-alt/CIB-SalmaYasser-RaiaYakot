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
                    <li className='navigation-text-header'>
                    <a href="#" className='navigation-text-link-header'>
                     Investor Relations 
                    </a>
                    </li>
                     <li className='navigation-text-header'>
                    <a href="#" className='navigation-text-link-header'>
                     Responsible Banking 
                    </a>
                    </li>
                    <li className='navigation-text-header'>
                    <a href="#" className='navigation-text-link-header'>
                     Newsroom
                    </a>
                    </li>
                    <li className='navigation-text-header'>
                    <a href="#" className='navigation-text-link-header'>
                     Learning Center
                    </a>
                    </li>
                    <li className='navigation-text-header'>
                    <a href="#" className='navigation-text-link-header'>
                    Careers
                    </a>
                    </li>
                      <li className='navigation-text-header'>
                    <a href="#" className='navigation-text-link-header'>
                    Others
                    </a>
                    </li>
                </ul>
                <div className='empty-div'></div>
            </nav>
        </header>
     );
}
 
export default Headerr;