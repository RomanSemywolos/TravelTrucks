import style from "./Logo.module.css";
import icons from "../../assets/sprite.svg";
import { Link } from "react-router-dom";

// Константи для атрибутів SVG
const SVG_WIDTH = 136;
const SVG_HEIGHT = 16;
const LOGO_ID = "Logo";

const Logo = () => {
  return (
    <Link to="/" className={style.logo}>
      <svg width={SVG_WIDTH} height={SVG_HEIGHT}>
        <use href={`${icons}#${LOGO_ID}`} />
      </svg>
    </Link>
  );
};

export default Logo;
