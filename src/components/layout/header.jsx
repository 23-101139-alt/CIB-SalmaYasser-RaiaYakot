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
                 
                     Investor Relations 
                  
                    </li>
                     <li className='navigation-text-header'>
                   
                     Responsible Banking 
                 
                    </li>
                    <li className='navigation-text-header'>
                    
                     Newsroom
                   
                    </li>
                    <li className='navigation-text-header'>
                    
                     Learning Center
                   
                    </li>
                    <li className='navigation-text-header'>
                    
                    Careers
                   
                    </li>
                      <li className='navigation-text-header'>
                    
                    Others
                    
                    </li>
                </ul>
                <div className='empty-div'></div>
            </nav>
        </header>
     );
}
 
export default Headerr;