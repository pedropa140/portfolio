import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function HomePageNavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (id: string, onClickExtra = () => { }) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
        onClickExtra();
    };

    const renderNavLink = (label: string, id?: string, isScrolled?: boolean, onClickExtra = () => { }, url?: string) => {
        if (url) {
            return (
                <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-3 text-left md:p-[15px] md:inline hover:text-[#f09a36] ${isScrolled ? "text-[#f0c936]" : "text-white"
                        } bg-transparent border-none cursor-pointer font-inherit w-full md:w-auto`}
                >
                    {label}
                </a>
            );
        }

        return (
            <button
                key={label}
                onClick={(e) => {
                    e.preventDefault();
                    if (id) handleNavClick(id, onClickExtra);
                }}
                className={`block p-3 text-left md:p-[15px] md:inline hover:text-[#f09a36] ${isScrolled ? "text-[#f0c936]" : "text-white"
                    } bg-transparent border-none cursor-pointer font-inherit w-full md:w-auto`}
            >
                {label}
            </button>
        );
    };


    const navItems = [
        { label: "ABOUT", id: "about" },
        { label: "EDUCATION", id: "education" },
        { label: "EXPERIENCE", id: "experience" },
        { label: "HACKATHONS", id: "hackathons" },
        { label: "PROJECTS", id: "projects" },
        { label: "RESUME", url: "https://example.com/your-resume.pdf" },
        { label: "CONTACT", id: "contact" },
    ];


    return (
        <div
            className={`fixed flex flex-col md:flex-row top-0 left-0 z-50 w-full transition-all duration-300 items-start md:items-center justify-between ${isScrolled ? "p-2 mt-3" : "p-5"
                } ${isScrolled ? "bg-black bg-opacity-70" : "bg-transparent"}`}
        >
            <div className="flex w-full justify-between items-center">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setIsMenuOpen(false);
                    }}
                    className="bg-transparent border-none cursor-pointer"
                >
                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[#f09a36] hover:text-[#E28111] transition-colors duration-300">
                        PEDRO PAJARILLO JR.
                    </h1>

                </button>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <div
                className={`${isMenuOpen ? "flex" : "hidden"
                    } md:flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mt-4 md:mt-0 w-full md:w-auto bg-black md:bg-transparent bg-opacity-90 md:bg-opacity-0 px-4 py-4 md:p-0 rounded-lg shadow-lg md:shadow-none transition-all duration-300 ease-in-out font-bold`}
            >
                {navItems.map(({ label, id, url }) => renderNavLink(label, id, isScrolled, undefined, url))}
            </div>

        </div>
    );
}

export default HomePageNavBar;
