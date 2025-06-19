import { Link } from "react-router-dom";

import DarkMode from "../UTILS/DarkMode.tsx";
import TitleTag from "../UTILS/TitleTag.tsx";

function ErrorPageNotFound({ darkMode, toggleDarkMode }) {
    TitleTag("Page Not Found | ");

    return (
        <div className="relative bg-[#f4f4f9] dark:bg-[#111827] text-black dark:text-white transition-colors duration-300 min-h-screen flex flex-col items-center justify-center px-4">
            <div className="flex flex-col items-center space-y-6 mt-10 max-w-xl text-center">
                <div className="text-6xl animate-bounce">🚫</div>
                <h1 className="text-4xl font-bold text-[#f09a36]">404 - Page Not Found</h1>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                    The page you're looking for doesn't exist or might have been moved.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:justify-center">
                    <Link
                        to="/"
                        className="flex-1 text-center text-sm font-medium text-white bg-[#f09a36] hover:bg-[#d8882f] px-6 py-3 rounded-lg transition"
                    >
                        Visit Porfolio
                    </Link>
                </div>
            </div>

            <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
    );
}

export default ErrorPageNotFound;
