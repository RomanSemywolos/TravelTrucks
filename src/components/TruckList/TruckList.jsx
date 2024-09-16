import style from "./TruckList.module.css";
import TruckItem from "../TruckItem/TruckItem";
import { useSelector } from "react-redux";
import { isLoading } from "../../redux/truck/truck.selectors";
import Loader from "../Loader/Loader";

// Компонент для відображення списку вантажівок
const TruckList = ({ filteredTrucks }) => {
  const loading = useSelector(isLoading);

  // Показує компонент Loader під час завантаження
  if (loading) {
    return <Loader />;
  }

  // Показує повідомлення, якщо немає вантажівок для відображення
  if (filteredTrucks.length === 0) {
    return <p className={style.text}>Sorry, there are no campers!</p>;
  }

  // Рендеринг списку вантажівок
  return (
    <ul className={style.list}>
      {filteredTrucks.map((item) => (
        <li className={style.listItem} key={item.id}>
          <TruckItem truck={item} />
        </li>
      ))}
    </ul>
  );
};

export default TruckList;
