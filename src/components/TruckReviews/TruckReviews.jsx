import { useSelector } from "react-redux";
import MainForm from "../MainForm/MainForm";
import style from "./TruckReviews.module.css";
import { selectTruck } from "../../redux/truck/truck.selectors";
import icons from "../../assets/sprite.svg";
import { nanoid } from "nanoid";

const TruckReviews = () => {
  const truck = useSelector(selectTruck);
  const totalStars = 5; // Кількість зірок для оцінки

  // Рендеринг списку відгуків
  return (
    <div className={style.review}>
      <ul className={style.list}>
        {/* Перевірка наявності відгуків */}
        {truck.reviews.length === 0 ? (
          <p>Sorry, there are no reviews!</p>
        ) : (
          truck.reviews.map((item) => (
            <li className={style.listItem} key={nanoid()}>
              <div className={style.reviewerWrapper}>
                {/* Блок з інформацією про рецензента */}
                <div className={style.reviewerName}>
                  {item.reviewer_name.charAt(0)}
                </div>
                <div>
                  <h3>{item.reviewer_name}</h3>
                  {/* Рендеринг зірок */}
                  {[...Array(totalStars)].map((_, starIndex) => (
                    <svg
                      width="16"
                      height="16"
                      fill={
                        starIndex < item.reviewer_rating ? "#ffc531" : "#f2f4f7"
                      }
                      key={nanoid()}
                    >
                      <use href={`${icons}#icon-Rating-1`} />
                    </svg>
                  ))}
                </div>
              </div>
              <p className={style.comment}>{item.comment}</p>
            </li>
          ))
        )}
      </ul>
      <MainForm />
    </div>
  );
};

export default TruckReviews;
