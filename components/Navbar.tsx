import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="row justify-content-center my-5">
        <div className="col-auto">
            <Link href="/">
                <button className="btn btn-outline-primary btn-lg mx-2 my-1 text-white">Home</button>
            </Link>
            <Link href="/projects">
                <button className="btn btn-outline-primary btn-lg mx-2 my-1 text-white">Projects</button>
            </Link>
            <Link href="/resume" rel="noopener noreferrer">
                <button className="btn btn-outline-primary btn-lg mx-2 my-1 text-white">Resume</button>
            </Link>
            <Link href="https://github.com/lodrixoll" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline-primary btn-lg mx-2 my-1 text-white">
                    GitHub <i className="fas fa-external-link-alt" style={{ marginLeft: '4px' }}></i>
                </button>
            </Link>
            <Link href="https://www.linkedin.com/in/liam-o-driscoll/" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline-primary btn-lg mx-2 my-1 text-white">
                    LinkedIn <i className="fas fa-external-link-alt" style={{ marginLeft: '4px' }}></i>
                </button>
            </Link>
            <Link href="https://calendly.com/lodrixoll/30min" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline-primary btn-lg mx-2 my-1 text-white">
                    Chat w/ me<i className="fas fa-external-link-alt" style={{ marginLeft: '4px' }}></i>
                </button>
            </Link>
            <Link href="mailto:lodrixoll@gmail.com" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline-primary btn-lg mx-2 my-1 text-white">
                    Email <i className="fas fa-external-link-alt" style={{ marginLeft: '4px' }}></i>
                </button>
            </Link>
        </div>
    </div>
  );
};

export default Navbar;