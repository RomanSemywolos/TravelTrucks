import { useSelector } from "react-redux";
import MainForm from "../MainForm/MainForm";
import Features from "../Features/Features";
import style from "./TruckFeatures.module.css";
import { selectTruck } from "../../redux/truck/truck.selectors";

// Компонент для відображення характеристик вантажівки
const TruckFeatures = () => {
  // Витягуємо дані про вантажівку з Redux store
  const truck = useSelector(selectTruck);

  // Компонент повертає розмітку з характеристиками вантажівки та формою клієнта
  return (
    <div className={style.feature}>
      <div className={style.featureWrapper}>
        <Features truck={truck} />
        <h3 className={style.equipmentTitle}>Vehicle details</h3>

        <div className={style.truckInfo}>
          {/* Виводимо характеристики вантажівки */}
          {[
            { label: "Form", value: truck.form },
            { label: "Length", value: truck.length },
            { label: "Width", value: truck.width },
            { label: "Height", value: truck.height },
            { label: "Tank", value: truck.tank },
            { label: "Consumption", value: truck.consumption },
          ].map(({ label, value }) => (
            <div key={label} className={style.truckCategory}>
              <p>{label}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <MainForm />
    </div>
  );
};

export default TruckFeatures;
