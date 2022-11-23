import React from 'react';
import Advertised from './Advertised';
import Banner from './Banner';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertised></Advertised>
            <Products></Products>
        </div>
    );
};

export default Home;