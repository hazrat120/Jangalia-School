import styled from "./detailschart.module.css";

const index = () => {
  return (
    <div className={styled.details_chart}>
      <div className="container">
        <div className={styled.details_wrapper}>
          <div className={styled.details_items}>
            <img src="/public/icons/chart-icon_1.png.png" alt="chart-icon" />
            <div>
              <span>39</span>
              <p>Teachers</p>
            </div>
          </div>

          <div className={styled.details_items}>
            <img src="/public/icons/chart-icon_2.png.png" alt="chart-icon" />
            <div>
              <span>2600</span>
              <p>Students</p>
            </div>
          </div>

          <div className={styled.details_items}>
            <img src="/public/icons/chart-icon_3.png.png" alt="chart-icon" />
            <div>
              <span>56</span>
              <p>Course</p>
            </div>
          </div>

          <div className={styled.details_items}>
            <img src="/public/icons/chart-icon_4.png.png" alt="chart-icon" />
            <div>
              <span>13</span>
              <p>Years Exp.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
