import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Icons from '../public/images/icons/index';
import Link from 'next/link';

const Projects = () => {
    const projects = [
        { id: 1, icons: [Icons.docdoc, Icons.openai, Icons.vercel, Icons.nextjs, Icons.typescript, Icons.bootstrap], title: 'docdoc', description: 'Technical documentation comprehension.', link: 'https://doc-doc.vercel.app/' },
        { id: 2, icons: [Icons.aitc, Icons.openai, Icons.mongodb, Icons.express, Icons.reactIcon, Icons.node, Icons.tailwind], title: 'AITC', description: 'Real estate contract compliance.', link: 'https://github.com/lodrixoll/AITC-Server' },
        { id: 3, icons: [Icons.trustloop, Icons.laravel, Icons.php, Icons.mysql, Icons.bootstrap], title: 'TrustLoop', description: 'Reputation management built for SaaS.', link: 'https://www.trustloop.co/' },
        { id: 4, icons: [Icons.recall, Icons.openai, Icons.mongodb, Icons.express, Icons.reactIcon, Icons.node], title: 'Recall', description: 'Revisit any conversation.', link: 'https://www.recall-app.xyz/' },
        { id: 5, icons: [Icons.favicon, Icons.vercel, Icons.nextjs, Icons.typescript, Icons.bootstrap], title: 'my-personal-website', description: 'This website. Feel free to clone it.', link: 'https://github.com/lodrixoll/my-personal-website' },
        { id: 6, icons: [Icons.zy, Icons.laravel, Icons.php, Icons.mysql, Icons.reactIcon], title: 'ZY', description: 'Dropship any Amazon product on your store.', link: 'https://apps.shopify.com/amazon-post-purchase-upsell' },
        { id: 7, icons: [Icons.copyninja, Icons.openai, Icons.postgresql, Icons.reactIcon, Icons.node, ], title: 'CopyNinja', description: 'Smart SEO content generation for ecommerce.', link: 'https://apps.shopify.com/copyninja' },
        { id: 8, icons: [Icons.firetexts, Icons.openai, Icons.node, Icons.flutter, Icons.firebase], title: 'FireTexts', description: 'Automated SMS messaging.', link: 'https://www.firetexts.co/' },
        { id: 9, icons: [Icons.python, Icons.tensorflow, Icons.keras], title: 'From Classification to Semantics', description: 'A comprehensive review of CNNs.', link: 'https://github.com/lodrixoll/classification-to-semantics' },
        { id: 10, icons: [Icons.python], title: 'N-gram Language Model', description: 'Made from scratch in python.', link: 'https://github.com/lodrixoll/ngram-language-model' },
        { id: 11, icons: [Icons.python], title: 'Sequence Labeling', description: 'Named entity recognition in python.', link: 'https://github.com/lodrixoll/sequence-labeling' }
    ];

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-auto">
                        <Image src={Icons.webDevelopment} alt="web development" width={100} height={100}/>
                    </div>
                    <h1 className="text-white">Projects</h1>
                </div>
                <div className="row mt-5">
                    {projects.map(project => (
                        <div className="col-md-6 mb-4" key={project.id}>
                            <div className="card bg-secondary text-white h-100 project-card">
                                <div className="d-flex">
                                    <Image src={project.icons[0]} alt={project.title} width={100} height={100} className="my-auto" style={{marginLeft: '20px', borderRadius: '10%'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title mt-2" style={{ color: '#007BFF' }}>{project.title}</h5>
                                        <p className="card-text">{project.description}</p>
                                        <div className="d-flex justify-content-start align-items-center mb-2">
                                            {project.icons.length > 1 && (
                                                <>
                                                    <p className="mr-2 my-auto">Tech Stack:</p>
                                                    {project.icons.slice(1).map((icon, index) => (
                                                        <Image key={index} src={icon} alt={`${project.title} technology`} width={30} height={30} className="img-fluid mx-2" style={{borderRadius: '10%'}}/>
                                                    ))}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="card-overlay">
                                    <Link href={project.link} target="_blank">
                                        <button className="btn btn-primary project-button">View Project</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;