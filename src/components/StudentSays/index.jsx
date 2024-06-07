import styled from "./studentsays.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function index() {
  return (
    <div className={styled.studentsays_main}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={false}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={styled.event_slider_head}
      >
        <SwiperSlide style={{ width: "570px" }}>
          <div className={styled.wrapper}>
            <div className={styled.secondwrapper}>
              <h3>Our Students Says</h3>
              <div className={styled.quote_circle}>
                <RiDoubleQuotesL />
              </div>
              <div className={styled.quote_text}>
                <RiDoubleQuotesL className={styled.double_quote} />
                <p>
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. Printing and
                  typesetting industry. It has survived not only five centuries.
                </p>
                <RiDoubleQuotesR className={styled.double_quote} />
              </div>
              <div className={styled.student_id}>
                <img src="/public/images/testi-img.jpg.png" alt="test image" />
                <div>
                  <p>Student Name</p>
                  <p>Top rank holder</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "570px" }}>
          <div className={styled.wrapper}>
            <div className={styled.secondwrapper}>
              <h3>Our Students Says</h3>
              <div className={styled.quote_circle}>
                <RiDoubleQuotesL />
              </div>
              <div className={styled.quote_text}>
                <RiDoubleQuotesL className={styled.double_quote} />
                <p>
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. Printing and
                  typesetting industry. It has survived not only five centuries.
                </p>
                <RiDoubleQuotesR className={styled.double_quote} />
              </div>
              <div className={styled.student_id}>
                <img src="/public/images/testi-img.jpg.png" alt="test image" />
                <div>
                  <p>Student Name</p>
                  <p>Top rank holder</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
