import image from "/public/images/welcom_sign.png";
import styled from "./welcomepage.module.css";

const WelcomePage = () => {
  return (
    <div className={`${styled.welc_head} container`}>
      <h2 className={styled.welc_h2}>Welcome</h2>
      <p className={styled.welc_p}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </p>
      <img src={image} alt="welcome sign" />
    </div>
  );
};

export default WelcomePage;
