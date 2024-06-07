import styled from "./footer.module.css";
import Button from "../atoms/Button/index";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const index = () => {
  return (
    <div className={styled.footer}>
      <div className="container">
        <div className={styled.footer_wrapper}>
          <div className={styled.newsletter}>
            <h4>Newsletter</h4>
            <div className={styled.subscribe_btn}>
              <div className={styled.subscribe_btn_input}>
                <div>
                  <TfiEmail />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <Button>SUBSCRIBE</Button>
            </div>
            <span></span>
          </div>

          <div className={styled.footer_contact}>
            <div className={styled.copyright}>
              <img src="/public/images/logo.png" alt="logo" />
              <p>2016 @copy copyright All rights reserved.</p>
            </div>

            <div className={styled.navigation}>
              <h5>Navigation</h5>
              <ul>
                <li>About</li>
                <li>admissions</li>
                <li>acadimecs</li>
                <li>research</li>
                <li>contact</li>
              </ul>
            </div>

            <div className={styled.tweets}>
              <h5>Tweets</h5>
            </div>

            <div className={styled.contact}>
              <h5>Contact us</h5>
              <div className={styled.contact_address}>
                <p>
                  {" "}
                  <span>Address:</span> Unisco university Albany, NY, USA. 11001
                </p>
              </div>

              <div className={styled.contact_info}>
                <p>Email : info@unisco.com</p>
                <p>Phone : +91 555 668 986</p>
              </div>
              <div className={styled.social_icons}>
                <FaFacebookF className={styled.facebook} />
                <FaLinkedinIn className={styled.linkin} />
                <FaTwitter className={styled.twitter} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
