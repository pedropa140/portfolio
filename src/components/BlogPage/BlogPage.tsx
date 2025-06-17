import BlogPageNavBar from "../BlogPageComponents/BlogPageNavBar/BlogPageNavBar.tsx";

import DarkMode from "../UTILS/DarkMode.tsx";
import useTitleTag from "../UTILS/useTitleTag.tsx";
import UnderConstruction from "../UTILS/UnderConstruction.tsx";

function BlogPage() {
    useTitleTag("Blog | ");

    return (
        <div className="relative bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
            <BlogPageNavBar />


            <UnderConstruction />
            <DarkMode />
        </div>
    );
}

export default BlogPage;