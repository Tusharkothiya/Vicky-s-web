import { WhoWeAreImage } from "../../assets/Index";

const WhoWeAre = () => {
  return (
    <div className="w-full bg-[#ECE8E0] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content Section */}
          <div className="space-y-8 lg:space-y-12">
            {/* Section Label */}
            <div className="space-y-6">
              <p className="text-sm sm:text-base font-medium text-gray-600 uppercase tracking-wider">
                WHO WE ARE AND OUR MISSION
              </p>

              {/* Who We Are Section */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Who We Are?
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                  We are a collective of industry mentors, tech trainers, and
                  placement strategists who are as invested in your success as
                  you are—dedicated to navigating you from ambition to
                  achievement.
                </p>
              </div>
            </div>

            {/* Our Mission Section */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Our Mission
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                To empower ambitious technologists—students and professionals
                alike—with customized training, coaching, and placement
                opportunities that accelerate and elevate their career
                trajectory.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="order-first lg:order-last">
            <div className="relative">
              {/* Main image container */}
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={WhoWeAreImage}
                  alt="Professional handshake between colleagues"
                  className="w-full h-64 sm:h-full xl:h-[604px] object-cover"
                />

                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
