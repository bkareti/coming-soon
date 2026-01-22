"use client";

export default function ServicesDirectory() {
  const services = [
    {
      id: 1,
      title: "Workshops",
      description:
        "Interactive sessions designed to enhance your trading knowledge and skills through hands-on learning experiences.",
      icon: "🎓",
      features: [
        "Live trading sessions",
        "Market analysis techniques",
        "Risk management strategies",
        "Q&A with expert traders",
      ],
    },
    {
      id: 2,
      title: "Wealth Management",
      description:
        "Personalized financial planning and investment strategies tailored to help you achieve your long-term financial goals.",
      icon: "💰",
      features: [
        "Portfolio management",
        "Investment advisory",
        "Tax planning guidance",
        "Retirement planning",
      ],
    },
    {
      id: 3,
      title: "Estate Planning",
      description:
        "Strategic planning services to help you manage and protect your assets for future generations.",
      icon: "📋",
      features: [
        "Asset protection strategies",
        "Wealth transfer planning",
        "Legacy preservation",
        "Legal compliance guidance",
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 p-5">
      <div className="fullpadding mx-auto">
        {/* Page Header */}
        <div className="text-center mb-20 sm:mb-24">
          <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-[#1a4d6d] mb-6 leading-tight">
            Professional Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Comprehensive financial services designed to empower your investment
            journey and secure your financial future
          </p>
        </div>

        {/* Services Cards */}
        <section className="pt-5 mb-20 sm:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="bg-linear-to-r from-[#1a4d6d] to-[#2b6b93] text-white p-6 sm:p-8 text-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-3">
                      Key Features
                    </p>
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-[#f59e0b] mr-2 mt-1">✓</span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                  <button className="w-full py-3 bg-linear-to-r from-[#f59e0b] to-[#d97706] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
