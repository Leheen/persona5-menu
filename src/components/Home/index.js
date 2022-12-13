import React from 'react';

import StarBackground from './stars/StarBackground';
import Menu from '../Menu';

import './Home.scss';

const Home = () => (
    <>
        <StarBackground />
        <div className="container">
            <Menu />
        </div>
    </>
);

export default Home;