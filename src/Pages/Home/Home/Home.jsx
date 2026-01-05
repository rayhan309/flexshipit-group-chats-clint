// import { useContext } from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Features from "../Features/Features";
import Pricing from "../Pricing/Pricing";
import Testimonials from "../Testimonials/Testimonials";
// import { AuthContext } from "../../../Context/AuthContext";

const Home = () => {
    // const user = useContext(AuthContext);
    // console.log(user);
  return (
    <div>
      <Banner />
      <Features />
      <Testimonials />
      <Pricing />
      <About />
      <FAQ />
    </div>
  );
};

export default Home;
