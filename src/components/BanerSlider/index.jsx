// Import the necessary CSS files in your main component or index.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from "../Navbar/index";
import Button from "../atoms/Button";
import styled from "./bannerslider.module.css";

const BannerSlider = () => {
  const settings = {
    dots: false, // Display dots navigation
    infinite: true, // Infinite loop sliding
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000,
    appendArrows: false,
    nextArrow: false,
    pauseOnHover: false,
    // responsive: [
    //   // Responsive breakpoints
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <Slider {...settings}>
      <div className={`${styled.banar_slider} b_slider_1`}>
        <div className={styled.slide_items}>
          <Navbar />
          <h1>Campus life @ Unisco</h1>
          <p>
            Proactively utilize open-source users for process-centric total
            linkage. Energistically reinvent web-enabled initiatives with
            premium processes. Proactively drive.
          </p>
          <div className={styled.btn_div}>
            <Button>Campus Life</Button>
          </div>
        </div>
      </div>

      <div className={`${styled.banar_slider} b_slider_2`}>
        <div className={styled.slide_items}>
          <Navbar />
          <h1>Campus life @ Unisco</h1>
          <p>
            Proactively utilize open-source users for process-centric total
            linkage. Energistically reinvent web-enabled initiatives with
            premium processes. Proactively drive.
          </p>
          <div className={styled.btn_div}>
            <Button>Campus Life</Button>
            <Button>Campus Life</Button>
          </div>
        </div>
      </div>

      <div className={`${styled.banar_slider} b_slider_3`}>
        <div className={styled.slide_items}>
          <Navbar />
          <h1>Campus life @ Unisco</h1>
          <p>
            Proactively utilize open-source users for process-centric total
            linkage. Energistically reinvent web-enabled initiatives with
            premium processes. Proactively drive.
          </p>
          <div className={styled.btn_div}>
            <Button>Campus Life</Button>
            <Button>Campus Life</Button>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default BannerSlider;
