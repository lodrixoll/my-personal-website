import React from 'react';
import Image from 'next/image';
import openai from '../public/images/icons/openai.png';
import llamaIndex from '../public/images/icons/llama-index.jpeg';
import supabase from '../public/images/icons/supabase.png';
import tensorflow from '../public/images/icons/tensorflow.png';
import keras from '../public/images/icons/keras.png';
import pytorch from '../public/images/icons/pytorch.png';
import opencv from '../public/images/icons/opencv.png';
import python from '../public/images/icons/python.png';
import figma from '../public/images/icons/figma.png';
import bootstrap from '../public/images/icons/bootstrap.png';
import tailwind from '../public/images/icons/tailwind.png';
import nextjs from '../public/images/icons/nextjs.png';
import reactIcon from '../public/images/icons/react.png';
import javascript from '../public/images/icons/javascript.png';
import css from '../public/images/icons/css.png';
import html from '../public/images/icons/html.png';
import node from '../public/images/icons/node.png';
import express from '../public/images/icons/express.png';
import php from '../public/images/icons/php.png';
import laravel from '../public/images/icons/laravel.png';
import mysql from '../public/images/icons/mysql.png';
import postgresql from '../public/images/icons/postgresql.webp';
import mongodb from '../public/images/icons/mongodb.png';
import firebase from '../public/images/icons/firebase.png';
import heroku from '../public/images/icons/heroku.jpg';
import docker from '../public/images/icons/docker.webp';
import vercel from '../public/images/icons/vercel.svg';
import github from '../public/images/icons/github.png';
import cicd from '../public/images/icons/cicd.png';

const Activities = () => {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">

                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-secondary text-white">
                        <div className="card-body">
                            <h5 className="card-title pb-3" style={{ color: '#007BFF' }}>🛠️ Building AI & ML Solutions</h5>
                            <Image src={openai} alt="OpenAI" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={llamaIndex} alt="LlamaIndex" width={50} height={50} className="img-fluid mx-2 mb-3" style={{ borderRadius: '10%' }}/>
                            <Image src={supabase} alt="Supabase" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={tensorflow} alt="TensorFlow" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={keras} alt="Keras" width={50} height={50} className="img-fluid mx-2" style={{ borderRadius: '10%' }}/>
                            <Image src={pytorch} alt="PyTorch" width={50} height={50} className="img-fluid mx-2"/>
                            <Image src={opencv} alt="OpenCV" width={50} height={50} className="img-fluid mx-2"/>
                            <Image src={python} alt="Python" width={50} height={50} className="img-fluid mx-2"/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-secondary text-white">
                        <div className="card-body">
                            <h5 className="card-title pb-3" style={{ color: '#007BFF' }}>🎨 Creating Beautiful & Fast UI</h5>
                            <Image src={figma} alt="Figma" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={bootstrap} alt="Bootstrap" width={50} height={50} className="img-fluid mx-2 mb-3" style={{ borderRadius: '10%' }}/>
                            <Image src={tailwind} alt="Tailwind" width={50} height={50} className="img-fluid mx-2 mb-3" style={{ borderRadius: '10%' }}/>
                            <Image src={nextjs} alt="Next.js" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={reactIcon} alt="React" width={50} height={50} className="img-fluid mx-2" style={{ borderRadius: '10%'}}/>
                            <Image src={javascript} alt="JavaScript" width={50} height={50} className="img-fluid mx-2" style={{ borderRadius: '10%'}}/>
                            <Image src={css} alt="CSS" width={50} height={50} className="img-fluid mx-2"/>
                            <Image src={html} alt="HTML" width={50} height={50} className="img-fluid mx-2"/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-secondary text-white">
                        <div className="card-body">
                            <h5 className="card-title pb-3" style={{ color: '#007BFF' }}>💻 Developing Full Stack Apps</h5>
                            <Image src={node} alt="Node" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={express} alt="Express" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={php} alt="PHP" width={50} height={50} className="img-fluid mx-2 mb-3" style={{ borderRadius: '10%' }}/>
                            <Image src={laravel} alt="Laravel" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={mysql} alt="MySQL" width={50} height={50} className="img-fluid mx-2"/>
                            <Image src={postgresql} alt="PostgreSQL" width={50} height={50} className="img-fluid mx-2"/>
                            <Image src={mongodb} alt="MongoDB" width={50} height={50} className="img-fluid mx-2" style={{ borderRadius: '10%' }}/>
                            <Image src={firebase} alt="Firebase" width={50} height={50} className="img-fluid mx-2"/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 mb-4">
                    <div className="card bg-secondary text-white">
                        <div className="card-body">
                            <h5 className="card-title pb-3" style={{ color: '#007BFF' }}>🚀 Deploying Stuff</h5>
                            <Image src={heroku} alt="Heroku" width={50} height={50} className="img-fluid mx-2 mb-3" style={{ borderRadius: '10%' }}/>
                            <Image src={docker} alt="Docker" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={vercel} alt="Vercel" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={github} alt="GitHub" width={50} height={50} className="img-fluid mx-2 mb-3"/>
                            <Image src={cicd} alt="CI/CD" width={50} height={50} className="img-fluid mx-2"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Activities;