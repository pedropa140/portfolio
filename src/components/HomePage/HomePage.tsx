import HomePageNavBar from "../HomePageComponents/HomePageNavBar/HomePageNavBar.tsx";
import HomePageHeader from "../HomePageComponents/HomePageHeader/HomePageHeader.tsx";
import HomePageAbout from "../HomePageComponents/HomePageAbout/HomePageAbout.tsx";
import HomePageEducation from "../HomePageComponents/HomePageEducation/HomePageEducation.tsx";
import HomePageHackathons from "../HomePageComponents/HomePageHackathons/HomePageHackathons.tsx";
import HomePageProjects from "../HomePageComponents/HomePageProjects/HomePageProjects.tsx";
import HomePageContact from "../HomePageComponents/HomePageContact/HomePageContact.tsx";

function HomePage() {
  return (
    <div>
      <HomePageNavBar />
      <HomePageHeader />
      <HomePageAbout />
      <HomePageEducation />
      <HomePageHackathons />
      <HomePageProjects />
      <HomePageContact />
    </div>
  );
}

export default HomePage;
