import React from 'react';
import Image from 'next/image';
import Icons from '../public/images/icons/index';

const Activities = () => {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">

                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-secondary text-white h-100">
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: '#007BFF' }}>Building AI based Micro SaaS 🛠️</h5>
                            <div className="d-flex">
                                <Image src={Icons.openai} alt="OpenAI" width={50} height={50} className="img-fluid" style={{ borderRadius: '10%', marginInlineEnd: '1rem' }}/>
                                <p className="card-text">
                                    I'm learning how to use OpenAI, HuggingFace, LlamaIndex, TypeScript, BootStrap, Next.js 
                                    and Vercel to build AI based micro SaaS quickly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-secondary text-white h-100">
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: '#007BFF' }}>Developing Full Stack Apps 💻</h5>
                            <div className="d-flex">
                                <Image src={Icons.laravel} alt="Laravel" width={50} height={50} className="img-fluid" style={{ marginInlineEnd: '1rem'}}/>
                                <p className="card-text">
                                    I work for a SaaS company
                                    <a href="https://trustloop.co" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}> TrustLoop </a> 
                                    that creates reputation management software for other SaaS & small businesses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-secondary text-white h-100">
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: '#007BFF' }}>Creating Beautiful & Fast UI 🎨</h5>
                            <div className="d-flex">
                                <Image src={Icons.figma} alt="Figma" width={50} height={50} className="img-fluid" style={{ marginInlineEnd: '1rem'}}/>
                                <p className="card-text">
                                    I have a passion for connecting complicated backend to visually pleasing and responsive designs
                                    so I have been learning Figma, TailwindCSS and BootStrap.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-secondary text-white h-100">
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: '#007BFF' }}>Putting Stuff on the Internet 🚀</h5>
                            <div className="d-flex">
                                <Image src={Icons.vercel} alt="Vercel" width={50} height={50} className="img-fluid" style={{ marginInlineEnd: '1rem'}}/>
                                <p className="card-text">
                                    I am trying to deploy lots of projects this year with Vercel & Heroku. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-secondary text-white h-100">
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: '#007BFF' }}>Trying to Win my First Hackathon 🥇</h5>
                            <div className="d-flex">
                                <Image src={Icons.nextjs} alt="Vercel" width={50} height={50} className="img-fluid" style={{ marginInlineEnd: '1rem'}}/>
                                <p className="card-text">
                                    So far have gotten 2nd place and two honorable mentions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-secondary text-white h-100">
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: '#007BFF' }}>Creating Content</h5>
                            <div className="d-flex">
                                <Image src={Icons.youtube} alt="Vercel" width={75} height={50} className="img-fluid" style={{ marginInlineEnd: '1rem'}}/>
                                <p className="card-text">
                                    Check out this <a href="https://www.youtube.com/shorts/MZzLnjrhc0Y" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>mini-documentary</a> about a Recall, a project I made at a hackathon.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Activities;