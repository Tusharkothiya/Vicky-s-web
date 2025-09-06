import { Check, Layers, Zap, Crown } from 'lucide-react'

const Packages = () => {
  const packages = [
    {
      id: 'starter',
      name: 'Starter Plan',
      icon: <Layers className="w-8 h-8 text-gray-700" />,
      description: 'A perfect launchpad for those seeking foundational support.',
      isPopular: false,
      bgColor: 'bg-white',
      buttonColor: 'bg-[#163838] hover:bg-gray-900 text-white',
      features: [
        'Access to 3 tailored mock interview sessions',
        '2 technical coaching modules',
        'Custom feedback on one resume or LinkedIn update',
        'Email support for 14 days post-training'
      ]
    },
    {
      id: 'accelerator',
      name: 'Accelerator Plan',
      icon: <Zap className="w-8 h-8 text-white" />,
      description: 'For motivated individuals aiming for targeted results fast.',
      isPopular: true,
      bgColor: 'bg-[#163838]',
      buttonColor: 'bg-[#163838] hover:bg-emerald-600 text-white border border-white',
      textColor: 'text-white',
      features: [
        'All Starter features',
        'Employee handbook-5 mock interviews + behavioral coaching& creation',
        '4 technical modules',
        'Enhanced resume & LinkedIn optimization',
        'Priority email and phone support for 30 days'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      icon: <Crown className="w-8 h-8 text-gray-700" />,
      description: 'Comprehensive support for ambitious candidates ready to conquer.',
      isPopular: false,
      bgColor: 'bg-white',
      buttonColor: 'bg-[#163838] hover:bg-gray-900 text-white',
      features: [
        'Unlimited mock interviews',
        'Full-suite technical training across multiple domains',
        'End-to-end resume, portfolio, and LinkedIn revamp',
        'Direct job placement strategy consultations',
        'Ongoing guidance until you\'re placed'
      ]
    }
  ]

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
            PRICING PACKAGE
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Offerings
          </h2>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`${pkg.bgColor} rounded-2xl shadow-lg overflow-hidden relative transform hover:scale-105 transition-transform duration-300`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Popular
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className="mb-6">
                  {pkg.icon}
                </div>

                {/* Plan Name */}
                <h3 className={`text-2xl font-bold mb-3 ${pkg.textColor || 'text-gray-900'}`}>
                  {pkg.name}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-8 ${pkg.textColor ? 'text-gray-200' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${pkg.textColor ? 'text-emerald-300' : 'text-emerald-600'}`} />
                      <span className={`text-sm ${pkg.textColor ? 'text-gray-200' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-lg font-medium text-sm transition-colors duration-200 cursor-pointer ${pkg.buttonColor}`}>
                  Choose Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Packages