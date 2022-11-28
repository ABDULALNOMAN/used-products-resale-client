import React from 'react';
import Advertised from './Advertised';
import Banner from './Banner';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Advertised></Advertised>
        </div>
    );
};

export default Home;