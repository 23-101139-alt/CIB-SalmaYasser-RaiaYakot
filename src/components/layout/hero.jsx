import React from 'react';
import '../layout/hero.css'
import Cta from '../common/button'

const Herosec = () => {
    return ( 
                <section className='container-sec1'>
                        <h1 className='header-sec1'>CIB</h1>
                        <p className='para-sec1'>Delivering value to our clients, our <br /> community and our shareholders</p>
                        <Cta />
                </section>
     );
}
 
export default Herosec;