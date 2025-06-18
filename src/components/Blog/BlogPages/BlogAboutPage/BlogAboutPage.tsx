import BlogHomePageNavBar from "../../BlogComponents/BlogNavBar/BlogNavBar.tsx";
import BlogHomePageFooter from "../../BlogComponents/BlogFooter/BlogFooter.tsx";

import DarkMode from "../../../UTILS/DarkMode.tsx";
import TitleTag from "../../../UTILS/TitleTag.tsx";

function BlogAboutPage({ darkMode, toggleDarkMode }) {
    TitleTag("About - The Pedro Post | ");

    return (
        <div className="relative min-h-screen text-black dark:text-white">
            <BlogHomePageNavBar />
            <div className="bg-[#f4f4f9] dark:bg-[#111827] text-gray-800 dark:text-white h-auto pt-14 pb-14 px-4 md:px-14 transition-colors duration-300">
                <div className="w-[75%] m-auto pt-10">
                    <h2 className="w-full m-auto text-xl md:text-3xl lg:text-[35px] text-[#f09a36] text-center font-bold border-b-[3px] border-solid border-b-[#f09a36] pb-2">
                        ABOUT <span className="font-blackletter">THE PEDRO POST</span>
                    </h2>

                    <div className="text-[15px] leading-relaxed text-gray-800 dark:text-gray-200 clearfix pt-5">
                        <p>
                            <span className="font-semibold text-[#f09a36] uppercase font-extrabold">The Pedro Post</span> is a personal corner of the internet where curiosity, creativity, and culture collide. Launched in June 2025, Pedro created this blog as a space to explore ongoing football news, intriguing food and recipe finds, honest reviews of TV shows and movies, and the music that moves him. Every piece on <span className="font-semibold text-[#f09a36] uppercase font-extrabold">The Pedro Post</span> is written with a commitment to honesty and clarity — offering apolitical, unbiased takes that focus on the story or rumor, not the spin.
                        </p>
                        <p className="mt-5">
                            Whether you're a die-hard football fan, a foodie in search of your next favorite dish, or someone who simply enjoys thoughtful media commentary, there's something here for you. This blog values authenticity over hype and aims to foster a space where opinions are shared with nuance, not noise.
                        </p>
                        <p className="mt-5">
                            Each post reflects Pedro's voice — candid, reflective, and occasionally humorous — with the goal of starting a conversation rather than dictating a conclusion. Pedro invites you to read, reflect, and explore with an open mind and a curious spirit.
                        </p>

                    </div>

                </div>

                <div className="w-[75%] m-auto pt-10">
                    <h2 className="w-full md:w-[75%] m-auto text-xl md:text-3xl lg:text-[35px] text-[#f09a36] text-center font-bold border-b-[3px] border-solid border-b-[#f09a36] pb-2">
                        ABOUT THE WRITER - PEDRO PAJARILLO JR.
                    </h2>

                    <div className="w-full m-auto pt-5 space-y-6 text-md md:text-lg leading-relaxed indent-5 clearfix">
                        <img
                            src="../components/Blog/BlogAboutPage/AboutTheAuthor_Pedro.jpg"
                            alt="Author"
                            className="w-[20%] sm:w-[50%] rounded-lg float-left mr-5 mb-3"
                        />

                        <div className="text-[15px] leading-relaxed text-gray-800 dark:text-gray-200">
                            <p>
                                Pedro Pajarillo Jr.'s love for the beautiful game — football (or as we call it in the U.S., soccer) — began in seventh grade after downloading the FIFA 14 Mobile app. Before that, Pedro's only experience with the sport was the occasional 30-minute recess match during the fall and spring of elementary school. After the FIFA 14 Mobile servers shut down, he transitioned to Soccer Manager, where he took the reins of clubs like F.C. Barcelona, Fußball-Club Bayern München e. V., and Chelsea Football Club — sparking a strong affinity for both the Catalonian and West London teams. Years later, Pedro discovered Football Manager 2020 for free on the Epic Games Store and went on to lead a star-studded F.C. Barcelona side to a historic sextuple: La Liga, Copa del Rey, Supercopa de España, UEFA Champions League, UEFA Super Cup, and FIFA Club World Cup titles. What began as a casual interest quickly evolved into a deep passion for tactics, club history, and the global culture of football.
                            </p>
                        </div>
                    </div>
                    <div className="w-full m-auto pt-5 space-y-6 text-md md:text-lg leading-relaxed indent-5 clearfix">
                        <img
                            src="../components/Blog/BlogAboutPage/AboutTheAuthor_Food.jpg"
                            alt="Food"
                            className="w-[20%] sm:w-[50%] rounded-lg float-right ml-5 mb-3"
                        />

                        <div className="text-[15px] leading-relaxed text-gray-800 dark:text-gray-200">
                            <p className="mt-5">
                                Pedro's love for cooking began during the COVID-19 lockdown, when restrictions on leaving the house opened up a lot of free time in his schedule. His interest in cooking was first sparked while making fried rice with his father, using fish oil to create a flavorful and satisfying salmon fried rice. From there, Pedro ventured into Italian cuisine, preparing dishes like <em>cacio e pepe</em>, <em>penne alla vodka</em>, and his personal favorite — <em>carbonara</em>. He also enjoys following cooking tutorials, such as Gordon Ramsay's famous scrambled eggs, which he often makes when staying overnight with friends. Outside the kitchen, Pedro enjoys watching television shows and keeping up with new music releases, especially in the genres of Hip-Hop, K-pop, Rock, and Pop. He appreciates artists who bring both lyrical depth and fresh production, often curating playlists that reflect his evolving tastes. Pedro is also a fan of long-form commentary and analysis, whether it's a breakdown of a football match, a film essay, or a deep dive into a music album. Through cooking, watching, listening, and writing, Pedro explores the world around him — one story, dish, or track at a time.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <BlogHomePageFooter />
            <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
    );
}

export default BlogAboutPage;
