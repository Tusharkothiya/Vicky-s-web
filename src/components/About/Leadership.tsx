import { Check } from 'lucide-react';

const Leadership = () => {
  const leaders = [
    {
      name: "Same Kane",
      position: "Chief Visionary & Founder",
      description: "A tech leader with a heart for mentoring, driven to help emerging professionals achieve their full potential.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Same Kane",
      position: "Chief Strategy & Operations",
      description: "Architect of smooth experiences from learning modules to placement milestones.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Alex Johnson",
      position: "Head of Technology",
      description: "Innovation driver with expertise in cutting-edge technologies and scalable learning platforms.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Sarah Mitchell",
      position: "Director of Placements",
      description: "Connecting talent with opportunity through strategic industry partnerships and personalized career guidance.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm sm:text-base font-medium text-gray-600 uppercase tracking-wider mb-4">
            HOW DOES WE WORK
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Meet Our Leadership
          </h2>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">
          {leaders.map((leader, index) => (
            <div 
              key={index}
              className="group text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Profile Image Container */}
              <div className="relative mx-auto mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  {/* Main circular image */}
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Check mark badge */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                  </div>
                  
                  {/* Decorative ring */}
                  <div className="absolute inset-0 w-full h-full rounded-full border-2 border-teal-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>

                {/* Decorative dot */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                </div>
              </div>

              {/* Leader Info */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {leader.name}
                </h3>
                <p className="text-sm sm:text-base font-medium text-gray-600 uppercase tracking-wide">
                  {leader.position}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xs mx-auto">
                  {leader.description}
                </p>
              </div>

              {/* Optional LinkedIn or contact button */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-teal-600 hover:text-teal-700 font-medium text-sm border border-teal-200 hover:border-teal-300 px-4 py-2 rounded-full transition-colors duration-200">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA Section */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Work with Our Team?
            </h3>
            <p className="text-gray-600 mb-6">
              Our leadership team is committed to your success. Get started on your journey today.
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;