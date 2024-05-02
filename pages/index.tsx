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
                    <a href="/resume" rel="noopener noreferrer">
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
                    <p className="text-white">AI Enthusiast, Full Stack Developer, and Entrepreneur</p>
                </div>
            </div>
            <div className="row justify-content-center my-5 text-white">
                <div className="col-auto">
                    <h1 className="pb-3">What I am up to</h1>

                    <div className="col-12 pb-5">
                        <h3 className="pb-3">🛠️ Building AI & ML Solutions</h3>
                        <img src="/images/icons/openai.png" alt="OpenAI" className="img-fluid mx-2" data-bs-toggle="tooltip" data-bs-placement="top" title="OpenAI" style={{ width: '75px', height: '75px' }} />
                        <img src="/images/icons/llama-index.jpeg" alt="LlamaIndex" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%' }} />
                        <img src="/images/icons/supabase.png" alt="Supabase" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                        <img src="/images/icons/tensorflow.png" alt="TensorFlow" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                        <img src="/images/icons/keras.png" alt="Keras" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%' }} />
                        <img src="/images/icons/pytorch.png" alt="PyTorch" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                        <img src="/images/icons/opencv.png" alt="OpenCV" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                        <img src="/images/icons/python.png" alt="Python" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                    </div>

                    <div className="col-12 pb-5">
                        <h3 className="pb-3">🎨 Designing Beautiful UIs</h3>
                        <img src="/images/icons/figma.png" alt="Figma" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                        <img src="/images/icons/bootstrap.png" alt="Bootstrap" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%' }} />
                        <img src="/images/icons/tailwind.png" alt="Tailwind" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%' }} />
                        <img src="/images/icons/nextjs.png" alt="Next.js" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                        <img src="/images/icons/react.png" alt="React" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%'}} />
                        <img src="/images/icons/javascript.png" alt="JavaScript" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%'}} />
                        <img src="/images/icons/css.png" alt="CSS" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                        <img src="/images/icons/html.png" alt="HTML" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                    </div>

                    <div className="col-12 pb-5">
                        <h3 className="pb-3">💻 Developing Full Stack Web Apps & Products</h3>
                        <img src="/images/icons/npm.png" alt="NPM" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%' }} />
                        <img src="/images/icons/node.png" alt="Node" className="img-fluid mx-2" style={{ width: '150x', height: '75px'}} />
                        <img src="/images/icons/express.png" alt="Express" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                        <img src="/images/icons/php.png" alt="PHP" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%' }} />
                        <img src="/images/icons/laravel.png" alt="Laravel" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                        <img src="/images/icons/mysql.png" alt="MySQL" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                        <img src="/images/icons/postgresql.webp" alt="PostgreSQL" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                        <img src="/images/icons/mongodb.png" alt="MongoDB" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%' }} />
                        <img src="/images/icons/firebase.png" alt="Firebase" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                    </div>

                    <div className="col-12 pb-5">
                        <h3 className="pb-3">🚀 Putting stuff on the internet</h3>
                        <img src="/images/icons/vercel.svg" alt="Vercel" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%' }} />
                        <img src="/images/icons/heroku.jpg" alt="Heroku" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%' }} />
                        <img src="/images/icons/github.png" alt="GitHub" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%' }} />
                        <img src="/images/icons/docker.webp" alt="Docker" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%' }} />
                        <img src="/images/icons/cicd.png" alt="CI/CD" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;