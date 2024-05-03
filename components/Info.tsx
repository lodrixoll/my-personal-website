import React from 'react';

const Info = () => {
  return (
    <div className="row justify-content-center align-items-center">
        <div className="col-auto">
            <img src="/images/headshot.png" alt="Headshot" className="img-fluid" style={{ borderRadius: '50%', width: '200px', height: '200px' }} />
        </div>
        <div className="col-auto">
            <h1 className="text-white">👋 Hey, I'm Liam <span className="fs-6" style={{ color: '#007BFF', fontSize: '1.5rem' }}>@lodrixoll</span></h1>
            <p className="text-white pt-2">AI Engineer, Full Stack Developer, and Entrepreneur.</p>
            <p className="text-white">Currently working on...</p>
            {/* <a href="https://github.com/lodrixoll" target="_blank" rel="noopener noreferrer">
                <img src="/images/icons/github.png" alt="GitHub" className="img-fluid" style={{ width: '40px', height: '40px' }} />
            </a>
            <a href="https://www.linkedin.com/in/liam-o-driscoll/" target="_blank" rel="noopener noreferrer"  className="mx-2">
                <img src="/images/icons/linkedin.webp" alt="LinkedIn" className="img-fluid" style={{ width: '40px', height: '40px' }} />
            </a>
            <a href="mailto:lodrixoll@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/icons/mail.png" alt="Email" className="img-fluid" style={{ width: '40px', height: '40px' }} />
            </a> */}
        </div>
    </div>
  );
};

export default Info;

