import { BagIcon, PopularServiceImage, UserPillorIcon } from "../../assets/Index";

const PopularServices = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-16">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-wide mb-4">
            POPULAR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto">
            What Makes Your Service Stand Out
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-1">
          {/* Service 1 - Precision-Crafted Career Coaching */}
          <div className="bg-[#ECE8E0] p-6 sm:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start space-x-4 flex-col gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-15 flex items-center justify-center">
                  <img src={UserPillorIcon} alt="UserIcon" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Precision-Crafted Career Coaching
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Personalized interview practice and portfolio building that
                  aligns with your strengths and the roles you aspire to.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 - Next-Gen Technical Mastery */}
          <div className="bg-[#ECE8E0] p-6 sm:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start space-x-4 flex-col gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-15 flex items-center justify-center">
                  <img src={UserPillorIcon} alt="UserIcon" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Next-Gen Technical Mastery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Hands-on workshops in in-demand tools and platforms—from AWS
                  and Kubernetes to cyber-security essentials—designed for
                  real-world readiness.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 - Strategic Job Alignment */}
          <div className="bg-[#ECE8E0] p-6 sm:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start space-x-4 flex-col gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-15 flex items-center justify-center">
                  <img src={BagIcon} alt="BagIcon" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Strategic Job Alignment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Smart placement services based on your skills, goals, and
                  preferred culture—not just any job, the right job.
                </p>
              </div>
            </div>
          </div>

          {/* Service 4 - Image Card */}
          <div className="bg-[#ECE8E0] shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className=" bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
              <img
                src={PopularServiceImage}
                alt="service-img"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
