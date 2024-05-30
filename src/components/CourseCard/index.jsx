import styled from "./coursecard.module.css";
import CardImg from "../../assets/utils/DataObjects";
import { FaPlus } from "react-icons/fa6";

const CourseCard = () => {
  const images = CardImg;

  return (
    <div className={styled.course_box}>
      <div className={styled.card_head}>
        {images.map((items) => {
          return (
            <div className={styled.card} key={items.id}>
              <div className={styled.effects}>
                <img src={items.url} alt="items.name" />
              </div>
              <FaPlus className={styled.plus} />
              <div className={styled.card_text}>
                <h4>{items.name}</h4>
                <p>{items.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCard;
