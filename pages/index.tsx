import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="container">
            <div className="row justify-content-center my-5">
                <div className="col-auto">
                    <a href="/">
                        <button className="btn btn-outline-primary mx-2 text-white">Home</button>
                    </a>
                    <a href="#">
                        <button className="btn btn-outline-primary mx-2 text-white">About</button>
                    </a>
                    <a href="#">
                        <button className="btn btn-outline-primary mx-2 text-white">Projects</button>
                    </a>
                    <a href="https://github.com/lodrixoll" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-primary mx-2 text-white">GitHub</button>
                    </a>
                    <a href="https://www.linkedin.com/in/liam-o-driscoll/" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-primary mx-2 text-white">LinkedIn</button>
                    </a>
                    <a href="/resume" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-primary mx-2 text-white">Resume</button>
                    </a>
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