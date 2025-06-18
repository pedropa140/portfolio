import HomePageNavBar from "../HomePageComponents/HomePageNavBar/HomePageNavBar.tsx";
import HomePageHeader from "../HomePageComponents/HomePageHeader/HomePageHeader.tsx";
import HomePageAbout from "../HomePageComponents/HomePageAbout/HomePageAbout.tsx";
import HomePageExperience from "../HomePageComponents/HomePageExperience/HomePageExperience.tsx";
import HomePageEducation from "../HomePageComponents/HomePageEducation/HomePageEducation.tsx";
import HomePageCertifications from "../HomePageComponents/HomePageCertifications/HomePageCertifications.tsx";
import HomePageHackathons from "../HomePageComponents/HomePageHackathons/HomePageHackathons.tsx";
import HomePageProjects from "../HomePageComponents/HomePageProjects/HomePageProjects.tsx";
import HomePageContact from "../HomePageComponents/HomePageContact/HomePageContact.tsx";

import DarkMode from "../UTILS/DarkMode.tsx";
import TitleTag from "../UTILS/TitleTag.tsx";

function HomePage({ darkMode, toggleDarkMode }) {
  TitleTag("Portfolio | ");

  return (
    <div className="relative bg-[#f4f4f9] dark:bg-[#111827] min-h-screen text-black dark:text-white transition-colors duration-300">
      <HomePageNavBar />
      <HomePageHeader />
      <HomePageAbout />
      <HomePageExperience />
      <HomePageEducation />
      <HomePageCertifications />
      <HomePageHackathons />
      <HomePageProjects />
      <HomePageContact />

      <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default HomePage;
