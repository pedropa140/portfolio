import { Link } from "react-router-dom";

import TitleTag from "./TitleTag.tsx";
import DarkMode from "./DarkMode.tsx";

function UnderConstruction({ darkMode, toggleDarkMode }) {
    TitleTag("Page Under Construction | ")

    return (
        <div className="relative bg-[#f4f4f9] dark:bg-[#111827] text-black dark:text-white transition-colors duration-300 min-h-screen flex flex-col items-center justify-center px-4">
            <div className="flex flex-col items-center space-y-6 mt-10 max-w-xl text-center">
                <div className="text-5xl animate-bounce">🛠️</div>
                <h1 className="text-3xl font-semibold">Under Construction</h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Please check back soon!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:justify-center">
                    <Link
                        to="/"
                        className="text-center text-sm font-medium text-white bg-[#f09a36] hover:bg-[#d8882f] px-6 py-3 rounded-lg transition"
                    >
                        Visit Portfolio
                    </Link>
                    <Link
                        to="/blog"
                        className="text-center text-sm font-medium text-white bg-[#f09a36] hover:bg-[#d8882f] px-6 py-3 rounded-lg transition"
                    >
                        Visit Blog
                    </Link>
                </div>

            </div>

            <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
    );
}

export default UnderConstruction;