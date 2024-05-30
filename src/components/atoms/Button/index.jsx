import styled from "./button.module.css";

const Button = (props) => {
  const { children } = props;
  return <div className={styled.main_btn}>{children}</div>;
};

export default Button;
