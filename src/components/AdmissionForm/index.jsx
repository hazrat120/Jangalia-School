import styled from "./admissionform.module.css";
import { TbCertificate } from "react-icons/tb";
import Button from "../atoms/Button/index";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    course: "",
    jdate: "",
    fname: "",
    lname: "",
    email: "",
    phone: "",
    bdate: "",
    city: "",
    state: "",
    education: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fname) newErrors.fname = "First name is required!";
    if (!formData.lname) newErrors.lname = "Last name is required!";

    if (!formData.email) {
      newErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid!";
    }

    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.city) newErrors.city = "City is required";
  };
  return (
    <div className={styled.admissionform}>
      <div className="container">
        <div className={styled.admissionform_wrapper}>
          <div className={styled.form_text}>
            <TbCertificate />
            <h2>Admission Form</h2>
          </div>
          <form action="#" className={styled.form}>
            <div className={styled.form_wrapper}>
              <div className={styled.form_wrapper1}>
                <div className={styled.form_control}>
                  <div className={styled.label}>
                    <label htmlFor="coursename">Course Name</label>
                  </div>
                  <div className={styled.input_sec}>
                    {" "}
                    <select name="course" id="#" required aria-required="true">
                      Select a course
                      <option value="one">One</option>
                      <option value="two">Two</option>
                      <option value="three">Three</option>
                      <option value="four">Four</option>
                      <option value="five">Five</option>
                    </select>
                  </div>
                </div>

                <div className={styled.form_control}>
                  <div className={styled.label}>
                    {" "}
                    <label htmlFor="joindate">Join Date</label>
                  </div>
                  <div className={styled.input_sec}>
                    <input
                      type="date"
                      name="join"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className={styled.form_control}>
                  <div className={styled.label}>
                    {" "}
                    <label htmlFor="fname">First Name</label>
                  </div>
                  <div className={styled.input_sec}>
                    <input
                      type="text"
                      name="fname"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className={styled.form_control}>
                  <div className={styled.label}>
                    {" "}
                    <label htmlFor="lname">Last Name</label>
                  </div>
                  <div className={styled.input_sec}>
                    <input
                      type="text"
                      name="lname"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className={styled.form_control}>
                  <div className={styled.label}>
                    <label htmlFor="emal">Email Address</label>
                  </div>

                  <div className={styled.input_sec}>
                    <input
                      type="email"
                      name="email"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className={styled.form_control}>
                  <div className={styled.label}>
                    <label htmlFor="phone">Phone</label>
                  </div>
                  <div className={styled.input_sec}>
                    <input
                      type="text"
                      name="phone"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className={styled.form_control}>
                  <div className={styled.label}>
                    {" "}
                    <label htmlFor="birthdate">Date of birth</label>
                  </div>
                  <div className={styled.input_sec}>
                    <input
                      type="date"
                      name="birthdate"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
              </div>

              <div className={styled.form_wrapper2}>
                <div className={styled.form_control}>
                  <div className={styled.label}>
                    {" "}
                    <label htmlFor="city">Address</label>
                  </div>
                  <div className={styled.address}>
                    <div className={styled.input_sec}>
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        required
                        aria-required="true"
                      />
                    </div>
                    <div className={styled.input_sec}>
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                </div>

                <div className={styled.form_control}>
                  <div className={styled.label}>
                    <label htmlFor="education">Education</label>
                  </div>
                  <div className={styled.input_sec}>
                    <input
                      type="text"
                      name="education"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className={styled.form_control}>
                  <div className={styled.label}>
                    {" "}
                    <label className={styled.label} htmlFor="message">
                      Message
                    </label>
                  </div>
                  <div className={styled.textarea}>
                    <textarea
                      name="message"
                      id="#"
                      placeholder="Any other comment?"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className={styled.submitbtn}>
              {" "}
              <Button>SUBMIT NOW</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
