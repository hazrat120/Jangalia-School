import BannerSlider from "../../components/BanerSlider/index";
import OurCourse from "../../components/OurCourse/index";
import WelcomePage from "../../components/Welcome/WelcomePage";
import UpcomingEventDate from "../../components/UpcomingEvent/index";
import DetailsChart from "../../components/DetailsChart/index";

const Homepage = () => {
  return (
    <div>
      <div>
        <BannerSlider />
      </div>
      <div>
        <WelcomePage />
      </div>
      <div>
        <OurCourse />
      </div>
      <div>
        <UpcomingEventDate />
      </div>
      <div>
        <DetailsChart />
      </div>
    </div>
  );
};

export default Homepage;
