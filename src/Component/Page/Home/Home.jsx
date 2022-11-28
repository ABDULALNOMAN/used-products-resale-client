import React from 'react';
import About from './About';
import Advertised from './Advertised';
import Banner from './Banner';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <About></About>
            <Advertised></Advertised>
        </div>
    );
};

export default Home;