import styled from "./ourteachers.module.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const index = () => {
  return (
    <div className={styled.ourteacher}>
      <div className="container">
        <div className={styled.ourteacher_wrapper}>
          <h4>Our Teachers</h4>
          <div className={styled.teachers}>
            <div className={styled.teachers_profile}>
              <div className={styled.teacher_img}>
                <img
                  src="/public/images/our-teachers_01.jpg.png"
                  alt="teachers"
                />
              </div>
              <div className={styled.teacher_info}>
                <div>
                  <strong>Melissa Baker</strong>
                  <br />
                  MBA, PhD
                </div>
                <span className={styled.onepx}></span>

                <div className={styled.syllabus}>
                  <strong>Syllabus : </strong>
                  Economics, <br /> Marketing & Finance
                </div>
              </div>

              <div className={styled.teacher_socials}>
                <div>
                  {" "}
                  <FaFacebookF />
                </div>
                <div>
                  <FaTwitter />
                </div>
                <div>
                  <FaLinkedinIn />
                </div>
              </div>
            </div>

            <div className={styled.teachers_profile}>
              <div className={styled.teacher_img}>
                <img
                  src="/public/images/our-teachers_02.jpg.png"
                  alt="teachers"
                />
              </div>
              <div className={styled.teacher_info}>
                <div>
                  <strong>Melissa Baker</strong>
                  <br />
                  MBA, PhD
                </div>
                <span className={styled.onepx}></span>

                <div className={styled.syllabus}>
                  <strong>Syllabus : </strong>
                  Economics, <br /> Marketing & Finance
                </div>
              </div>

              <div className={styled.teacher_socials}>
                <div>
                  {" "}
                  <FaFacebookF />
                </div>
                <div>
                  <FaTwitter />
                </div>
                <div>
                  <FaLinkedinIn />
                </div>
              </div>
            </div>

            <div className={styled.teachers_profile}>
              <div className={styled.teacher_img}>
                <img
                  src="/public/images/our-teachers_03.jpg.png"
                  alt="teachers"
                />
              </div>
              <div className={styled.teacher_info}>
                <div>
                  <strong>Melissa Baker</strong>
                  <br />
                  MBA, PhD
                </div>
                <span className={styled.onepx}></span>

                <div className={styled.syllabus}>
                  <strong>Syllabus : </strong>
                  Economics, <br /> Marketing & Finance
                </div>
              </div>

              <div className={styled.teacher_socials}>
                <div>
                  {" "}
                  <FaFacebookF />
                </div>
                <div>
                  <FaTwitter />
                </div>
                <div>
                  <FaLinkedinIn />
                </div>
              </div>
            </div>

            <div className={styled.teachers_profile}>
              <div className={styled.teacher_img}>
                <img
                  src="/public/images/our-teachers_04.jpg.png"
                  alt="teachers"
                />
              </div>
              <div className={styled.teacher_info}>
                <div>
                  <strong>Melissa Baker</strong>
                  <br />
                  MBA, PhD
                </div>
                <span className={styled.onepx}></span>

                <div className={styled.syllabus}>
                  <strong>Syllabus : </strong>
                  Economics, <br /> Marketing & Finance
                </div>
              </div>

              <div className={styled.teacher_socials}>
                <div>
                  {" "}
                  <FaFacebookF />
                </div>
                <div>
                  <FaTwitter />
                </div>
                <div>
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
