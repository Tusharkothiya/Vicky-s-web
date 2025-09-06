import { WhyChooseUserImage } from "../../assets/Index";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#072E33] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2   lg:min-h-[600px]">
          {/* Left Content - Image */}
          <div className="relative order-2 lg:order-1 overflow-hidden hidden xl:block">
            {/* Image container with top overflow only */}
            <div className="absolute inset-0 lg:top-0 lg:bottom-0">
              <img
                src={WhyChooseUserImage}
                alt="Professional businessman presenting solutions"
                className="w-full h-full object-cover object-center lg:object-top"
              />
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="order-1 lg:order-2 flex items-center px-4 sm:px-6 lg:px-8 py-16 xl:py-1 lg:py-4">
            <div className="w-full space-y-6 lg:space-y-8">
              {/* Header */}
              <div>
                <p className="text-teal-300 font-semibold text-sm uppercase tracking-wide mb-4">
                  WHY CHOOSE US
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                  Who We Empower (Instead of Client Logos)
                </h2>
              </div>

              {/* Target Industries */}
              <div className="space-y-4">
                <p className="text-white text-lg lg:text-xl font-medium">
                  Target industries or profiles:
                </p>

                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-3 mt-1 text-lg">•</span>
                    <span className="text-base lg:text-lg">
                      Product-Focused Tech Startups
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-3 mt-1 text-lg">•</span>
                    <span className="text-base lg:text-lg">
                      MNCs' R&D Teams
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-300 mr-3 mt-1 text-lg">•</span>
                    <span className="text-base lg:text-lg">
                      Cloud, Cybersecurity, Data Engineering Cohorts
                    </span>
                  </li>
                </ul>
              </div>

              {/* Quote */}
              <div className="pt-4">
                <p className="text-gray-200 text-base lg:text-lg leading-relaxed">
                  Or simply:{" "}
                  <span className="text-white font-medium">
                    "Candidates placed in leading global tech companies across
                    sectors—from fintech to deep-tech innovation."
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
