import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const Resume: React.FC = () => {
    const resumePdf = '/files/liam-odriscoll-resume.pdf';

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="d-flex justify-content-end align-items-center my-4">
                    <a href={resumePdf} download="liam-odriscoll-resume.pdf" className="btn btn-primary">
                        Download
                    </a>
                </div>
                <div className="card bg-secondary">
                    <div className="card-body">
                        <div className="pdf-viewer">
                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                                <Viewer fileUrl={resumePdf} />
                            </Worker>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resume;