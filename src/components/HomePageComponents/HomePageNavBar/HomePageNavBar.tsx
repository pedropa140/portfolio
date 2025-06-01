import { useState, useEffect } from "react";

function HomePageNavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed flex top-0 left-0 z-50 m-0 items-center justify-between transition-all duration-300 
                ${isScrolled ?
                    "w-[95%] mr-[2.5%] ml-[2.5%] p-5 mt-3 bg-white" :
                    "w-screen bg-transparent p-7"
                }`}
        >
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
            >
                <h1 className="text-[#f09a36] text-[35px] font-bold hover:text-[#E28111]">
                    PEDRO PAJARILLO JR.
                </h1>
            </a>

            <div
                className={`w-auto font-bold transition-all`}>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`p-[15px] hover:text-[#f09a36]
                        ${isScrolled ?
                            "text-[#f0c936]" :
                            "text-white"
                        }`}
                >
                    ABOUT
                </a>

                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`p-[15px] hover:text-[#f09a36]
                        ${isScrolled ?
                            "text-[#f0c936]" :
                            "text-white"
                        }`}
                >
                    EDUCATION
                </a>

                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("experiences")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`p-[15px] hover:text-[#f09a36]
                        ${isScrolled ?
                            "text-[#f0c936]" :
                            "text-white"
                        }`}
                >
                    EXPERIENCE
                </a>

                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("hackathons")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`p-[15px] hover:text-[#f09a36]
                        ${isScrolled ?
                            "text-[#f0c936]" :
                            "text-white"
                        }`}
                >
                    HACKATHONS
                </a>

                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`p-[15px] hover:text-[#f09a36]
                        ${isScrolled ?
                            "text-[#f0c936]" :
                            "text-white"
                        }`}
                >
                    PROJECTS
                </a>

                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`p-[15px] hover:text-[#f09a36]
                        ${isScrolled ?
                            "text-[#f0c936]" :
                            "text-white"
                        }`}
                >
                    RESUME
                </a>

                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`p-[15px] hover:text-[#f09a36]
                        ${isScrolled ?
                            "text-[#f0c936]" :
                            "text-white"
                        }`}
                >
                    CONTACT
                </a>
            </div>
        </div>
    );
}

export default HomePageNavBar;
