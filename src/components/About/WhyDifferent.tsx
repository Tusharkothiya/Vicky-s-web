import { UserImage } from "../../assets/Index";

const WhyDifferent = () => {
  const features = [
    {
      title: "True-to-You Coaching",
      description:
        "No cookie-cutter approach—just strategies and training customized to your strengths and goals",
      position: "top-left",
    },
    {
      title: "Support That Sticks",
      description:
        "Guidance doesn't stop at training—it continues through interviews, job offers, and beyond.",
      position: "bottom-left",
    },
    {
      title: "Community That Cares",
      description:
        "Join an ecosystem of peers, mentors, and alumni who support and celebrate each other.",
      position: "top-right",
    },
    {
      title: "Innovative Delivery",
      description:
        "We embrace modern tools, dynamic techniques, and agile learning formats tailored for today's tech landscape.",
      position: "bottom-right",
    },
    {
      title: "Unfiltered Industry Access",
      description:
        "Gain entry to hidden opportunities at top-tier companies—not just the visible ones.",
      position: "center",
    },
  ];

  return (
    <div className="w-full bg-[#163838] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Why We're Different
          </h2>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {/* Person Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-1 border-white">
                <img
                  src={UserImage}
                  alt="Professional mentor"
                  className="w-full h-full object-contain"
                />
              </div>
             
            </div>
          </div>

          {/* Feature Cards */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#184545] backdrop-blur-sm border border-slate-600 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative max-w-6xl mx-auto">
            {/* Central Person Image - Rectangular */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 mt-25">
              <div className="relative">
                <div className=" overflow-hidden">
                  <img
                    src={UserImage}
                    alt="Professional mentor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Feature Cards positioned around the image */}
            <div className="relative min-h-[700px] flex items-center justify-center">
              {/* Top Left Card */}
              <div className="absolute top-42 -left-18 w-90 bg-[#184545] backdrop-blur-sm border border-slate-600 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 transform z-10">
                <h3 className="text-xl font-bold text-white mb-3">
                  True-to-You Coaching
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  No cookie-cutter approach—just strategies and training
                  customized to your strengths and goals
                </p>
              </div>

              {/* Top Right Card */}
              <div className="absolute top-42 -right-18 w-90 bg-[#184545] backdrop-blur-sm border border-slate-600 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 transform z-10">
                <h3 className="text-xl font-bold text-white mb-3">
                  Community That Cares
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Join an ecosystem of peers, mentors, and alumni who support
                  and celebrate each other.
                </p>
              </div>

              {/* Bottom Left Card */}
              <div className="absolute bottom-0 -left-18 w-90 bg-[#184545] backdrop-blur-sm border border-slate-600 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 transform z-10">
                <h3 className="text-xl font-bold text-white mb-3">
                  Support That Sticks
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Guidance doesn't stop at training—it continues through
                  interviews, job offers, and beyond.
                </p>
              </div>

              {/* Bottom Right Card */}
              <div className="absolute bottom-0 -right-18 w-90 bg-[#184545] backdrop-blur-sm border border-slate-600 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 transform z-10">
                <h3 className="text-xl font-bold text-white mb-3">
                  Innovative Delivery
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  We embrace modern tools, dynamic techniques, and agile
                  learning formats tailored for today's tech landscape.
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDifferent;
