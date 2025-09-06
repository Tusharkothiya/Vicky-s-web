import { Users, Target, BookOpen, MessageCircle, Trophy } from 'lucide-react';

const ClientStory = () => {
  const processSteps = [
    {
      number: "1",
      title: "Discovery Call",
      description: "We believe that when employers are supported and empowered.",
      icon: MessageCircle
    },
    {
      number: "2", 
      title: "Tailored Roadmap",
      description: "We believe that when employers are supported and empowered.",
      icon: Target
    },
    {
      number: "3",
      title: "Hands-On Preparation", 
      description: "We believe that when employers are supported and empowered.",
      icon: BookOpen
    },
    {
      number: "4",
      title: "Guided Interview Journey",
      description: "We believe that when employers are supported and empowered.",
      icon: Users
    },
    {
      number: "5",
      title: "Post-Placement Mentorship",
      description: "Continued coaching until you're thriving in your new role.",
      icon: Trophy
    }
  ];

  return (
    <div className="w-full bg-[#072E33] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        {/* Client Success Highlight Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20 lg:mb-32">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm sm:text-base font-medium text-teal-400 uppercase tracking-wider">
                CLIENT STORY
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Client Success Highlight
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              Transform your readiness into results through tailored coaching, hands-on training, and smart placement strategies that accelerate your success.
            </p>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">
                Zubin, DevOps Engineer
              </h3>
              <p className="text-teal-400 font-medium">
                perfectplacements.com
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="order-first lg:order-last">
            <div className="relative max-w-md mx-auto lg:max-w-full">
              {/* Main client image */}
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-slate-600 mx-auto bg-slate-700 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Zubin - DevOps Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Experience badge */}
                <div className="absolute -top-4 -right-4 lg:-right-8">
                  <div className="bg-teal-600 rounded-full w-24 h-24 lg:w-32 lg:h-32 flex flex-col items-center justify-center border-4 border-slate-800 shadow-xl">
                    <div className="text-2xl lg:text-3xl font-bold text-white">
                      10<span className="text-lg">+</span>
                    </div>
                    <div className="text-xs lg:text-sm text-center text-white font-medium leading-tight">
                      Years Of<br />Experience
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-teal-500/20 rounded-full blur-xl"></div>
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-500/20 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="space-y-12 lg:space-y-16">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              How It Works Our Simplified Path to Placement
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Process Steps */}
            <div className="space-y-8">
              {processSteps.slice(0, 3).map((step, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  {/* Step Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center border border-slate-600 group-hover:bg-teal-600 transition-colors duration-300">
                      <step.icon className="w-8 h-8 text-teal-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      {step.number}. {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Steps 4 & 5 for mobile */}
              <div className="lg:hidden space-y-8">
                {processSteps.slice(3, 5).map((step, index) => (
                  <div key={index + 3} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center border border-slate-600 group-hover:bg-teal-600 transition-colors duration-300">
                        <step.icon className="w-8 h-8 text-teal-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold text-white">
                        {step.number}. {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Steps 4 & 5 + Person Image (Desktop) */}
            <div className="hidden lg:block">
              <div className="space-y-8 mb-8">
                {processSteps.slice(3, 5).map((step, index) => (
                  <div key={index + 3} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center border border-slate-600 group-hover:bg-teal-600 transition-colors duration-300">
                        <step.icon className="w-8 h-8 text-teal-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold text-white">
                        {step.number}. {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Right Person Image */}
              <div className="flex justify-center lg:justify-end mt-8">
                <div className="relative">
                  <div className="w-64 h-80 rounded-2xl overflow-hidden border-4 border-slate-600 bg-slate-700 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Professional with tablet"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Glowing effect */}
                  <div className="absolute inset-0 w-64 h-80 rounded-2xl border-2 border-teal-400/30 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientStory;