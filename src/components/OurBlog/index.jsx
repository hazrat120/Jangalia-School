import styled from "./ourblog.module.css";
import Button from "../../components/atoms/Button/index";
import { FaRegUser } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { TbBrandTorchain } from "react-icons/tb";
import { SiGoogledisplayandvideo360 } from "react-icons/si";

const index = () => {
  return (
    <div className={styled.our_blog}>
      <div className="container">
        <div className={styled.blog_wrapper}>
          <h2>Our Blog</h2>

          {/* blog row one */}
          <div className={styled.blog_row1}>
            {/* blog image 1 */}
            <div className={styled.blog_img1}>
              <img src="/public/images/blog-img_1.jpg.png" alt="blog-img" />
              <div className={styled.blog_img1_text}>
                <h5>Eestibulum sodales</h5>

                <div className={styled.img1_user_time}>
                  <div className={styled.img1_admin}>
                    <FaRegUser />
                    <span>by: admin</span>
                  </div>

                  <div className={styled.img1_date}>
                    <FaRegClock />
                    <span>9- Nov-2016</span>
                  </div>
                </div>
              </div>
            </div>

            {/* blog image 2 */}
            <div className={styled.blog_img2}>
              <img src="/public/images/blog-img_2.jpg.png" alt="blog-img-2" />

              <div className={styled.blog_img2_text}>
                <h5>Variations of passages</h5>
                <div className={styled.blog_admin_time}>
                  <div>
                    <FaRegUser />
                    <span>by: admin</span>
                  </div>
                  <div>
                    <FaRegClock />
                    <span>9- Nov-2016</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*blog row two */}
          <div className={styled.blog_row2}>
            {/* blog image 3 */}
            <div className={styled.blog_img3}>
              <img src="/public/images/blog-img_3.jpg.png" alt="blog-img-3" />
              <div className={styled.blog_img3_text}>
                <h5>Lorem Ipsum passage</h5>
                <div className={styled.blog_admin_date}>
                  <div>
                    <FaRegUser />
                    <span>by: admin</span>
                  </div>
                  <div>
                    <FaRegClock />
                    <span>9- Nov-2016</span>
                  </div>
                </div>
              </div>
            </div>
            {/* blog card */}
            <div className={styled.blog_card}>
              <TbBrandTorchain className={styled.chain} />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been dummy...
              </p>
              <div className={styled.blog_card_text}>
                <div>
                  <FaRegUser />
                  <span>by: admin</span>
                </div>
                <div>
                  <FaRegClock />
                  <span>9- Nov-2016</span>
                </div>
              </div>
            </div>

            {/* Blog image 4 */}
            <div className={styled.blog_img4}>
              <img src="/public/images/blog-img_4.jpg.png" alt="blog-img-4" />
              <div className={styled.blog_text5}>
                <h5>Nam libero tempore</h5>
                <div className={styled.blog_admin_date4}>
                  <div>
                    <FaRegUser />
                    <span>by: admin</span>
                  </div>
                  <div>
                    <FaRegClock />
                    <span>9- Nov-2016</span>
                  </div>
                </div>
              </div>
              <div className={styled.video_button}>
                <SiGoogledisplayandvideo360 />
              </div>
            </div>
          </div>
          <div className={styled.blog_btn}>
            <Button>VIEW ALL BLOG</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
