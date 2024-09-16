import { Link } from "react-router-dom";
import style from "./Main.module.css";

const Main = () => (
  <section className={style.mainContainer}>
    <div className={style.mainWrapper}>
      <h1 className={style.mainTitle}>Campers of your dreams</h1>
      <p className={style.mainText}>You can find everything you want in our catalog</p>
      <Link to="/catalog">
        <button type="button" className={style.mainButton}>
          View Now
        </button>
      </Link>
    </div>
  </section>
);

export default Main;
