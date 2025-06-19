import React, { useEffect, useState } from "react";

import DarkMode from "../UTILS/DarkMode.tsx";
import TitleTag from "../UTILS/TitleTag.tsx";

function BlogHomePage({ darkMode, toggleDarkMode }) {
    TitleTag("Blog | ");
    
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        fetch('/api/hello')
            .then(res => res.json())
            .then(data => setMessage(data.message))
            .catch(err => setMessage('Error Loading Message!'));
    }, []);

    return (
        <div className="relative bg-[#f4f4f9] dark:bg-[#111827] min-h-screen text-black dark:text-white transition-colors duration-300">
            <h1>Blog</h1>
            <p>{message}</p>
            <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
    );
}

export default BlogHomePage;
