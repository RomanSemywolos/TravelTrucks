import { Link } from "react-router-dom";
import style from "./TruckItem.module.css";
import icons from "../../assets/sprite.svg";
import Features from "../Features/Features";
import { useDispatch, useSelector } from "react-redux";
import { selectFavourites } from "../../redux/favourites/favourites.selectors";
import { toggleFavourite } from "../../redux/favourites/favourites.slice";

// Компонент для відображення інформації про вантажівку
const TruckItem = ({ truck }) => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);

  // Перевіряємо, чи є вантажівка у списку обраного
  const isFavourite = favourites.includes(truck.id);

  // Обробник для перемикання обраного статусу вантажівки
  const handleToggleFavourite = () => {
    dispatch(toggleFavourite(truck.id));
  };

  // Рендеринг компонента
  return (
    <div className={style.itemWrapper}>
      {/* Виводимо фотографію вантажівки, якщо вона є */}
      {truck.gallery?.[0]?.thumb && (
        <img
          className={style.photo}
          src={truck.gallery[0].thumb}
          width="292"
          alt={truck.name}
        />
      )}
      <div className={style.infoWrapper}>
        <div className={style.nameWrapper}>
          <h2 className={style.nameTitle}>{truck.name}</h2>
          <div className={style.favouriteWrapper}>
            <p>{`€ ${Number(truck.price).toFixed(2)}`}</p>
            <svg
              width="26"
              height="24"
              onClick={handleToggleFavourite}
              fill={isFavourite ? "#e44848" : "#101828"}
              cursor="pointer"
            >
              <use href={`${icons}#heart`} />
            </svg>
          </div>
        </div>
        <div className={style.ratingWrapper}>
          <svg width="16" height="16">
            <use href={`${icons}#icon-Rating`} />
          </svg>
          <p className={style.reviews}>
            {truck.rating} ({truck.reviews.length} Reviews)
          </p>
          <svg width="20" height="20">
            <use href={`${icons}#Map`} />
          </svg>
          {truck.location}
        </div>
        <p className={style.itemDescription}>
          {truck.description.substring(0, 60) + "..."}
        </p>
        <Features truck={truck} />
        <Link to={`/catalog/${truck.id}`}>
          <button type="button" className={style.itemButton}>
            Show more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TruckItem;
