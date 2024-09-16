import { useSelector } from "react-redux";
import style from "./TruckInfo.module.css";
import { selectTruck } from "../../redux/truck/truck.selectors";
import icons from "../../assets/sprite.svg";
import clsx from "clsx";
import { NavLink, Route, Routes } from "react-router-dom";
import TruckFeatures from "../TruckFeatures/TruckFeatures";
import TruckReviews from "../TruckReviews/TruckReviews";

// Function to determine if a link is active
const activeLink = ({ isActive }) =>
  clsx(style.details_link, isActive && style.active);

const TruckInfo = () => {
  // Fetch the selected truck data from the Redux store
  const truck = useSelector(selectTruck);

  // Render truck details
  return (
    <>
      {/* Truck name */}
      <h2 className={style.name_title}>{truck.name}</h2>

      {/* Truck rating and location */}
      <div className={style.rating_wrapper}>
        <svg className={style.icon} width="16" height="16">
          <use href={`${icons}#icon-Rating`} />
        </svg>
        <p className={style.reviews}>
          {truck.rating} ({truck.reviews ? truck.reviews.length : 0} Reviews)
        </p>
        <svg className={style.icon} width="20" height="20">
          <use href={`${icons}#Map`} />
        </svg>{" "}
        {truck.location}
      </div>

      {/* Truck price */}
      <p className={style.name_title}>{`€ ${Number(truck.price).toFixed(
        2
      )}`}</p>

      {/* Truck gallery */}
      {truck.gallery.length > 0 ? (
        <ul className={style.gallery}>
          {truck.gallery.map((item, index) => (
            <li key={index}>
              <img
                className={style.photo}
                src={item.thumb}
                alt={`Gallery image ${index + 1}`}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No images available.</p>
      )}

      {/* Truck description */}
      <p className={style.item_description}>{truck.description}</p>

      {/* Navigation links */}
      <ul className={style.details_list}>
        <li className={style.details_item}>
          <NavLink className={activeLink} to="features">
            Features
          </NavLink>
        </li>
        <li className={style.details_item}>
          <NavLink className={activeLink} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>

      {/* Nested routes */}
      <Routes>
        <Route path="/" element={<TruckFeatures />} /> {/* Default page */}
        <Route path="features" element={<TruckFeatures />} />
        <Route path="reviews" element={<TruckReviews />} />
      </Routes>
    </>
  );
};

export default TruckInfo;
