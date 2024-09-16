import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import clsx from "clsx";

// Функція для визначення активного класу
const getActiveLinkClass = ({ isActive }) =>
  clsx(style.navLink, isActive && style.active);

const Navigation = () => (
  <nav className={style.nav}>
    <NavLink to="/" className={getActiveLinkClass}>
      Home
    </NavLink>
    <NavLink to="/catalog" className={getActiveLinkClass}>
      Catalog
    </NavLink>
  </nav>
);

export default Navigation;
