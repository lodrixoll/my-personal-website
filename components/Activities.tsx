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
                            <h5 className="card-title pb-3" style={{ color: '#007BFF' }}>🛠️ Building AI & ML Solutions</h5>
                            <Image src={Icons.openai} alt="OpenAI" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={Icons.llamaIndex} alt="LlamaIndex" width={50} height={50} className="img-fluid mx-2 mb-3" style={{ borderRadius: '10%' }}/>
                            <Image src={Icons.tensorflow} alt="TensorFlow" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={Icons.keras} alt="Keras" width={50} height={50} className="img-fluid mx-2 mb-3" style={{ borderRadius: '10%' }}/>
                            <Image src={Icons.supabase} alt="Supabase" width={50} height={50} className="img-fluid mx-2"/>
                            <Image src={Icons.python} alt="Python" width={50} height={50} className="img-fluid mx-2"/>
                            <Image src={Icons.pytorch} alt="PyTorch" width={50} height={50} className="img-fluid mx-2"/>
                            <Image src={Icons.opencv} alt="OpenCV" width={50} height={50} className="img-fluid mx-2"/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-secondary text-white h-100">
                        <div className="card-body">
                            <h5 className="card-title pb-3" style={{ color: '#007BFF' }}>💻 Developing Full Stack Apps</h5>
                            <Image src={Icons.node} alt="Node" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={Icons.mongodb} alt="MongoDB" width={50} height={50} className="img-fluid mx-2 mb-3" style={{ borderRadius: '10%' }}/>
                            <Image src={Icons.mysql} alt="MySQL" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={Icons.laravel} alt="Laravel" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={Icons.express} alt="Express" width={50} height={50} className="img-fluid mx-2"/>
                            <Image src={Icons.firebase} alt="Firebase" width={50} height={50} className="img-fluid mx-2"/>
                            <Image src={Icons.postgresql} alt="PostgreSQL" width={50} height={50} className="img-fluid mx-2"/>
                            <Image src={Icons.php} alt="PHP" width={50} height={50} className="img-fluid mx-2" style={{ borderRadius: '10%' }}/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-secondary text-white h-100">
                        <div className="card-body">
                            <h5 className="card-title pb-3" style={{ color: '#007BFF' }}>🎨 Creating Beautiful & Fast UI</h5>
                            <Image src={Icons.nextjs} alt="Next.js" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={Icons.reactIcon} alt="React" width={50} height={50} className="img-fluid mx-2 mb-3" style={{ borderRadius: '10%'}}/>
                            <Image src={Icons.typescript} alt="TypeScript" width={50} height={50} className="img-fluid mx-2 mb-3" style={{ borderRadius: '10%' }}/>
                            <Image src={Icons.javascript} alt="JavaScript" width={50} height={50} className="img-fluid mx-2 mb-3" style={{ borderRadius: '10%'}}/>
                            <Image src={Icons.figma} alt="Figma" width={50} height={50} className="img-fluid mx-2"/>
                            <Image src={Icons.tailwind} alt="Tailwind" width={50} height={50} className="img-fluid mx-2" style={{ borderRadius: '10%' }}/>
                            <Image src={Icons.bootstrap} alt="Bootstrap" width={50} height={50} className="img-fluid mx-2" style={{ borderRadius: '10%' }}/>
                            
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-secondary text-white h-100">
                        <div className="card-body">
                            <h5 className="card-title pb-3" style={{ color: '#007BFF' }}>🚀 Deploying Stuff</h5>
                            <Image src={Icons.heroku} alt="Heroku" width={50} height={50} className="img-fluid mx-2 mb-3" style={{ borderRadius: '10%' }}/>
                            <Image src={Icons.docker} alt="Docker" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={Icons.vercel} alt="Vercel" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={Icons.github} alt="GitHub" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Activities;