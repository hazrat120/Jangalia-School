import styled from "./upcomevenslide.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <div className={styled.slider_wraper}>
      <h2>Important Dates</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styled.event_slider_head}
      >
        <SwiperSlide style={{ width: "570px" }}>
          <div className={styled.time_slihead}>
            <div className={styled.date_slide}>
              <div className={styled.slide_date}>
                <div>
                  06
                  <span>Nov.17</span>
                </div>
              </div>

              <div className={styled.date_location}>
                <h4>Eestibulum sodales metus.</h4>
                <p>
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book ...
                </p>
              </div>
            </div>

            <div className={styled.date_slide}>
              <div className={styled.slide_date}>
                <div>
                  06
                  <span>Nov.17</span>
                </div>
              </div>

              <div className={styled.date_location}>
                <h4>Eestibulum sodales metus.</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "570px" }}>
          <div className={styled.time_slihead}>
            <div className={styled.date_slide}>
              <div className={styled.slide_date}>
                <div>
                  06
                  <span>Nov.17</span>
                </div>
              </div>

              <div className={styled.date_location}>
                <h4>Eestibulum sodales metus.</h4>
                <p>
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book ...
                </p>
              </div>
            </div>

            <div className={styled.date_slide}>
              <div className={styled.slide_date}>
                <div>
                  06
                  <span>Nov.17</span>
                </div>
              </div>

              <div className={styled.date_location}>
                <h4>Eestibulum sodales metus.</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "570px" }}>
          <div className={styled.time_slihead}>
            <div className={styled.date_slide}>
              <div className={styled.slide_date}>
                <div>
                  06
                  <span>Nov.17</span>
                </div>
              </div>

              <div className={styled.date_location}>
                <h4>Eestibulum sodales metus.</h4>
                <p>
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book ...
                </p>
              </div>
            </div>

            <div className={styled.date_slide}>
              <div className={styled.slide_date}>
                <div>
                  06
                  <span>Nov.17</span>
                </div>
              </div>

              <div className={styled.date_location}>
                <h4>Eestibulum sodales metus.</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "570px" }}>
          <div className={styled.time_slihead}>
            <div className={styled.date_slide}>
              <div className={styled.slide_date}>
                <div>
                  06
                  <span>Nov.17</span>
                </div>
              </div>

              <div className={styled.date_location}>
                <h4>Eestibulum sodales metus.</h4>
                <p>
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book ...
                </p>
              </div>
            </div>

            <div className={styled.date_slide}>
              <div className={styled.slide_date}>
                <div>
                  06
                  <span>Nov.17</span>
                </div>
              </div>

              <div className={styled.date_location}>
                <h4>Eestibulum sodales metus.</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "570px" }}>
          <div className={styled.time_slihead}>
            <div className={styled.date_slide}>
              <div className={styled.slide_date}>
                <div>
                  06
                  <span>Nov.17</span>
                </div>
              </div>

              <div className={styled.date_location}>
                <h4>Eestibulum sodales metus.</h4>
                <p>
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book ...
                </p>
              </div>
            </div>

            <div className={styled.date_slide}>
              <div className={styled.slide_date}>
                <div>
                  06
                  <span>Nov.17</span>
                </div>
              </div>

              <div className={styled.date_location}>
                <h4>Eestibulum sodales metus.</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: "570px" }}>
          <div className={styled.time_slihead}>
            <div className={styled.date_slide}>
              <div className={styled.slide_date}>
                <div>
                  06
                  <span>Nov.17</span>
                </div>
              </div>

              <div className={styled.date_location}>
                <h4>Eestibulum sodales metus.</h4>
                <p>
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book ...
                </p>
              </div>
            </div>

            <div className={styled.date_slide}>
              <div className={styled.slide_date}>
                <div>
                  06
                  <span>Nov.17</span>
                </div>
              </div>

              <div className={styled.date_location}>
                <h4>Eestibulum sodales metus.</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
