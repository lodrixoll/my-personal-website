import React from 'react';

const Navbar = () => {
  return (
    <div className="row justify-content-center my-5">
                <div className="col-auto">
                    <a href="/">
                        <button className="btn btn-outline-primary btn-lg mx-2 text-white">Home</button>
                    </a>
                    {/* <a href="#">
                        <button className="btn btn-outline-primary mx-2 text-white">About</button>
                    </a> */}
                    <a href="#">
                        <button className="btn btn-outline-primary btn-lg mx-2 text-white">Projects</button>
                    </a>
                    <a href="https://github.com/lodrixoll" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-primary btn-lg mx-2 text-white">GitHub</button>
                    </a>
                    <a href="https://www.linkedin.com/in/liam-o-driscoll/" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-primary btn-lg mx-2 text-white">LinkedIn</button>
                    </a>
                    <a href="mailto:lodrixoll@gmail.com" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-primary btn-lg mx-2 text-white">Email</button>
                    </a>
                    <a href="/resume" rel="noopener noreferrer">
                        <button className="btn btn-outline-primary btn-lg mx-2 text-white">Resume</button>
                    </a>
                </div>
            </div>
  );
};

export default Navbar

