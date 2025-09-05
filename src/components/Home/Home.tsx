import FAQS from "./FAQS";
import HeroSection from "./HeroSection";
import PopularServices from "./PopularServices";
import Testimonial from "./Testimonial";
import ValueProcess from "./ValueProcess";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PopularServices />
      <Testimonial />
      <ValueProcess />
      <WhyChooseUs />
      <FAQS />
    </div>
  );
};

export default Home;
