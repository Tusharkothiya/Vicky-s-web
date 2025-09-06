import { Background } from "../../assets/Index";

const Hero = () => {
  return (
    <div className="relative  flex items-center justify-start p-5 px-0 sm:px-20 sm:p-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={Background}
          alt="Person writing with pen"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 lg:mb-8">
              Empower Your Next Move with Bespoke Tech Services
            </h1>

            {/* Subtitle/Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl">
              Transform your readiness into results through tailored coaching,
              hands-on training, and smart placement strategies that accelerate
              your success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
