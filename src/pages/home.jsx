import React from 'react';
// import ReactDOM from 'react-dom';
import './home.css'
import Headerr from '../components/layout/header'
import Herosec from '../components/layout/hero'
import Navigationlinksec2 from '../components/common/navsec2'
import Title1sec3 from '../components/common/smalltitlesec3'
import Bigtitlesec3 from '../components/common/bigtitlesec3'
import Cardsec3 from '../components/common/cardsec3'
import Smalltitlesec4 from '../components/common/smalltitlesec4';
import Cardsec4 from '../components/common/cardsec4';
import Cta from '../components/common/button';
import Sec5 from '../components/common/sec5';
import Sec6 from '../components/common/sec6';
// import pic3 from '../assets/pic3.png'
// import pic4 from '../assets/pic4.png'


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
                    <Navigationlinksec2 />
                    <Navigationlinksec2 />
                    <Navigationlinksec2 />
                    <Navigationlinksec2 />
                    <Navigationlinksec2 />
                </nav>
            </section>
            <section className='sec3'>
                <div className='container-sec3'>
                    <Title1sec3 />
                    <Bigtitlesec3 />
                    <div className='container-row-sec3'>
                                <Cardsec3 />
                                {/* <div className='cardsec3'>
                                    <img src={pic3} alt='icon' ></img>
                                    <p className='para-sec3-card'>Apply for a card </p>
                                </div>  */}
                                <Cardsec3 />
                                {/* <div className='cardsec3'>
                                    <img src={pic4} alt='icon' ></img>
                                    <p className='para-sec3-card'>Apply for a loan or overdraft </p>
                                </div> */}
                                 <Cardsec3 />
                    </div>

                </div>
            </section>
                                <Bigtitlesec3 />
<Smalltitlesec4 />

<section className='card-big-sec4'>
    <Cardsec4 />
    <Cardsec4 />
    <Cardsec4 />
  
</section>
<section className='center-div'>  <Cta /></section>
  <section className='sec5-big-div'>
                                    <Bigtitlesec3 />
<Sec5 />
<Sec5 />
<Sec5 />

  </section>
  <section className='center-div'>  <Cta /></section>
<section className='sec6-big-div'>
    <Sec6 />

</section>
  
        </main>
        </>
     );
}
 
export default Home;