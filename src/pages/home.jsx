import React from 'react';
import ReactDOM from 'react-dom';
import './home.css'
import Headerr from '../components/layout/header'
import Herosec from '../components/layout/hero'
import Navigationlinksec2 from '../components/common/navsec2'


const Home = () => {
    return ( 
        <>
        <hedaer>
            <Headerr />
        </hedaer>
        <main>
            <section className='sec1'>
                <Herosec />
            </section>
            <section className='sec2'>
                <nav className='nav-sec2'>
                    <Navigationlinksec2 />
                    <nav className='navv-text-sec2'>News</nav>
                    <nav className='navv-text-sec2'>Blog Articles</nav>
                    <nav className='navv-text-sec2'>CIB International</nav>
                    <nav className='navv-text-sec2'>Sustainable Finance</nav>
                    <nav className='navv-text-sec2'>Awards</nav>
                </nav>
            </section>
        </main>
        </>
     );
}
 
export default Home;