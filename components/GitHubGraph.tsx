import React, { useEffect } from 'react';

const GitHubGraph: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "http://lengthylyova.pythonanywhere.com/static/gh-contrib-graph/gh.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="gh" data-login="lodrixoll" className="mx-auto mt-5"></div>
    );
};

export default GitHubGraph;