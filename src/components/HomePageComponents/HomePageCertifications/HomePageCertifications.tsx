import React from 'react';

const certifications = [
    {
        title: 'Qiskit Global Summer School 2024 - Quantum Excellence',
        provider: 'IBM (International Business Machines Corporation)',
        date: 'August 01, 2024',
        description: 'This credential earner has developed the skills and know-how to explore the world of quantum computing through Qiskit. Through completion of intensive hands-on labs, they have gained significant knowledge and skill in quantum computation, using physics, math, and python to begin working on large-scale quantum circuits.',
        link: 'https://www.credly.com/badges/1ca06bc8-7233-47a8-9a0f-35713172d961/linked_in_profile',
    },
    {
        title: 'Qiskit Global Summer School 2023 - Quantum Excellence',
        provider: 'IBM (International Business Machines Corporation)',
        date: 'September 12, 2023',
        description: 'This credential earner has developed the skills and know-how to explore the world of quantum computing and its applications with a focus on quantum simulations using NISQ hardware. Through completion of intensive hands-on labs, they have gained significant knowledge and skill in quantum computation, using the physics, math, and python skills required to model a molecule using Qiskit.',
        link: 'https://www.credly.com/badges/69370787-cc44-424c-a3cd-bac4b1146adf/linked_in_profile',
    },
    {
        title: 'Qiskit Global Summer School 2022 - Quantum Excellence',
        provider: 'IBM (International Business Machines Corporation)',
        date: 'August 16, 2022',
        description: 'This credential earner has developed the skills and know-how to explore the world of quantum computing and its applications with a focus on quantum simulations using NISQ hardware. Through completion of intensive hands-on labs, they have gained significant knowledge and skill in quantum computation, using the physics, math, and python skills required to model a molecule using Qiskit.',
        link: 'https://www.credly.com/badges/276a468e-b8f6-4998-8e19-1c5e0f19d1f3/linked_in_profile',
    },
    {
        title: 'Java and Web Programming Certificate of Achievement',
        provider: 'Middlesex Community College',
        date: 'May 20, 2021',
        description: 'This certification equips individuals with essential web publishing skills, including creating interactive, media-rich websites using modern tools. Graduates gain practical experience in problem-solving, object-oriented programming, CGI scripting, Unix shell programming, and database fundamentals.',
        link: '',
    }
];

const HomePageCertifications = () => {
    return (
        <div
            id="certifications"
            className="bg-[#f4f4f9] dark:bg-[#111827] text-gray-800 dark:text-white h-auto pt-14 px-4 md:px-14 transition-colors duration-300"
        >
            <div className="w-full m-auto pt-3">
                <h2 className="w-full md:w-[75%] m-auto text-xl md:text-3xl lg:text-[35px] text-[#f09a36] text-center font-bold border-b-[3px] border-solid border-b-[#f09a36] pb-2">
                    CERTIFICATIONS
                </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-[#1f2937] shadow-lg rounded-2xl p-6 border-l-4 border-[#f09a36] transition-all flex flex-col justify-between min-h-[280px]"
                    >
                        <div>
                            <h3 className="text-xl font-semibold text-[#f09a36] mb-2">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                                <span className="font-semibold text-gray-800 dark:text-gray-200">
                                    Provider:
                                </span>{" "}
                                {cert.provider}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                                <span className="font-semibold text-gray-800 dark:text-gray-200">
                                    Date:
                                </span>{" "}
                                {cert.date}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                {cert.description}
                            </p>
                        </div>

                        {cert.link && (
                            <div className="mt-auto pt-4">
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block w-full text-center text-sm font-medium text-white bg-[#f09a36] hover:bg-[#d8882f] px-4 py-2 rounded-lg transition"
                                >
                                    View Certificate
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePageCertifications;
