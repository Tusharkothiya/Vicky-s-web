import { HeroImage } from "../../assets/Index";

const HeroSection = () => {
  return (
    <section className="bg-[#072E33] text-white flex items-center">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Accelerate Your Success: Redefining Your Career Launch with
              Bespoke Tech Coaching
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Transform your potential into performance with tailored training
              and expert support—designed around you.
            </p>
            <hr className="text-[#DADADA]" />
            <div className="pt-4">
              <button className="bg-white cursor-pointer text-teal-900 px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold  sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Schedule Your Breakthrough Session
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <img src={HeroImage} alt="heroImage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
