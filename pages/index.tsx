import React from 'react';
import Navbar from '../components/Navbar';
import Info from '../components/Info';
import Activities from '../components/Activities';
import GitHubGraph from '../components/GitHubGraph';

const Home: React.FC = () => {

    return (
        <div className="container clamp">
            <Navbar />
            <Info />
            <GitHubGraph />
            <Activities />
        </div>
    );
};

export default Home;