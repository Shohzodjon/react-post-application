
import React from 'react';
import './home.css';
import MainSide from './mainSide/MainSide';
import RightSide from './rightSide/RightSide';

const Home = () => {
    return (
        <section className='home-section'>  
            <MainSide/>
            <RightSide />
        </section>
    )
}
export default Home;