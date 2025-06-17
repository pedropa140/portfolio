import React, { useState } from "react";
import { FaGithub, FaTrophy } from "react-icons/fa";

const hackathons = [
    {
        projectName: "PEEK Student",
        projectSlogan: "Peer Educational Exchange Kit",
        hackathonName: "DragonHacks 2024",
        date: "April 13, 2024 - April 14, 2024",
        github: "https://github.com/koolkusum/DragonHacks2024",
        devpost: "https://devpost.com/software/peek-student",
        award: "Winner",
        prizeCategory: ["Sauce Labs Raffle"],
        description: `Peek Student is an AI-powered academic platform that helps students choose professors, manage tasks, and study smarter. Key features include a RateMyProfessor-style recommender, PDF summarizer synced to Google Docs, task planner integrated with Google Calendar, a Gemini AI chatbot for educational queries, and a Discord bot for scheduling. Built with Flask, MongoDB, Gemini AI, and Google APIs.`,
    },
    {
        projectName: "NewLeaf",
        projectSlogan: "Comprehensive education platform redefining learning. Experience seamless integration of a chatbot, smart scheduler, and a suite of innovative tools, all crafted to elevate your educational journey.",
        hackathonName: "HackPrinceton Spring 2024",
        date: "March 29, 2024 - March 31, 2024",
        github: "https://github.com/koolkusum/HackPrincetonS2024",
        devpost: "https://devpost.com/software/newleaf",
        award: "Winner",
        prizeCategory: ["Most Creative Adobe Express Add-On"],
        description: "NewLeaf is a comprehensive platform that integrates an AI academic chatbot, smart schedule maker, PDF summarizer, and computer vision hand-tracking canvas to enhance student productivity and learning. Built with Flask, HTML, CSS, and JavaScript, it combines multiple tools into one easy-to-use application. Despite challenges with API integration and performance, our team delivered a polished, multifunctional solution while gaining valuable experience in web development and collaboration.",
    },
    {
        projectName: "Green Habits",
        projectSlogan: "Let's aim to push back climate change (CC). Pick up some Green Habits by learning more about your carbon footprint, sustainable practices, and organized CC event.",
        hackathonName: "HackRU Spring 2024",
        date: "March 23, 2024 – March 24, 2024",
        github: "https://github.com/pedropa140/HACKRU2024",
        devpost: "https://devpost.com/software/green-habits",
        award: "Winner",
        prizeCategory: ["Social Good Track", "Best University Sustainability Hack", "[MLH] Best Use of Auth0"],
        description: "Green Habits is a sustainability-focused platform that aggregates climate-related events, features a Discord bot for managing eco-friendly tasks, and includes a Carbon Footprint calculator to raise awareness about individual impact. Built with Python Flask, Bootstrap, Cloudflare AI, and Google Calendar API, it helps users stay organized and engaged in sustainable activities. Despite challenges with web scraping and AI integration, we successfully created an effective task planner and interactive bot to support climate action efforts.",
    },
    {
        projectName: "DRC - Empowering Innovations",
        projectSlogan: "Imagine a platform where women's empowerment meets professional development seamlessly. With our scheduler, chatbot, and networking features, thrive in our supportive community tailored for success.",
        hackathonName: "Rutgers IEEE Hackathon 2024",
        date: "February 24, 2024 – February 25, 2024",
        github: "https://github.com/pedropa140/RutgersIEEE2024",
        devpost: "https://ieee-hackathon-2024.devpost.com/",
        award: "Winner",
        prizeCategory: ["Douglass Residential College", "Fan Favorite"],
        description: "Four teammates came together to build a platform that empowers women in STEM by fostering community and providing helpful tools. The app enables users to connect via email, chat with other women, interact with Google's Gemini AI for scheduling and STEM-related questions, and discover women-focused events to add to their calendar. Despite technical setup challenges and a debugging issue with form submission, the team overcame obstacles through collaboration and persistence.",
    },
    {
        projectName: "BalancSync",
        projectSlogan: "Schedule your life easily using AI to generate a schedule for you!",
        hackathonName: "HackHERS 2024",
        date: "Febraury 10, 2024 - February 11, 2024",
        github: "https://github.com/koolkusum/HackHers-2024",
        devpost: "https://devpost.com/software/balancsync",
        award: "Winner",
        prizeCategory: ["Best Use of AI"],
        description: "BalanSync is an AI-powered productivity app that helps users optimize their daily schedules by aligning tasks with their peak productivity times, using Gemini AI and the Google Calendar API. Built with Flask, SQLite3, and a user-friendly frontend, the app also provides tips to prevent burnout and promote work-life balance. Throughout development, the team overcame API integration challenges and gained experience with new tools like Flask, Bootstrap, and AI-based scheduling.",
    },
];

