import React from 'react';
import Navbar from '../components/Navbar';
import Info from '../components/Info';
import Activities from '../components/Activities';

const Home: React.FC = () => {
    return (
        <div className="container clamp">
            <Navbar />
            <Info />
            <Activities />
        </div>
    );
};

export default Home;