import React from 'react';
import ReactDOM from 'react-dom';
import './home.css'
import Headerr from '../components/layout/header'
import Herosec from '../components/layout/hero'


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

            </section>
        </main>
        </>
     );
}
 
export default Home;