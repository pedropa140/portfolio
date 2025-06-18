import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems: { label: string; url?: string; id?: string; newPage?: boolean; }[] = [
    {
        label: "ABOUT",
        url: "/blog/about",
        newPage: false,
    },
    {
        label: "ARTICLES",
        url: "/blog/articles",
        newPage: false,
    }
];

function HomePageNavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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

    const renderNavLink = (label: string, id?: string, isScrolled?: boolean, onClickExtra = () => { }, url?: string, newPage?: boolean,) => {
        const baseClass = `
            block p-3 text-2xl lg:text-base text-left font-bold w-full lg:w-auto bg-transparent border-none cursor-pointer font-inherit
            ${isScrolled ? "text-[#f09a36] hover:text-[#E28111]" : "text-white hover:text-[#E28111]"}
        `;

        if (url) {
            return (
                <button
                    key={label}
                    rel={newPage ? "noopener noreferrer" : ""}
                    className={baseClass}
                    onClick={(e) => {
                        if (location.pathname === url) {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                            setMenuOpen(false);
                            navigate(url);
                        }
                        else {
                            setMenuOpen(false);
                            window.scrollTo({ top: 0, behavior: "auto" });
                            navigate(url);
                        }
                    }}
                >
                    {label}
                </button>
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

    return (
        <div
            className={`fixed z-[100] flex items-center justify-between transition-all duration-300  ease-in-out
                ${isScrolled
                    ? "bg-[#f4f4f9] dark:bg-[#111827] pb-2 pl-5 pr-5 w-[95%] ml-[2.5%] mr-[2.5%]"
                    : `${location.pathname === '/blog' ? "bg-transparent" : "bg-[#1f1f1f] dark:bg-[#111827]"} p-5 w-full`
                }
            `}
        >
            <button
                onClick={(e) => {
                    if (location.pathname === "/blog") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setMenuOpen(false);
                    }
                    else {
                        setMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: "auto" });
                        navigate('/blog')
                    }
                }}
                className="bg-transparent border-none cursor-pointer"
            >
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#f09a36] hover:text-[#E28111] transition-colors duration-300 whitespace-nowrap font-blackletter">
                    THE PEDRO POST
                </h1>
            </button>

            <div className="hidden 2xl:flex font-bold">
                {navItems.map(({ label, id, url, newPage }) =>
                    renderNavLink(label, id, isScrolled, undefined, url, newPage)
                )}

                <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-3 text-2xl lg:text-base text-left font-bold w-full lg:w-auto bg-transparent border-none cursor-pointer font-inherit ${isScrolled ? "text-[#f09a36] hover:text-[#E28111]" : "text-white hover:text-[#E28111]"}`}
                >
                    PORTFOLIO
                </a>

            </div>

            <button
                className="2xl:hidden z-[101] relative w-8 h-8 flex items-center justify-center bg-transparent border-none focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span className={`absolute w-8 h-1 rounded-sm transition-transform duration-300 ease-in-out ${isScrolled ? "bg-[#f09a36]" : "bg-white dark:bg-gray-200"} ${menuOpen ? "rotate-45" : "-translate-y-2"}`} />
                <span className={`absolute w-8 h-1 rounded-sm transition-opacity duration-300 ease-in-out ${isScrolled ? "bg-[#f09a36]" : "bg-white dark:bg-gray-200"} ${menuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute w-8 h-1 rounded-sm transition-transform duration-300 ease-in-out ${isScrolled ? "bg-[#f09a36]" : "bg-white dark:bg-gray-200"} ${menuOpen ? "-rotate-45" : "translate-y-2"}`} />
            </button>

            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black dark:bg-gray-950 bg-opacity-95 dark:bg-opacity-95 flex flex-col items-center justify-center z-[100] space-y-4 text-[0.65rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    <button
                        className="2xl:flex hidden absolute top-10 text-white dark:text-gray-200"
                        style={{ top: '5%', left: '50%', transform: 'translateX(-50%)' }}
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <span className="relative w-8 h-8">
                            <span
                                className={`absolute inset-0 w-full h-1 transform rotate-45 rounded-sm transition-all duration-300 ${isScrolled ? "bg-[#f09a36]" : "bg-white dark:bg-gray-200"}`}
                            />
                            <span
                                className={`absolute inset-0 w-full h-1 transform -rotate-45 rounded-sm transition-all duration-300 ${isScrolled ? "bg-[#f09a36]" : "bg-white dark:bg-gray-200"}`}
                            />
                        </span>
                    </button>

                    {navItems.map(({ label, id, url, newPage }) =>
                        renderNavLink(label, id, true, undefined, url, newPage)
                    )}

                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={` block p-3 text-2xl lg:text-base text-left font-bold w-full lg:w-auto bg-transparent border-none cursor-pointer font-inherit ${isScrolled ? "text-[#f09a36] hover:text-[#E28111]" : "text-white hover:text-[#E28111]"}`}
                    >
                        PORTFOLIO
                    </a>
                </div>
            )}
        </div>
    );
}

export default HomePageNavBar;
