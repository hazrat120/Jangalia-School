import styled from "./whatweare.module.css";
import Button from "../atoms/Button/index";

const index = () => {
  return (
    <div className={styled.whatweare}>
      <div className="container">
        <div className={styled.whatweare_wrapper}>
          <div className={styled.whatweare_textpart}>
            <h3>What we are</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages.
            </p>
            <div>
              <Button>VIEW OUR COURSE</Button>
            </div>
          </div>

          <div className={styled.whatweare_imagepart}>
            <img src="/public/images/welcome-img.jpg.png" alt="welcome image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
