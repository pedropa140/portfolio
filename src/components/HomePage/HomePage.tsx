import HomePageHeader from "../HomePageComponents/HomePageHeader/HomePageHeader.tsx";
import HomePageNavBar from "../HomePageComponents/HomePageNavBar/HomePageNavBar.tsx";

function HomePage() {
  return (
    <div>
      <HomePageNavBar />
      <HomePageHeader />
      <div style={{height: '1000px'}} ></div>
    </div>
  );
}

export default HomePage;
