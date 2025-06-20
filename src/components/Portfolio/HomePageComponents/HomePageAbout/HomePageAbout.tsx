const HomePageAbout = () => {
    return (
        <div id="about" className="bg-[#f4f4f9] dark:bg-[#111827] h-auto pl-14 pr-14 transition-colors duration-300">
            <div className="w-full m-auto pt-3">
                <h2 className="w-[75%] m-auto text-xl md:text-3xl lg:text-[35px] text-[#f09a36] text-center font-bold border-b-[3px] border-solid border-b-[#f09a36] pb-2 mt-14">
                    ABOUT ME
                </h2>
                <div className="h-auto lg:w-[75%] md:w-[100%] sm:w-[100%] bg-transparent m-auto p-5">
                    <img
                        src="./components/HomePageAbout/Picture1.jpg"
                        alt="Pedro Pajarillo Jr."
                        className="w-auto h-auto rounded-lg float-left mr-5 mb-3"
                    />
                    <div className="text-[15px] leading-relaxed text-gray-800 dark:text-gray-200 clearfix">
                        <p className="indent-5 mb-2">
                            Hello! My name is <span className="text-[#f09a36] font-bold">Pedro Pajarillo Jr.</span> and I am a recent graduate of Rutgers University-New Brunswick with a Bachelor of Science in Computer Science, specializing in Software and Systems Development and Artificial Intelligence. I also received a minor in Cognitive Science, specializing in brain, language, and decision development. I am an avid hackathon participant and have completed in <span className="text-[#f09a36] font-bold">7</span> hackathons, with <span className="text-[#f09a36] font-bold">5</span> consecutive wins and <span className="text-[#f09a36] font-bold">6</span> category wins.
                        </p>
                        <p className="indent-5 mb-2">
                            During my time at Rutgers University, I worked as an <span className="text-[#f09a36] font-bold">iLab/Computer Science Tutor</span> at the <span className="text-[#f09a36] font-bold">CAVE (Collaborative Academic Versatile Environment)</span>, under the Laboratory of Computer Science Research and the Computer Science Department. After a year and a half, I was promoted to <span className="text-[#f09a36] font-bold">Student Manager and Head Computer Science Tutor</span> at the CAVE. In this role, I led and collaborated with a team of 12 computer science tutors to help over <span className="text-[#f09a36] font-bold">2,000+</span> students strengthen their understanding of object-oriented programming and data structures. I also maintained and troubleshot <span className="text-[#f09a36] font-bold">30+ Linux servers</span> used for research and coursework, created and managed projects for the Rutgers Computer Science Department, partnered with the department to introduce the computer science program to prospective students, and fostered a welcoming environment where Rutgers students and staff could collaborate, connect, relax, and study. Finally, I designed and implmeneted a robust monitor bot to detect server downtime or crashes, providing real-time notifications to staff with detailed status updates and server response data, ensuring swift issue resolution and minimized operational impact.
                        </p>
                        <p className="indent-5 mb-2">
                            I also served as a <span className="text-[#f09a36] font-bold">Teaching Assistant</span> for a Python course in the <span className="text-[#f09a36] font-bold">Master of Business and Science program</span>. A year later, I was promoted to <span className="text-[#f09a36] font-bold">Head Teaching Assistant</span>, where I oversaw other teaching assistants for the course and acted as the <span className="text-[#f09a36] font-bold">primary liaison</span> between the teaching team and the lead professor. I graded assignments, taught Python to over <span className="text-[#f09a36] font-bold">40+ graduate students</span>, and helped them deepen their understanding of lecture topics.
                        </p>
                        <p className="indent-5 mb-2">
                            Outside of coding, I enjoy spending time with friends and working out at the gym. I'm also a passionate soccer fan — a die-hard supporter of F.C. Barcelona — and I love playing Football Manager. Currently, I am attempting a Football Manager challenge where I took over a financially struggling F.C. Barcelona team and getting rid of their debt while also developing their youth prospects. I love recreating dishes that comes up on my Instagram or YouTube in my kitchen. My speciality lies in Macaroni and Cheese and Italian cuisines, which include (but are not limited to) cacio e pepe, penne alla vodka, and carbonara. Finally, I enjoy meeting up with friends just to either get lunch or dinner, or watching a movie on a Discord voice call.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageAbout;