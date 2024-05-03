import React from 'react';

const Info = () => {
  return (
    <div className="row justify-content-center align-items-center">
        <div className="col-auto">
            <img src="/images/headshot.png" alt="Headshot" className="img-fluid" style={{ borderRadius: '50%', width: '200px', height: '200px' }} />
        </div>
        <div className="col-auto">
            <h1 className="text-white">👋 Hey, I&apos;m Liam <span className="fs-6" style={{ color: '#007BFF', fontSize: '1.5rem' }}>@lodrixoll</span></h1>
            <p className="text-white pt-2">AI Engineer, Full Stack Developer, and Entrepreneur.</p>
            <p className="text-white">Currently working on...</p>
        </div>
    </div>
  );
};

export default Info;

