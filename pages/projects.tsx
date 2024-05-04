import React from 'react';
import Navbar from '../components/Navbar';

const Projects = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-auto">
                        <img src="/images/icons/web-development.png" alt="web development" className="img-fluid" style={{ width: '100px', height: '100px' }}/>
                    </div>
                    <h1 className="text-white">Projects</h1>
                </div>

                <div className="row mt-5">
                    <div className="col-12">
                        <div className="card bg-secondary" style={{ minHeight: '500px' }}>
                            <div className="card-body">
                                <p className="card-text text-white">Coming Soon...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;