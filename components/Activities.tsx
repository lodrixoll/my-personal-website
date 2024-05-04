import React from 'react';
import Image from 'next/image';

const Activities = () => {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">

                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-secondary text-white">
                        <div className="card-body">
                            <h5 className="card-title pb-3" style={{ color: '#007BFF' }}>🛠️ Building AI & ML Solutions</h5>
                            <Image src="/images/icons/openai.png" alt="OpenAI" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src="/images/icons/llama-index.jpeg" alt="LlamaIndex" width={50} height={50} className="img-fluid mx-2 mb-3" style={{ borderRadius: '10%' }}/>
                            <Image src="/images/icons/supabase.png" alt="Supabase" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src="/images/icons/tensorflow.png" alt="TensorFlow" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src="/images/icons/keras.png" alt="Keras" width={50} height={50} className="img-fluid mx-2" style={{ borderRadius: '10%' }}/>
                            <Image src="/images/icons/pytorch.png" alt="PyTorch" width={50} height={50} className="img-fluid mx-2"/>
                            <Image src="/images/icons/opencv.png" alt="OpenCV" width={50} height={50} className="img-fluid mx-2"/>
                            <Image src="/images/icons/python.png" alt="Python" width={50} height={50} className="img-fluid mx-2"/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-secondary text-white">
                        <div className="card-body">
                            <h5 className="card-title pb-3" style={{ color: '#007BFF' }}>🎨 Creating Beautiful & Fast UI</h5>
                            <Image src="/images/icons/figma.png" alt="Figma" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src="/images/icons/bootstrap.png" alt="Bootstrap" width={50} height={50} className="img-fluid mx-2 mb-3" style={{ borderRadius: '10%' }}/>
                            <Image src="/images/icons/tailwind.png" alt="Tailwind" width={50} height={50} className="img-fluid mx-2 mb-3" style={{ borderRadius: '10%' }}/>
                            <Image src="/images/icons/nextjs.png" alt="Next.js" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src="/images/icons/react.png" alt="React" width={50} height={50} className="img-fluid mx-2" style={{ borderRadius: '10%'}}/>
                            <Image src="/images/icons/javascript.png" alt="JavaScript" width={50} height={50} className="img-fluid mx-2" style={{ borderRadius: '10%'}}/>
                            <Image src="/images/icons/css.png" alt="CSS" width={50} height={50} className="img-fluid mx-2"/>
                            <Image src="/images/icons/html.png" alt="HTML" width={50} height={50} className="img-fluid mx-2"/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-secondary text-white">
                        <div className="card-body">
                            <h5 className="card-title pb-3" style={{ color: '#007BFF' }}>💻 Developing Full Stack Apps</h5>
                            <Image src="/images/icons/node.png" alt="Node" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src="/images/icons/express.png" alt="Express" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src="/images/icons/php.png" alt="PHP" width={50} height={50} className="img-fluid mx-2 mb-3" style={{ borderRadius: '10%' }}/>
                            <Image src="/images/icons/laravel.png" alt="Laravel" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src="/images/icons/mysql.png" alt="MySQL" width={50} height={50} className="img-fluid mx-2"/>
                            <Image src="/images/icons/postgresql.webp" alt="PostgreSQL" width={50} height={50} className="img-fluid mx-2"/>
                            <Image src="/images/icons/mongodb.png" alt="MongoDB" width={50} height={50} className="img-fluid mx-2" style={{ borderRadius: '10%' }}/>
                            <Image src="/images/icons/firebase.png" alt="Firebase" width={50} height={50} className="img-fluid mx-2"/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-secondary text-white">
                        <div className="card-body">
                            <h5 className="card-title pb-3" style={{ color: '#007BFF' }}>🚀 Deploying Stuff</h5>
                            <Image src="/images/icons/heroku.jpg" alt="Heroku" width={50} height={50} className="img-fluid mx-2 mb-3" style={{ borderRadius: '10%' }}/>
                            <Image src="/images/icons/docker.webp" alt="Docker" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src="/images/icons/vercel.svg" alt="Vercel" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src="/images/icons/github.png" alt="GitHub" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src="/images/icons/cicd.png" alt="CI/CD" width={50} height={50} className="img-fluid mx-2"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Activities;