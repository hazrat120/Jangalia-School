import Navbar from "../../components/Navbar/index";
import styled from "./banner.module.css";

const index = () => {
  return (
    <div className={styled.banner}>
      <div className="container">
        <div className={styled.nav_wrapper}>
          <Navbar />
        </div>
        <h2 className={styled.about_text}>About Us</h2>
      </div>
    </div>
  );
};

export default index;
