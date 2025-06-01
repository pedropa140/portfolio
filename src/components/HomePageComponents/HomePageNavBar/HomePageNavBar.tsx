function HomePageNavBar() {

    return (
        <div
            className="fixed flex top-0 left-0 w-full z-50 p-5 m-0 bg-transparent"
        >
            <a href="#">
                <h1
                    className="text-[#f09a36] text-[35px] font-bold"
                >
                    PEDRO PAJARILLO JR.
                </h1>
            </a>

            <div
                className=""
            >
                <a href="#">ABOUT</a>
                <a href="#">EXPERIENCE</a>
                <a href="#">HACKTHONS</a>
                <a href="#">PROJECTS</a>
                <a href="#">CONTACT</a>
            </div>
        </div>
    );
}

export default HomePageNavBar;