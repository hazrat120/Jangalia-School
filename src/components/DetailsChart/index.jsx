import { useState } from "react";
import styled from "./detailschart.module.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className={styled.details_chart}>
        <div className="container">
          <div className={styled.details_wrapper}>
            <div className={styled.details_items}>
              <img src="/public/icons/chart-icon_1.png.png" alt="chart-icon" />
              <div>
                {counterOn && (
                  <CountUp start={0} end={39} duration={2} delay={0} />
                )}
                <p>Teachers</p>
              </div>
            </div>

            <div className={styled.details_items}>
              <img src="/public/icons/chart-icon_2.png.png" alt="chart-icon" />
              <div>
                {counterOn && (
                  <CountUp start={0} end={2600} duration={2} delay={0} />
                )}
                <p>Students</p>
              </div>
            </div>

            <div className={styled.details_items}>
              <img src="/public/icons/chart-icon_3.png.png" alt="chart-icon" />
              <div>
                {counterOn && (
                  <CountUp start={0} end={56} duration={2} delay={0} />
                )}
                <p>Course</p>
              </div>
            </div>

            <div className={styled.details_items}>
              <img src="/public/icons/chart-icon_4.png.png" alt="chart-icon" />
              <div>
                {counterOn && (
                  <CountUp start={0} end={13} duration={2} delay={0} />
                )}
                <p>Years Exp.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default index;