const DESCRIPTION_LIMIT = 150;

const HomePageHackathons = () => {
    const [modalOpen, setModalOpen] = useState(false);
    type Hackathon = {
        projectName: string;
        projectSlogan: string;
        hackathonName: string;
        date: string;
        github: string;
        devpost: string;
        award: string;
        prizeCategory: string[];
        description: string;
    };

    const [modalContent, setModalContent] = useState<Hackathon | null>(null);

    const openModal = (fullDescription) => {
        setModalContent(fullDescription);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalContent(null);
    };
    return (
        <div
            id="hackathons"
            className="bg-[#f4f4f9] dark:bg-[#111827] text-gray-800 dark:text-white h-auto pt-14 px-4 md:px-14 transition-colors duration-300"
        >
            <div className="w-full m-auto pt-3">
                <h2 className="w-full md:w-[75%] m-auto text-xl md:text-3xl lg:text-[35px] text-[#f09a36] text-center font-bold border-b-[3px] border-solid border-b-[#f09a36] pb-2">
                    HACKATHONS
                </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {hackathons.map(({ projectName, projectSlogan, hackathonName, date, github, devpost, award, prizeCategory, description }, index) => {
                    const isLongDescription = description && description.length > DESCRIPTION_LIMIT;
                    const truncatedDescription = isLongDescription
                        ? description.slice(0, DESCRIPTION_LIMIT) + "..."
                        : description;

                    return (
                        <div
                            key={index}
                            className="bg-white dark:bg-[#1f2937] shadow-lg rounded-2xl p-6 border-l-4 border-[#f09a36] transition-all flex flex-col justify-between min-h-[320px]"
                        >
                            <div>
                                <div className="flex items-start mb-3">
                                    {award === "Winner" && (
                                        <FaTrophy
                                            className="text-yellow-400 h-12 w-12 flex-shrink-0 mr-3"
                                            title="Winner"
                                            aria-label="Winner Trophy"
                                        />
                                    )}
                                    <div className="flex flex-col leading-tight">
                                        <span className="text-xl font-semibold text-[#f09a36] whitespace-nowrap">
                                            {projectName}
                                        </span>
                                        {Array.isArray(prizeCategory) && award === "Winner" && (
                                            <span className="text-sm font-medium text-yellow-500 -mt-1">
                                                {prizeCategory.map((category) => `${category} Winner`).join(", ")}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {projectSlogan && (
                                    <p className="text-sm italic text-gray-500 dark:text-gray-400 -mt-2 mb-3 text-center">
                                        “{projectSlogan}”
                                    </p>
                                )}

                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                                        Hackathon:
                                    </span>{" "}
                                    {hackathonName}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                                        Date:
                                    </span>{" "}
                                    {date}
                                </p>

                                {prizeCategory && prizeCategory.length > 0 && (
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                                            Prize Category:
                                        </span>{" "}
                                        {Array.isArray(prizeCategory) ? prizeCategory.join(", ") : prizeCategory}
                                    </p>
                                )}

                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    <span>{truncatedDescription}</span>
                                    {isLongDescription && (
                                        <button
                                            onClick={() =>
                                                openModal({
                                                    projectName,
                                                    projectSlogan,
                                                    award,
                                                    prizeCategory,
                                                    hackathonName,
                                                    date,
                                                    description,
                                                    github,
                                                    devpost,
                                                })
                                            }
                                            className="ml-2 text-[#f09a36] hover:text-[#d87c12] font-medium underline underline-offset-2 transition-colors duration-200 focus:outline-none"
                                            aria-label={`Read full description for ${projectName}`}
                                        >
                                            Click here to read more
                                        </button>
                                    )}
                                </p>
                            </div>

                            <div className="flex space-x-4 mt-auto">
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center text-sm font-medium text-white bg-[#333] hover:bg-[#444] px-4 py-2 rounded-lg transition"
                                    aria-label={`${projectName} GitHub`}
                                >
                                    <FaGithub className="inline mr-2" />
                                    GitHub
                                </a>

                                <a
                                    href={devpost}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center text-sm font-medium text-white bg-[#0071e3] hover:bg-[#005bb5] px-4 py-2 rounded-lg transition flex items-center justify-center"
                                    aria-label={`${projectName} Devpost`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M11.54 8.79h-1.12v6.42h1.05A2.91 2.91 0 0 0 14.69 12c0-2.15-.92-3.21-3.15-3.21"></path>
                                        <path d="M7 3.37 2 12l5 8.63h10L22 12l-5-8.63zm4.47 13.91H8.35V6.72h3.27c3 0 5.23 1.43 5.23 5.28 0 3.7-2.68 5.28-5.38 5.28"></path>
                                    </svg>
                                    <span className="ml-2">Devpost</span>
                                </a>
                            </div>
                        </div>
                    );
                }
                )}
            </div>

            {modalOpen && modalContent && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white dark:bg-gray-800 rounded-lg max-w-xl w-full p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            aria-label="Close modal"
                            className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none text-2xl font-bold"
                        >
                            &times;
                        </button>

                        <div className="flex items-center mb-4">
                            <span className="text-2xl font-bold text-[#f09a36] mr-3">
                                {modalContent.projectName}
                            </span>
                            {modalContent.award === "Winner" && (
                                <FaTrophy
                                    className="text-yellow-400 h-7 w-7"
                                    title="Winner"
                                    aria-label="Winner Trophy"
                                />
                            )}
                        </div>

                        {modalContent.prizeCategory && modalContent.prizeCategory.length > 0 && (
                            <p className="mb-2 text-yellow-500 font-semibold">
                                Prize Category: {modalContent.prizeCategory.join(", ")}
                            </p>
                        )}

                        {modalContent.projectSlogan && (
                            <p className="italic text-gray-600 dark:text-gray-400 mb-3">
                                “{modalContent.projectSlogan}”
                            </p>
                        )}

                        <p className="mb-1">
                            <span className="font-semibold">Hackathon: </span>
                            {modalContent.hackathonName}
                        </p>
                        <p className="mb-3">
                            <span className="font-semibold">Date: </span>
                            {modalContent.date}
                        </p>

                        <p className="text-gray-800 dark:text-gray-100 whitespace-pre-line mb-6">
                            {modalContent.description}
                        </p>

                        <div className="flex space-x-4">
                            {modalContent.github && (
                                <a
                                    href={modalContent.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center text-sm font-medium text-white bg-[#333] hover:bg-[#444] px-4 py-2 rounded-lg transition"
                                    aria-label={`${modalContent.projectName} GitHub`}
                                >
                                    <FaGithub className="inline mr-2" />
                                    GitHub
                                </a>
                            )}

                            {modalContent.devpost && (
                                <a
                                    href={modalContent.devpost}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center text-sm font-medium text-white bg-[#0071e3] hover:bg-[#005bb5] px-4 py-2 rounded-lg transition flex items-center justify-center"
                                    aria-label={`${modalContent.projectName} Devpost`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M11.54 8.79h-1.12v6.42h1.05A2.91 2.91 0 0 0 14.69 12c0-2.15-.92-3.21-3.15-3.21"></path>
                                        <path d="M7 3.37 2 12l5 8.63h10L22 12l-5-8.63zm4.47 13.91H8.35V6.72h3.27c3 0 5.23 1.43 5.23 5.28 0 3.7-2.68 5.28-5.38 5.28"></path>
                                    </svg>
                                    <span className="ml-2">Devpost</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default HomePageHackathons;
