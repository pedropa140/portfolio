const HomePageAbout = () => {
    return (
        <div id="about" className="bg-[#f4f4f9] min-h-screen p-14">
            <div className="w-full m-auto pt-3">
                <h2 className="w-[75%] m-auto text-xl md:text-3xl lg:text-[35px] text-[#f09a36] text-center font-bold border-b-[3px] border-solid border-b-[#f09a36] pb-2">
                    ABOUT ME
                </h2>
                <div className="h-auto w-[75%] bg-transparent m-auto p-5 flex">
                    <img src="./components/HomePageAbout/Picture1.jpg" alt="Pedro Pajarillo Jr." />
                    <div className="pl-5">
                        <p className="mb-5">
                            Hello! My name is Pedro Pajarillo Jr. and I am a recent graduate of Rutgers University-New Brunswick. With a computer science major and cognitive science minor, I focused on systems and software development, computer security, and artificial intelligence. I am an avid hackathon participant and have competed in 7 hackathons, with 5 consecutive wins and 6 category wins.
                        </p>
                        <p className="mb-5">
                            I worked at Rutgers as an iLab/Computer Science Tutor at the CAVE (Collaborative Academic Versatile Environment) under the Laboratory of Computer Science Research and the Computer Science Department for about a year and a half before being promoted to CAVE Student Manager/Head Computer Science Tutor. In this role, I led and worked with a team of 12 computer science tutors to help over 1000+ students in prerequisite computer science courses each semester. As the manager, I also helped maintain and troubleshoot 30+ Linux servers owned by the Department of Computer Science. Additionally, I led university tours for prospective computer science students to show safe, welcoming spaces for students to hang out and study.
                        </p>
                        <p className="mb-5">
                            Outside of coding, I enjoy spending time with friends and working out at the gym. I also love playing/watching soccer: I am a die-hard F.C. Barcelona fan and love to play Football Manager. Additionally, I love experimenting with new recipes in the kitchen! My specialty lies in Italian cuisines, which include (but are not limited to) cacio e pepe, penne alla vodka, and carbonara. I also try to recreate dishes from any YouTube videos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageAbout;
