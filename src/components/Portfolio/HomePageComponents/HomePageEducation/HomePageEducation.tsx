const HomePageEducation = () => {
    const education = [
        {
            degree: "B.S. in Computer Science",
            school: "Rutgers University",
            date: "Sep 2021 - May 2024",
            courses: [
                {
                    title: "Introduction to Computer Security",
                    id: "01:198:419",
                    semester: "Spring 2024",
                },
                {
                    title: "Data Management for Data Science",
                    id: "01:198:210",
                    semester: "Fall 2023",
                },
                {
                    title: "Introduction to Artificial Intelligence",
                    id: "01:198:440",
                    semester: "Spring 2023",
                },
                {
                    title: "Internet Technology",
                    id: "01:198:352",
                    semester: "Fall 2022",
                },
                {
                    title: "Design and Analysis of Computer Algorithms",
                    id: "01:198:344",
                    semester: "Fall 2022",
                },
                {
                    title: "Systems Programming",
                    id: "01:198:214",
                    semester: "Fall 2022",
                },
                {
                    title: "Introduction to Discrete Structures II",
                    id: "01:198:206",
                    semester: "Fall 2022",
                },
                {
                    title: "Principles of Programming Languages",
                    id: "01:198:314",
                    semester: "Spring 2022",
                },
                {
                    title: "Introduction to Discrete Structures I",
                    id: "01:198:205",
                    semester: "Spring 2022",
                },
                {
                    title: "Software Methodology",
                    id: "01:198:213",
                    semester: "Spring 2022",
                },
                {
                    title: "Computer Architecture",
                    id: "01:198:211",
                    semester: "Fall 2021",
                },
            ],
        },
        {
            degree: "Minor in Cognitive Science",
            school: "Rutgers University",
            date: "May 2023 - May 2024",
            courses: [
                {
                    title: "Cognition and Decision Making",
                    id: "01:185:301",
                    semester: "Fall 2023",
                },
                {
                    title: "Neural Structure of Language",
                    id: "01:185:335",
                    semester: "Fall 2023",
                },
                {
                    title: "Advanced Topics in Cogntive Science: Decision Making",
                    id: "01:185:414",
                    semester: "Fall 2023",
                },
                {
                    title: "Cognitive Science: A Multi-disciplinary Introduction",
                    id: "01:185:201",
                    semester: "Spring 2023",
                },
                {
                    title: "Cognition and Decision Making",
                    id: "01:185:301",
                    semester: "Fall 2023",
                },
                {
                    title: "Neural Structure of Language",
                    id: "01:185:335",
                    semester: "Fall 2023",
                },
                {
                    title: "Minds, Machines and Persons",
                    id: "01:730:329",
                    semester: "Fall 2022",
                },
            ],
        },
        {
            degree: "A.S. in Computer Science",
            school: "Middlesex Community College",
            date: "Sep 2019 - May 2021",
            courses: [
                {
                    title: "Computer Organization and Architecture II",
                    id: "CSC-264",
                    semester: "Spring 2021",
                },
                {
                    title: "LINUX/UNIX and Shell Programming",
                    id: "CSC-245",
                    semester: "Spring 2021",
                },
                {
                    title: "Computer Organization and Architecture I",
                    id: "CSC-263",
                    semester: "Fall 2020",
                },
                {
                    title: "Introduction to Discrete Mathematics",
                    id: "MAT-206",
                    semester: "Fall 2020",
                },
                {
                    title: "Data Structures in Java",
                    id: "CSC-236",
                    semester: "Fall 2020",
                },
                {
                    title: "Web Programming",
                    id: "CSC-241",
                    semester: "Fall 2020",
                },
                {
                    title: "Database Concepts",
                    id: "CSC-239",
                    semester: "Spring 2020",
                },
                {
                    title: "Object-Oriented Programming Using Java",
                    id: "CSC-162",
                    semester: "Spring 2020",
                },
                {
                    title: "Web Development I",
                    id: "CSC-125",
                    semester: "Spring 2020",
                },
                {
                    title: "Introduction to Computer Science Using Java",
                    id: "CSC-161",
                    semester: "Fall 2019",
                }
            ],
        },
    ];

    return (
        <div
            id="education"
            className="bg-[#f4f4f9] dark:bg-[#111827] h-auto pt-14 pl-14 pr-14 pb-10 transition-colors duration-300"
        >
            <div className="w-full m-auto pt-3">
                <h2 className="w-[75%] m-auto text-xl md:text-3xl lg:text-[35px] text-[#f09a36] text-center font-bold border-b-[3px] border-solid border-b-[#f09a36] pb-2">
                    EDUCATION
                </h2>
            </div>

            <div className="relative w-full max-w-7xl mx-auto mt-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#f09a36]"></div>

                <div className="space-y-6 md:space-y-8">
                    {education.map((edu, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row items-center ${isLeft ? "md:justify-start" : "md:justify-end"
                                    }`}
                            >
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-[#111827] border-4 border-[#f09a36] rounded-full z-10"></div>

                                <div
                                    className={`w-full md:w-[45%] bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-colors duration-300 ${isLeft ? "md:mr-auto" : "md:ml-auto"
                                        }`}
                                >
                                    <h3 className="text-lg font-semibold text-[#f09a36]">
                                        {edu.degree}
                                        <span className="text-gray-700 dark:text-gray-300"> @ {edu.school}</span>
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.date}</p>

                                    <div className="mt-3">
                                        <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            Relevant Coursework:
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.courses.map((course, i) => (
                                                <div
                                                    key={i}
                                                    className="px-3 py-1 rounded-lg border border-[#f09a36] bg-[#f09a36]/10 text-[#f09a36] dark:text-[#fbbf77] dark:border-[#fbbf77] text-sm leading-tight max-w-full transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-md hover:bg-[#f09a36]/20 hover:text-[#d97706] dark:hover:text-[#fbbf77] cursor-pointer"
                                                >
                                                    <div className="font-medium">{course.title}</div>
                                                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                                                        • {course.id} • {course.semester}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
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

export default HomePageEducation;
