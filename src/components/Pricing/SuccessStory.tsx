import { Star } from "lucide-react";
import { TestimonialImage } from "../../assets/Index";

const SuccessStory = () => {
  return (
    <section className="bg-[#072E33] py-16 lg:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-teal-300 font-semibold text-sm uppercase tracking-wide mb-4">
            SUCCESS STORY
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Featured Success
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Content - Testimonial */}
          <div className="order-2 lg:order-1 h-full ">
            <div className="bg-[#ECE8E0] h-full flex items-start justify-center flex-col p-8 lg:p-10 shadow-lg">
              {/* Star Rating */}
              <div className="flex items-center mb-6 gap-2">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 text-[#072E33] fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-800 text-lg lg:text-xl leading-relaxed mb-8">
                The Accelerator Plan transformed my job prepstructured coaching
                and strategic job alignment helped me land a role at a top IT
                firm within weeks!
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">R</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-lg">Rohan</h4>
                  <p className="text-gray-600 text-sm">DevOps Engineer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 h-full">
            <div className="relative">
              <div className="aspect-[5/3] overflow-hidden shadow-2xl">
                {/* Placeholder image - replace with your actual image */}
                <div className="bg-gradient-to-br from-gray-200 to-gray-400 relative">
                  <img
                    src={TestimonialImage}
                    alt="testimonal"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
