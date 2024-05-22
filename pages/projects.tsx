import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Icons from '../public/images/icons/index';
import Link from 'next/link';

const Projects = () => {
    const projects = [
        { id: 1, icon: Icons.docdoc, stack: ['OpenAI', 'TypeScript', 'Bootstrap', 'Next.js', 'Vercel'], title: 'docdoc', description: 'Technical documentation comprehension.', link: 'https://doc-doc.vercel.app/' },
        { id: 2, icon: Icons.aitc, stack: ['OpenAI', 'MERN', 'Tailwind CSS', 'Vercel'], title: 'AITC', description: 'Real estate contract compliance.', link: 'https://github.com/lodrixoll/AITC-Server' },
        { id: 3, icon: Icons.trustloop, stack: ['OpenAI', 'Laravel PHP', 'MySQL', 'Bootstrap'], title: 'TrustLoop', description: 'Reputation management built for SaaS.', link: 'https://www.trustloop.co/' },
        { id: 4, icon: Icons.recall, stack: ['OpenAI', 'MERN', 'Heroku'], title: 'Recall', description: 'Revisit any conversation.', link: 'https://www.recall-app.xyz/' },
        { id: 5, icon: Icons.favicon, stack: ['TypeScript', 'Bootstrap', 'Next.js', 'Vercel'], title: 'my-personal-website', description: 'This website. Feel free to clone it.', link: 'https://github.com/lodrixoll/my-personal-website' },
        { id: 6, icon: Icons.zy, stack: ['Laravel PHP', 'MySQL', 'React', 'Heroku'], title: 'ZY', description: 'Dropship any Amazon product on your store.', link: 'https://apps.shopify.com/amazon-post-purchase-upsell' },
        { id: 7, icon: Icons.copyninja, stack: ['OpenAI', 'Node.js', 'PostgreSQL', 'React', 'Heroku'], title: 'CopyNinja', description: 'Smart SEO content generation for ecommerce.', link: 'https://apps.shopify.com/copyninja' },
        { id: 8, icon: Icons.firetexts, stack: ['OpenAI', 'Node.js', 'Heroku', 'Flutter', 'Firebase'], title: 'FireTexts', description: 'Automated SMS messaging.', link: 'https://www.firetexts.co/' },
        { id: 9, icon: Icons.tensorflow, stack: ['Python', 'TensorFlow', 'Keras'], title: 'From Classification to Semantics', description: 'A comprehensive review of CNNs.', link: 'https://github.com/lodrixoll/classification-to-semantics' },
        { id: 10, icon: Icons.python, stack: ['Python'], title: 'N-gram Language Model', description: 'Made from scratch in python.', link: 'https://github.com/lodrixoll/ngram-language-model' },
        { id: 11, icon: Icons.python, stack: ['Python'], title: 'Sequence Labeling', description: 'Named entity recognition in python.', link: 'https://github.com/lodrixoll/sequence-labeling' }
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
                                    <Image src={project.icon} alt={project.title} width={100} height={100} className="my-auto" style={{marginLeft: '20px', borderRadius: '10%'}}/>
                                    <div className="card-body">
                                        <h4 className="card-title mt-2" style={{ color: '#007BFF' }}>{project.title}</h4>
                                        <p className="card-text">{project.description}</p>
                                        <div className="d-flex justify-content-start align-items-center mb-2">
                                            {project.stack.length > 0 && (
                                                <>
                                                    {project.stack.map((tech, index) => (
                                                        <span key={index} className="badge badge-primary" style={{ marginInlineEnd: '0.5rem'}}>{tech}</span>
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