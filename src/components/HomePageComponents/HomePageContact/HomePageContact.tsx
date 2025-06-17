import { FaLinkedin, FaGithub, FaDev, FaEnvelope } from "react-icons/fa";

const HomePageContact = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer id="contact" className="bg-[#1f1f1f] dark:bg-gray-950 text-white py-10 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <div className="flex justify-center gap-6 text-2xl mb-6">
                    <a
                        href="https://devpost.com/pedropa140"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Devpost"
                        className="hover:text-[#f09a36] transition"
                    >
                        <FaDev />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pedro-pajarillo-jr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-[#f09a36] transition"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:pedropa140@gmail.com"
                        aria-label="Email"
                        className="hover:text-[#f09a36] transition"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://github.com/pedropa140"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:text-[#f09a36] transition"
                    >
                        <FaGithub />
                    </a>
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                    {["about", "experience", "education", "certifications", "hackathons", "projects", "contact"].map((section) => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className="hover:text-[#f09a36] transition"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="mt-6">
                    <a
                        href="https://drive.google.com/file/d/1cwA9iiWqxWABMaxAzDFZbiTzsI9QLB7p/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 border border-[#f09a36] text-[#f09a36] rounded hover:bg-[#f09a36] hover:text-white transition font-bold"
                    >
                        Download Resume
                    </a>
                </div>

                <p className="text-sm italic text-gray-400 mt-4">
                    Building thoughtful software that solves real problems.
                </p>

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="mt-3 text-sm text-gray-500 hover:text-[#f09a36] transition"
                >
                    ↑ Back to Top
                </button>

                <p className="text-xs text-gray-600 mt-6">
                    © {new Date().getFullYear()} Pedro Pajarillo Jr. — Built with React + TailwindCSS
                </p>
            </div>
        </footer>
    );
};

export default HomePageContact;
