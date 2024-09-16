import { Circles } from "react-loader-spinner";
import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style.loader}>
      <Circles
        height="100"
        width="100"
        color="rgb(228, 72, 72)"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
