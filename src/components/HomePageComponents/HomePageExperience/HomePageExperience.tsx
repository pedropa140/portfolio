const HomePageExperience = () => {
    const experiences = [
        {
            role: "Head Teaching Assistant",
            company: "Rutgers University - Masters of Business and Science",
            date: "May 2023 - May 2024",
            description: (
                <>
                    Acted as the primary liaison between the teaching assistants and the lead professor. Graded and taught Python to
                    <span className="text-[#f09a36] font-bold whitespace-nowrap"> over 40 </span>
                    graduate students. Held weekly office hours
                    <span className="text-[#f09a36] font-bold whitespace-nowrap"> (6+ hours total) </span>
                    to help students solidify their understanding of lecture topics. Collaborated with the lead professor to design and implement new assignments that aligned with curriculum objectives and promoted deep understanding.
                </>
            ),
            skills: ["Java", "Python", "Leadership", "Organization", "Communication", "Teaching", "Data Structures"]
        },
        {
            role: "Head iLab Assistant / Computer Science Student Manager",
            company: "Rutgers University - Computer Science Department",
            date: "May 2023 - May 2024",
            description: (
                <>
                    Led a team of
                    <span className="text-[#f09a36] font-bold whitespace-nowrap"> 12 </span>
                    computer science tutors to support
                    <span className="text-[#f09a36] font-bold whitespace-nowrap"> over 2,000 </span>
                    students. Maintained and troubleshot
                    <span className="text-[#f09a36] font-bold whitespace-nowrap"> 30+ Linux servers </span>
                    used for research and coursework. Designed a robust monitoring bot to detect server downtimes and provide
                    <span className="text-[#f09a36] font-bold whitespace-nowrap"> real-time alerts </span>
                    for quick resolution and minimal impact.
                </>
            ),
            skills: ["Python", "Leadership", "Organization", "Communication", "Teaching", "Data Structures"]
        },
        {
            role: "Teaching Assistant",
            company: "Rutgers University - Masters of Business and Science",
            date: "May 2022 - May 2023",
            description: (
                <>
                    Graded Python assignments for
                    <span className="text-[#f09a36] font-bold whitespace-nowrap"> over 40 </span>
                    graduate students. Held weekly office hours
                    <span className="text-[#f09a36] font-bold whitespace-nowrap"> (6+ hours total) </span>
                    to assist student understanding of lecture topics.
                </>
            ),
            skills: ["Python", "Organization", "Communication", "Teaching"]
        },
        {
            role: "iLab Assistant / Computer Science Tutor",
            company: "Rutgers University - Computer Science Department",
            date: "Jan 2022 - May 2023",
            description: (
                <>
                    Supported
                    <span className="text-[#f09a36] font-bold whitespace-nowrap"> over 2,000 </span>
                    students alongside
                    <span className="text-[#f09a36] font-bold whitespace-nowrap"> 12 </span>
                    tutors. Maintained and troubleshot
                    <span className="text-[#f09a36] font-bold whitespace-nowrap"> 30+ Linux servers </span>
                    and helped foster a collaborative learning space.
                </>
            ),
            skills: ["Java", "Python", "Organization", "Communication", "Teaching", "Data Structures"]
        }
    ];

    return (
        <div id="experience" className="bg-[#f4f4f9] dark:bg-[#111827] h-auto pt-14 pl-14 pr-14 pb-10 transition-colors duration-300">
            <div className="w-full m-auto pt-3">
                <h2 className="w-[75%] m-auto text-xl md:text-3xl lg:text-[35px] text-[#f09a36] text-center font-bold border-b-[3px] border-solid border-b-[#f09a36] pb-2">
                    EXPERIENCE
                </h2>
            </div>

            <div className="relative w-full max-w-7xl mx-auto mt-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#f09a36]"></div>

                <div className="space-y-6 md:space-y-8">
                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row items-center ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                            >
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-[#111827] border-4 border-[#f09a36] rounded-full z-10"></div>

                                <div
                                    className={`w-full md:w-[45%] bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg ${isLeft ? "md:mr-auto" : "md:ml-auto"} cursor-pointer`}
                                >
                                    <h3 className="text-lg font-semibold text-[#f09a36]">
                                        {exp.role}
                                        <span className="text-gray-700 dark:text-gray-300"> @ {exp.company}</span>
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.date}</p>
                                    <p className="mt-2 text-gray-600 dark:text-gray-200">{exp.description}</p>

                                    {/* Skills */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {exp.skills?.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="bg-[#f09a36]/20 text-[#f09a36] text-xs font-semibold px-3 py-1 rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HomePageExperience;
