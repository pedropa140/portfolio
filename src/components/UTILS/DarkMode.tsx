function DarkMode({ darkMode, toggleDarkMode }) {
    return (
        <button
            onClick={toggleDarkMode}
            className="fixed bottom-6 left-6 z-50 p-3 rounded-full shadow-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition text-xl"
        >
            {darkMode ? "🌞" : "🌙"}
        </button>
    );
}

export default DarkMode;
