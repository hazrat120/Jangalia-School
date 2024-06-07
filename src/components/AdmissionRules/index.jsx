import styled from "./admissionrules.module.css";
import { FaCheck } from "react-icons/fa";

export default function index() {
  return (
    <div className={styled.admissionrules}>
      <div className="container">
        <div className={styled.admission_wrapper}>
          <h2>Admission Rules</h2>
          <div className={styled.admissionrule}>
            <p className={styled.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries. It has survived not only five
              centuries, but also the leap into electronic.
            </p>

            <div className={styled.rules}>
              <div className={styled.rules1}>
                <FaCheck />
                <p>Donec molestie felis eget justo pellentesque</p>
              </div>
              <div className={styled.rules1}>
                <FaCheck />
                <p>Donec molestie felis eget justo pellentesque</p>
              </div>
              <div className={styled.rules1}>
                <FaCheck />
                <p>Donec molestie felis eget justo pellentesque</p>
              </div>
              <div className={styled.rules1}>
                <FaCheck />
                <p>Donec molestie felis eget justo pellentesque</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
