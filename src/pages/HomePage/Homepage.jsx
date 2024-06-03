import BannerSlider from "../../components/BanerSlider/index";
import OurCourse from "../../components/OurCourse/index";
import WelcomePage from "../../components/Welcome/WelcomePage";
import UpcomingEventDate from "../../components/UpcomingEvent/index";
import DetailsChart from "../../components/DetailsChart/index";
import Blog from "../../components/OurBlog/index";
import Footer from "../../components/footer/index";

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
      <div>
        <Blog />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
