import { useState } from "react";

type Project = {
    title: string;
    description: string;
    fullDescription: string;
    imageUrl: string;
    liveLink: string;
    githubLink: string;
    dateMade: string;
    technologies: string[];
};

const projects: Project[] = [
    {
        title: "BeReal-Bot",
        description: "BeReal-Bot prompts you once daily to share a spontaneous, unfiltered photo of your current moment.",
        fullDescription:
            "BeReal-Bot is designed to capture authentic moments, just like the BeReal app. Every day, at a random time, you’ll be prompted to share a photo that showcases your true self—no filters, no edits. How It Works | Random Moment: You’ll receive a notification at a surprise time. Snap a Pic: You’ll have 2 minutes to take a photo of what you’re doing right at that moment. It’s all about being real! Share & Connect: After you snap your pic, you can share them with friends and see their moments too. Let’s keep it genuine!",
        imageUrl: "./components/HomePageProjects/bereal-bot.png",
        liveLink: "https://discord.com/oauth2/authorize?client_id=1261134025955868775&permissions=1689934340029504&integration_type=0&scope=bot",
        githubLink: "https://github.com/pedropa140/bereal-bot",
        dateMade: "July 2024",
        technologies: ["Python", "Discord API", "SQL"]
    },
    {
        title: "FaceDigitClassification",
        description: "",
        fullDescription:
            "This project is based on the one created by Dan Klein and John DeNero that was given as part of the programming assignments of Berkeley’s CS188 course. In this project, you will design three classifiers: a naive Bayes classifier, a perceptron classifier and a classifier of your choice. You will test your classifiers on two image data sets: a set of scanned handwritten digit images and a set of face images in which edges have already been detected. Even with simple features, your classifiers will be able to do quite well on these tasks when given enough training data. Optical character recognition (OCR) is the task of extracting text from image sources. The first data set on which you will run your classifiers is a collection of handwritten numerical digits (0-9). This is a very commercially useful technology, similar to the technique used by the US post office to route mail by zip codes. There are systems that can perform with over 99% classification accuracy (see LeNet-5 for an example system in action). Face detection is the task of localizing faces within video or still images. The faces can be at any location and vary in size. There are many applications for face detection, including human computer interaction and surveillance. You will attempt a simplified face detection task in which your system is presented with an image that has been pre-processed by an edge detection algorithm. The task is to determine whether the edge image is a face or not. Please refer to http://inst.eecs.berkeley.edu/~cs188/sp11/projects/classification/classification.html for a brief description of the Perceptron and Naive Bayes classifiers.",
        imageUrl: "",
        liveLink: "",
        githubLink: "https://github.com/pedropa140/FaceDigitClassification",
        dateMade: "May 2023",
        technologies: ["Python"]
    },
    {
        title: "",
        description: "",
        fullDescription:
            "",
        imageUrl: "",
        liveLink: "",
        githubLink: "",
        dateMade: "",
        technologies: [""]
    }
];

const HomePageProjects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div
            id="projects"
            className="bg-[#f4f4f9] dark:bg-[#111827] text-gray-800 dark:text-white h-auto pt-14 pb-14 px-4 sm:px-6 md:px-10 lg:px-14 transition-colors duration-300"
        >
            <div className="w-full m-auto pt-3">
                <h2 className="w-full md:w-[75%] m-auto text-xl md:text-3xl lg:text-[35px] text-[#f09a36] text-center font-bold border-b-[3px] border-[#f09a36] pb-2">
                    PROJECTS
                </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-[#1f2937] border-l-4 border-[#f09a36] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 flex flex-col"
                    >
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-44 sm:h-48 object-cover"
                        />
                        <div className="p-4 sm:p-5 flex flex-col flex-1">
                            <h3 className="text-lg sm:text-xl font-semibold text-[#f09a36] mb-2">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 leading-relaxed line-clamp-3">
                                {project.description}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                                <strong>Date:</strong> {project.dateMade}
                            </p>
                            <div className="mb-3 flex items-center">
                                <strong className="text-xs text-gray-500 dark:text-gray-400">Technologies:</strong>
                                <div className="mt-1 flex flex-wrap gap-1 ml-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-bold px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-[#f09a36] hover:text-white transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                >
                                    Read More
                                </button>
                                <div className="flex flex-wrap gap-2">
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-white bg-[#f09a36] px-4 py-2 rounded-lg hover:bg-[#d17f1d] font-bold"
                                        >
                                            View
                                        </a>
                                    )}
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-[#f09a36] border border-[#f09a36] px-4 py-2 rounded-lg hover:bg-[#f09a36] hover:text-white font-bold"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2 sm:p-4 ml-auto mr-auto z-[101]">
                    <div className="relative bg-white dark:bg-[#1f2937] border-l-[6px] border-[#f09a36] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-4 sm:p-6 animate-modalOpen">

                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold"
                            aria-label="Close"
                        >
                            &times;
                        </button>

                        <div className="w-full h-48 sm:h-64 overflow-hidden rounded-xl mb-5 mt-7">
                            <img
                                src={selectedProject.imageUrl}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f09a36] mb-3 tracking-tight">
                            {selectedProject.title}
                        </h3>

                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-4">
                            <p>
                                <strong>Date:</strong> {selectedProject.dateMade}
                            </p>
                            <p>
                                <strong>Technologies:</strong> {selectedProject.technologies.join(", ")}
                            </p>
                        </div>

                        <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
                            {selectedProject.fullDescription}
                        </p>

                        <div className="flex flex-col sm:flex-row justify-end gap-3">
                            {selectedProject.liveLink && (
                                <a
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2 text-sm font-semibold text-white bg-[#f09a36] rounded-lg hover:bg-[#d17f1d] transition"
                                >
                                    View Page
                                </a>
                            )}
                            {selectedProject.githubLink && (
                                <a
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2 text-sm font-semibold text-[#f09a36] border border-[#f09a36] rounded-lg hover:bg-[#f09a36] hover:text-white transition"
                                >
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>

                    <style>
                        {`
                            @keyframes modalOpen {
                                0% {
                                    opacity: 0;
                                    transform: scale(0.95);
                                }
                                100% {
                                    opacity: 1;
                                    transform: scale(1);
                                }
                            }
                            .animate-modalOpen {
                                animation: modalOpen 0.25s ease-out forwards;
                            }
                        `}
                    </style>
                </div>
            )}

        </div>
    );
};

export default HomePageProjects;
