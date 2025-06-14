import { useState, useEffect } from "react";

function HomePageNavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (id: string, onClickExtra = () => { }) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        onClickExtra();
        setMenuOpen(false);
    };

    const renderNavLink = (label: string, id?: string, isScrolled?: boolean, onClickExtra = () => { }, url?: string) => {
        const baseClass = `block p-4 text-2xl lg:text-base text-left hover:text-[#E28111] ${isScrolled ? "text-[#f09a36]" : "text-white"} bg-transparent border-none cursor-pointer font-inherit w-full lg:w-auto font-bold`;

        if (url) {
            return (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" className={baseClass} onClick={() => setMenuOpen(false)}>
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
                className={baseClass}
            >
                {label}
            </button>
        );
    };

    const navItems = [
        { label: "ABOUT", id: "about" },
        { label: "EXPERIENCE", id: "experience" },
        { label: "EDUCATION", id: "education" },
        { label: "HACKATHONS", id: "hackathons" },
        { label: "PROJECTS", id: "projects" },
        { label: "RESUME", url: "https://drive.google.com/file/d/1cwA9iiWqxWABMaxAzDFZbiTzsI9QLB7p/view?usp=sharing" },
        { label: "CONTACT", id: "contact" },
    ];

    return (
        <div className={`fixed z-[100] flex items-center justify-between transition-all ease-in-out w-full 
            ${isScrolled ? "bg-[#f4f4f9] p-2 w-[95%] ml-[2.5%] mr-[2.5%]" : "bg-transparent p-5"}
        `}>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setMenuOpen(false);
                }}
                className="bg-transparent border-none cursor-pointer"
            >
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#f09a36] hover:text-[#E28111] transition-colors duration-300 whitespace-nowrap">
                    PEDRO PAJARILLO JR.
                </h1>
            </button>

            <div className="hidden xl:flex font-bold">
                {navItems.map(({ label, id, url }) =>
                    renderNavLink(label, id, isScrolled, undefined, url)
                )}
            </div>

            <button
                className="xl:hidden z-[101] relative w-8 h-8 flex items-center justify-center bg-transparent border-none focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span className={`absolute w-8 h-1 ${isScrolled ? "bg-[#f09a36]" : "bg-white"} rounded-sm transition-transform duration-300 ease-in-out ${menuOpen ? "rotate-45" : "-translate-y-2"}`}/>
                <span className={`absolute w-8 h-1 ${isScrolled ? "bg-[#f09a36]" : "bg-white"} rounded-sm transition-opacity duration-300 ease-in-out ${menuOpen ? "opacity-0" : "opacity-100"}`}/>
                <span className={`absolute w-8 h-1 ${isScrolled ? "bg-[#f09a36]" : "bg-white"} rounded-sm transition-transform duration-300 ease-in-out ${menuOpen ? "-rotate-45" : "translate-y-2"}`}/>
            </button>

            {menuOpen && (
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 flex flex-col items-center justify-center z-[100] space-y-6 transition-opacity duration-300">
                    {navItems.map(({ label, id, url }) =>
                        renderNavLink(label, id, true, undefined, url)
                    )}
                </div>
            )}
        </div>
    );
}

export default HomePageNavBar;
