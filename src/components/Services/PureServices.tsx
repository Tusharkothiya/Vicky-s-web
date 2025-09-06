import { FileText, Globe, Target } from "lucide-react";
import { BagIcon } from "../../assets/Index";

const PureServices = () => {
  const processSteps = [
    {
      id: 1,
      title: "Personalized Interview Coaching",
      description:
        "Tailored feedback and mock sessions designed to bolster your strengths—and bridge gaps—so you can walk into interviews with confidence and clarity.",
      icon: Globe,
    },
    {
      id: 2,
      title: "Focused Technical Upskilling",
      description:
        "Deep-dive sessions that sharpen your expertise—whether it's Full-Stack Development, Cloud Deployment, Cybersecurity, or Data Pipelines—so you stay ahead in a fast-paced tech world.",
      icon: FileText,
    },
    {
      id: 3,
      title: "Strategic Job Alignment & Placement",
      description:
        "We don’t just help you apply; we help you align—with roles, organizations, and environments that amplify both your skills and your long-term potential.",
      icon: Target,
    },
  ];
  return (
    <section className="bg-[#F9FAFB] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#121212] font-semibold text-sm uppercase tracking-wide mb-4">
            Pur services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212]">
            Our Signature Services
          </h2>
        </div>

        {/* Process Steps */}
        <div className="space-y-4">
          {processSteps.map((step, index) => {
            return (
              <div
                key={index}
                className="bg-[#ECE8E0] rounded-2xl p-6 lg:p-8 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className=" rounded-xl flex items-center justify-center">
                      <img
                        src={BagIcon}
                        alt="BagIcon"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                      {step.id}. {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PureServices;
