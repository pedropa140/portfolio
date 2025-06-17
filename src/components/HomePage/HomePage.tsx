import HomePageNavBar from "../HomePageComponents/HomePageNavBar/HomePageNavBar.tsx";
import HomePageHeader from "../HomePageComponents/HomePageHeader/HomePageHeader.tsx";
import HomePageAbout from "../HomePageComponents/HomePageAbout/HomePageAbout.tsx";
import HomePageExperience from "../HomePageComponents/HomePageExperience/HomePageExperience.tsx";
import HomePageEducation from "../HomePageComponents/HomePageEducation/HomePageEducation.tsx";
import HomePageCertifications from "../HomePageComponents/HomePageCertifications/HomePageCertifications.tsx";
import HomePageHackathons from "../HomePageComponents/HomePageHackathons/HomePageHackathons.tsx";
import HomePageProjects from "../HomePageComponents/HomePageProjects/HomePageProjects.tsx";
import HomePageContact from "../HomePageComponents/HomePageContact/HomePageContact.tsx";

import DarkMode from "../HomePageUTILs/DarkMode.tsx";

function HomePage() {

  return (
    <div className="relative bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <HomePageNavBar />
      <HomePageHeader />
      <HomePageAbout />
      <HomePageExperience />
      <HomePageEducation />
      <HomePageCertifications />
      <HomePageHackathons />
      <HomePageProjects />
      <HomePageContact />

      <DarkMode />
    </div>
  );
}

export default HomePage;
