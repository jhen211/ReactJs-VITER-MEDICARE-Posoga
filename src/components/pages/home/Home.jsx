import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import Banner from "../banner/Banner";
import Emergency from "../emergency/Emergency";
import Services from "../services/Services";
import Doctors from "./doctors/Doctors";
import Pharmacy from "./pharmacy/Pharmacy";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Doctors />
      <Emergency />
      <Pharmacy />
      <Footer />
    </>
  );
};

export default Home;
