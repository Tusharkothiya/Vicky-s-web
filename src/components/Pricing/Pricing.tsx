import FAQS from "./FAQS";
import Hero from "./Hero";
import Packages from "./Packages";
import SuccessStory from "./SuccessStory";
import WhyChoosePlan from "./WhyChoosePlan";

const Pricing = () => {
  return (
    <div>
      <Hero />
      <Packages />
      <WhyChoosePlan />
      <SuccessStory />
      <FAQS />
    </div>
  );
};

export default Pricing;
