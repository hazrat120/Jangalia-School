import styled from "./admissionbannar.module.css";
import Navbar from "../../components/Navbar/index";

export default function index() {
  return (
    <div className={styled.admission_bannar}>
      <div className="container">
        <div className={styled.admission_nav}>
          <Navbar />
        </div>
        <div className={styled.admission_text}>
          <h2>Admissions</h2>
        </div>
      </div>
    </div>
  );
}
