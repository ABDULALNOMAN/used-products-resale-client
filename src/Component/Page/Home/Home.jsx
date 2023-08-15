import React from 'react';
import { useNavigation } from 'react-router-dom';
import Loding from '../other/Loding';
import About from './About';
import Advertised from './Advertised';
import Banner from './Banner';
import Category from './Category';

const Home = () => {
    const navigate = useNavigation()
    if (navigate.state === 'loding') {
        return <Loding></Loding>
    }
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <Advertised></Advertised>
        </div>
    );
};

export default Home;