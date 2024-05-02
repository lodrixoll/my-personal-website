import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="container">
            <div className="row justify-content-center my-5">
                <div className="col-auto">
                    <button className="btn btn-outline-primary mx-2 text-white">Home</button>
                    <button className="btn btn-outline-primary mx-2 text-white">About</button>
                    <button className="btn btn-outline-primary mx-2 text-white">Projects</button>
                    <button className="btn btn-outline-primary mx-2 text-white">GitHub</button>
                    <button className="btn btn-outline-primary mx-2 text-white">LinkedIn</button>
                    <button className="btn btn-outline-primary mx-2 text-white">Resume</button>
                </div>
            </div>
            <div className="row justify-content-center my-5">
                <div className="col-auto">
                    <img src="/images/headshot.png" alt="Headshot" className="img-fluid" style={{ borderRadius: '50%', width: '200px', height: '200px' }} />
                </div>
                <div className="col-auto">
                    <h1 className="text-white">👋 Hey, I'm Liam <span className="text-secondary fs-6" style={{ fontSize: '1.5rem' }}>@lodrixoll</span></h1>
                    <p className="text-white">A software engineer and entrepreneur.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;