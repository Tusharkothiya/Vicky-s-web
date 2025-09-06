import React from 'react';

const WhyChoosePlan: React.FC = () => {
  return (
    <div className="w-full bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Why Choose Our Plans?
          </h2>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block">
          <div className="overflow-hidden">
            <table className="w-full">
              {/* Header Row */}
              <thead>
                <tr>
                  <th className="bg-stone-300 px-6 py-6 text-left text-lg font-semibold text-gray-700 border-r border-white">
                    Feature
                  </th>
                  <th className="bg-stone-300 px-6 py-6 text-center text-lg font-semibold text-gray-700 border-r border-white">
                    Starter
                  </th>
                  <th className="bg-stone-300 px-6 py-6 text-center text-lg font-semibold text-gray-700 border-r border-white">
                    Accelerator
                  </th>
                  <th className="bg-stone-300 px-6 py-6 text-center text-lg font-semibold text-gray-700">
                    Premium
                  </th>
                </tr>
              </thead>
              
              {/* Feature Rows */}
              <tbody>
                <tr>
                  <td className="bg-stone-200 px-6 py-6 text-gray-700 font-medium border-r border-white">
                    Mock Interviews
                  </td>
                  <td className="bg-stone-200 px-6 py-6 text-center text-gray-700 border-r border-white">
                    3
                  </td>
                  <td className="bg-stone-200 px-6 py-6 text-center text-gray-700 border-r border-white">
                    5+ Behavioral
                  </td>
                  <td className="bg-stone-200 px-6 py-6 text-center text-gray-700">
                    Unlimited
                  </td>
                </tr>
                
                <tr>
                  <td className="bg-stone-300 px-6 py-6 text-gray-700 font-medium border-r border-white">
                    Technical Modules
                  </td>
                  <td className="bg-stone-300 px-6 py-6 text-center text-gray-700 border-r border-white">
                    2
                  </td>
                  <td className="bg-stone-300 px-6 py-6 text-center text-gray-700 border-r border-white">
                    4
                  </td>
                  <td className="bg-stone-300 px-6 py-6 text-center text-gray-700">
                    Full Access
                  </td>
                </tr>
                
                <tr>
                  <td className="bg-stone-200 px-6 py-6 text-gray-700 font-medium border-r border-white">
                    Resume & LinkedIn Support
                  </td>
                  <td className="bg-stone-200 px-6 py-6 text-center text-gray-700 border-r border-white">
                    Basic
                  </td>
                  <td className="bg-stone-200 px-6 py-6 text-center text-gray-700 border-r border-white">
                    Enhanced
                  </td>
                  <td className="bg-stone-200 px-6 py-6 text-center text-gray-700">
                    Full Revamp
                  </td>
                </tr>
                
                <tr>
                  <td className="bg-stone-300 px-6 py-6 text-gray-700 font-medium border-r border-white">
                    Post-Training Support
                  </td>
                  <td className="bg-stone-300 px-6 py-6 text-center text-gray-700 border-r border-white">
                    14 Days
                  </td>
                  <td className="bg-stone-300 px-6 py-6 text-center text-gray-700 border-r border-white">
                    30 Days
                  </td>
                  <td className="bg-stone-300 px-6 py-6 text-center text-gray-700">
                    Until Placement
                  </td>
                </tr>
                
                <tr>
                  <td className="bg-stone-200 px-6 py-6 text-gray-700 font-medium border-r border-white">
                    Pricing Tier
                  </td>
                  <td className="bg-stone-200 px-6 py-6 text-center text-gray-700 border-r border-white">
                    Entry-Level
                  </td>
                  <td className="bg-stone-200 px-6 py-6 text-center text-gray-700 border-r border-white">
                    Mid
                  </td>
                  <td className="bg-stone-200 px-6 py-6 text-center text-gray-700">
                    All-Inclusive
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-6">
          {/* Starter Plan */}
          <div className="bg-stone-200 rounded-lg overflow-hidden">
            <div className="bg-stone-300 px-6 py-4">
              <h3 className="text-xl font-bold text-center text-gray-700">
                Starter
              </h3>
            </div>
            <div className="px-6 py-4 space-y-3">
              <div className="flex justify-between py-2">
                <span className="text-gray-700 font-medium">Mock Interviews</span>
                <span className="text-gray-700">3</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700 font-medium">Technical Modules</span>
                <span className="text-gray-700">2</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700 font-medium">Resume & LinkedIn Support</span>
                <span className="text-gray-700">Basic</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700 font-medium">Post-Training Support</span>
                <span className="text-gray-700">14 Days</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700 font-medium">Pricing Tier</span>
                <span className="text-gray-700">Entry-Level</span>
              </div>
            </div>
          </div>

          {/* Accelerator Plan */}
          <div className="bg-stone-200 rounded-lg overflow-hidden">
            <div className="bg-stone-300 px-6 py-4">
              <h3 className="text-xl font-bold text-center text-gray-700">
                Accelerator
              </h3>
            </div>
            <div className="px-6 py-4 space-y-3">
              <div className="flex justify-between py-2">
                <span className="text-gray-700 font-medium">Mock Interviews</span>
                <span className="text-gray-700">5+ Behavioral</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700 font-medium">Technical Modules</span>
                <span className="text-gray-700">4</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700 font-medium">Resume & LinkedIn Support</span>
                <span className="text-gray-700">Enhanced</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700 font-medium">Post-Training Support</span>
                <span className="text-gray-700">30 Days</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700 font-medium">Pricing Tier</span>
                <span className="text-gray-700">Mid</span>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-stone-200 rounded-lg overflow-hidden">
            <div className="bg-stone-300 px-6 py-4">
              <h3 className="text-xl font-bold text-center text-gray-700">
                Premium
              </h3>
            </div>
            <div className="px-6 py-4 space-y-3">
              <div className="flex justify-between py-2">
                <span className="text-gray-700 font-medium">Mock Interviews</span>
                <span className="text-gray-700">Unlimited</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700 font-medium">Technical Modules</span>
                <span className="text-gray-700">Full Access</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700 font-medium">Resume & LinkedIn Support</span>
                <span className="text-gray-700">Full Revamp</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700 font-medium">Post-Training Support</span>
                <span className="text-gray-700">Until Placement</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700 font-medium">Pricing Tier</span>
                <span className="text-gray-700">All-Inclusive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoosePlan;