function UnderConstruction() {
    return (
        <div className="relative bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 min-h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col items-center space-y-4 mt-10">
                <div className="text-5xl animate-bounce">🛠️</div>
                <h1 className="text-3xl font-semibold">Under Construction</h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Please check back soon!
                </p>
            </div>
        </div>
    );
}

export default UnderConstruction;