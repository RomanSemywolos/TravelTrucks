import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchTruckDetails } from "../../redux/truck/operations";
import style from "./DetailsPage.module.css";
import TruckInfo from "../../components/TruckInfo/TruckInfo";
import { Toaster } from "react-hot-toast";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Завантаження деталей вантажівки при зміні id
  useEffect(() => {
    if (id) {
      dispatch(fetchTruckDetails(id));
    }
  }, [dispatch, id]);

  return (
    <>
      <Helmet>
        <title>Details</title>
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />
      <section className={style.detailed_container}>
        <TruckInfo />
      </section>
    </>
  );
};

export default DetailsPage;
