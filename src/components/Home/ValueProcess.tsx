import { Globe, FileText, Target, MessageCircle, Users } from 'lucide-react';
import { BagIcon } from '../../assets/Index';

const ValueProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: "Connect & Clarify",
      description: "Book a quick discovery call to align your career goals and challenges.",
      icon: Globe
    },
    {
      id: 2,
      title: "Design Your Plan",
      description: "Receive a personalized roadmap covering resume polishing, mock interviews, and technical upskilling.",
      icon: FileText
    },
    {
      id: 3,
      title: "Train with Precision",
      description: "Deep-dive sessions, hands-on projects, feedback loops.",
      icon: Target
    },
    {
      id: 4,
      title: "Interview Boldly",
      description: "Strategically coached outreach, guidance on rock-solid interviewing skills, plus post-interview debriefs.",
      icon: MessageCircle
    },
    {
      id: 5,
      title: "Ongoing Partner",
      description: "We stay by your side until you're placed and beyond.",
      icon: Users
    }
  ];

  return (
    <section className="bg-[#F9FAFB] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#121212] font-semibold text-sm uppercase tracking-wide mb-4">
            VALUE PROCESS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121212]">
            Your Value-Driven Process
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
                      <img src={BagIcon} alt="BagIcon" className='h-full w-full object-cover' />
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

export default ValueProcess;