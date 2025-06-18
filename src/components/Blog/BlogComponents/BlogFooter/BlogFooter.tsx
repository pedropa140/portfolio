import { FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

function BlogFooter() {
    const navigation = useNavigate();
    const location = useLocation();

    return (
        <footer id="contact" className="bg-[#1f1f1f] dark:bg-gray-950 text-white py-10 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <div className="flex justify-center gap-6 text-2xl mb-6">
                    <a
                        href="mailto:pedropa140@gmail.com"
                        aria-label="Email"
                        className="hover:text-[#f09a36] transition"
                    >
                        <FaEnvelope className="w-7 h-7" />
                    </a>

                    <a
                        href="https://www.instagram.com/pedropa588"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-[#f09a36] transition"
                    >
                        <FaInstagram className="w-7 h-7" />
                    </a>

                    <a
                        href="https://twitter.com/thecoconutwater"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="hover:text-[#f09a36] transition"
                    >
                        <FaTwitter className="w-7 h-7" />
                    </a>
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                    <button
                        rel="noopener noreferrer"
                        className="hover:text-[#f09a36] transition font-blackletter"
                        onClick={(e) => {
                            if (location.pathname === '/blog') {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                            else {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "auto" });
                                navigation("/blog");
                            }
                        }}
                    >
                        THE PEDRO POST
                    </button>

                    <button
                        rel="noopener noreferrer"
                        className="hover:text-[#f09a36] transition"
                        onClick={(e) => {
                            if (location.pathname === '/blog/about') {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                            else {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "auto" });
                                navigation("/blog/about");
                            }
                        }}
                    >
                        About
                    </button>

                    <button
                        rel="noopener noreferrer"
                        className="hover:text-[#f09a36] transition"
                        onClick={(e) => {
                            if (location.pathname === '/blog/articles') {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                            else {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "auto" });
                                navigation("/blog/categories");
                            }
                        }}
                    >
                        Articles
                    </button>

                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#f09a36] transition"
                    >
                        Portfolio
                    </a>
                </div>

                <p className="text-sm italic text-gray-400 mt-4">
                    Writing about football passions, food finds, binge-worthy shows, and music that moves me.
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
}

export default BlogFooter;
