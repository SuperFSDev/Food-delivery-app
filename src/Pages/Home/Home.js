import React from 'react';
import Banner from './Banner';
import Foods from './Foods';
import Hungry from './Hungry';
import NearFood from './NearFood';
import Others from './Others';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NearFood></NearFood>
            <Hungry></Hungry>
            <Foods></Foods>
            <Others></Others>
        </div>
    );
};

export default Home;