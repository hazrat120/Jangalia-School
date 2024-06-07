import styled from "./about.module.css";
import AboutBarner from "../../components/AboutBanner/index";
import Whatweare from "../../components/whatweare/index";
import Studentsays from "../../components/StudentSays/index";
import DetailsChart from "../../components/DetailsChart/index";
import Ourteachers from "../../components/OurTeachers/index";
import Footer from "../../components/Footer/index";

const index = () => {
  return (
    <div className={styled.about}>
      <div>
        <AboutBarner />
      </div>
      <div>
        <Whatweare />
      </div>
      <div>
        <Studentsays />
      </div>
      <div>
        <DetailsChart />
      </div>
      <div>
        <Ourteachers />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default index;
