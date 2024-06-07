import styled from "./admission.module.css";
import AdmissionBannar from "../../components/AdmissionBannar/index";
import AdmissionRules from "../../components/AdmissionRules/index";
import AdmissionForm from "../../components/AdmissionForm/index";
import Navbar from "../../components/Navbar/index";

const index = () => {
  return (
    <div className={styled.admission}>
      <div>
        <AdmissionBannar />
      </div>
      <div>
        <AdmissionRules />
      </div>
      <div>
        <AdmissionForm />
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default index;
