import styled from "./upcomingevent.module.css";
import UpcomingEventSlider from "../../components/UpcomingEventSlider/index";

const index = () => {
  return (
    <div className={styled.upcomingevent}>
      <div className="container">
        <div className={styled.wrapper}>
          <div className={styled.upcoming_image}>
            <h2>Upcoming Events</h2>
            <div className={styled.event_heading}>
              <img
                src="/public/images/upcoming-event-img.jpg"
                alt="upcoming image"
              />

              <span>06-Nov-17</span>
              <h4>Event Heading</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the ...
              </p>
            </div>
          </div>

          <div className={styled.slider_wrapper}>
            <div>
              <UpcomingEventSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
