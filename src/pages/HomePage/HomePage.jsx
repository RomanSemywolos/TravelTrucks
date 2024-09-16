import { Helmet } from "react-helmet-async";
import Main from "../../components/Main/Main";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Travel trucks</title>
      </Helmet>
      <Main />
    </>
  );
};

export default HomePage;
