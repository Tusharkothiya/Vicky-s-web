import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQSImage } from "../../assets/Index";

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exact services do you offer?",
      answer:
        "From bespoke interview training to deep-technical coaching and targeted placement assistance—everything is tailored to your career goals (perficientplacements.com).",
    },
    {
      question: "How does the planning process begin?",
      answer:
        "Our service offers personalized learning paths, industry-specific training, and direct connections with hiring partners. Unlike generic bootcamps, we focus on practical skills that employers actually need.",
    },
    {
      question: "What if technical skills are my weak point?",
      answer:
        "Yes, we have partnerships with over 500+ companies and maintain an 85% placement rate. Our career services team provides interview preparation, resume optimization, and direct introductions to hiring managers.",
    },
    {
      question: "Do you support me after training during job search?",
      answer:
        "Yes, we have partnerships with over 500+ companies and maintain an 85% placement rate. Our career services team provides interview preparation, resume optimization, and direct introductions to hiring managers.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#ECE8E0] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* FAQ Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                FAQs
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openIndex === index ? (
                          <ChevronUp className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        )}
                      </div>
                    </button>

                    {openIndex === index && (
                      <div className="px-6 pb-5">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:order-last">
            <div className="relative">
              {/* Main collage container */}
              <img
                src={FAQSImage}
                alt="FAQImage"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
