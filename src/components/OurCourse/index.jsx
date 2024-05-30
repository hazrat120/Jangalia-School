import CourseCard from "../CourseCard/index";
import Button from "../atoms/Button";
import styled from "./ourcourse.module.css";

const OurCourse = () => {
  return (
    <div className={styled.our_cours}>
      <h2>Our Course</h2>
      <div className={styled.course_box}>
        <CourseCard />
      </div>
      <div className={styled.cours_buttn}>
        <Button>View All Course</Button>
      </div>
    </div>
  );
};

export default OurCourse;
