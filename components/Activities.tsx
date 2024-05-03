import React from 'react';

const Activities = () => {
    return (
        <div className="container my-5">
            <h1 className="pb-5 text-center text-white">What I am up to...</h1>
            <div className="row justify-content-center">
                {/* Card for Building AI & ML Solutions */}
                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <h3 className="card-title pb-3">🛠️ Building AI & ML Solutions</h3>
                            <img src="/images/icons/openai.png" alt="OpenAI" className="img-fluid mx-2" data-bs-toggle="tooltip" data-bs-placement="top" title="OpenAI" style={{ width: '75px', height: '75px' }} />
                            <img src="/images/icons/llama-index.jpeg" alt="LlamaIndex" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%' }} />
                            <img src="/images/icons/supabase.png" alt="Supabase" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                            <img src="/images/icons/tensorflow.png" alt="TensorFlow" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                            <img src="/images/icons/keras.png" alt="Keras" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%' }} />
                            <img src="/images/icons/pytorch.png" alt="PyTorch" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                            <img src="/images/icons/opencv.png" alt="OpenCV" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                            <img src="/images/icons/python.png" alt="Python" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                        </div>
                    </div>
                </div>

                {/* Card for Creating Beautiful & Fast UI */}
                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <h3 className="card-title pb-3">🎨 Creating Beautiful & Fast UI</h3>
                            <img src="/images/icons/figma.png" alt="Figma" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                            <img src="/images/icons/bootstrap.png" alt="Bootstrap" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%' }} />
                            <img src="/images/icons/tailwind.png" alt="Tailwind" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%' }} />
                            <img src="/images/icons/nextjs.png" alt="Next.js" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                            <img src="/images/icons/react.png" alt="React" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%'}} />
                            <img src="/images/icons/javascript.png" alt="JavaScript" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%'}} />
                            <img src="/images/icons/css.png" alt="CSS" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                            <img src="/images/icons/html.png" alt="HTML" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                        </div>
                    </div>
                </div>

                {/* Card for Developing Full Stack Web Apps & Products */}
                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <h3 className="card-title pb-3">💻 Developing Full Stack Web Apps & Products</h3>
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
                    </div>
                </div>

                {/* Card for Deploying Stuff on the Internet */}
                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <h3 className="card-title pb-3">🚀 Deploying Stuff on the Internet</h3>
                            <img src="/images/icons/heroku.jpg" alt="Heroku" className="img-fluid mx-2" style={{ width: '75px', height: '75px', borderRadius: '10%' }} />
                            <img src="/images/icons/docker.webp" alt="Docker" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                            <img src="/images/icons/vercel.svg" alt="Vercel" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                            <img src="/images/icons/github.png" alt="GitHub" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                            <img src="/images/icons/cicd.png" alt="CI/CD" className="img-fluid mx-2" style={{ width: '75px', height: '75px'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;