"use client";

import React from "react";

interface ValueCard {
  icon: string;
  title: string;
  description: string;
}

export default function AboutUs() {
  const values: ValueCard[] = [
    {
      icon: "🎯",
      title: "Mission-Driven",
      description: "Empowering financial well-being through expert guidance",
    },
    {
      icon: "🤝",
      title: "Customer-Centric",
      description: "Delivering personalized solutions tailored to your needs",
    },
    {
      icon: "📚",
      title: "Education-Focused",
      description: "Building financial literacy through quality training",
    },
    {
      icon: "✨",
      title: "Excellence",
      description: "Maintaining highest standards of compliance and ethics",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className=" mx-auto px-6 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-24">
        {/* Page Title */}
        <div className="text-center mb-20 sm:mb-24">
          <h1 className="text-4xl sm:text-5xl pb-20pxl lg:text-4xl font-bold text-[#1a4d6d] mb-6 leading-tight">
            About Us
          </h1>
          <div className="w-24 h-1 "></div>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mx-auto">
            Transforming financial futures through innovative solutions and
            comprehensive education.
          </p>
        </div>

        {/* Who We Are Section */}
        <div className="mb-20 sm:mb-24 fullpadding">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 lg:p-16 ">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4d6d] mb-8 text-center">
              Who We Are
            </h2>
            <div className="space-y-6 fullpadding">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Alpha5Academy is a comprehensive institution dedicated to
                providing innovative, secure, and customer-focused financial
                solutions. With a commitment to excellence, we've built a
                platform that bridges the gap between aspiring investors and the
                financial markets.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                In addition to our core services, Alpha5Academy offers
                professional training and certification courses designed to
                enhance financial literacy, industry knowledge, and practical
                skills. Our courses cover a wide range of subjects, including
                personal finance, investment strategies, risk management,
                fintech, and financial markets. These programs are developed by
                industry experts to help students, professionals, entrepreneurs,
                and organizations achieve their financial and professional
                goals.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20 sm:mb-24 fullpadding hover:border-[#f59e0b]">
          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 hover:shadow-xl transition-all duration-300 fullpadding ">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-20 h-20 bg-linear-to-br from-[#f59e0b] to-[#d97706] rounded-xl mb-8 shadow-md">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1a4d6d] mb-6">
                Our Mission
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
                Alpha5Academy is committed to empowering clients to achieve
                financial well-being by delivering reliable products, expert
                insights, and personalised support while maintaining the highest
                standards of regulatory compliance and ethical conduct.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 hover:shadow-xl transition-all duration-300 fullpadding hover:border-[#f59e0b]">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-20 h-20 bg-linear-to-br from-[#1a4d6d] to-[#2b6b93] rounded-xl mb-8 shadow-md">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1a4d6d] mb-6">
                Our Vision
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
                To become a leading platform for financial education and
                investment solutions, creating a community of financially
                literate individuals who make informed decisions, build
                sustainable wealth, and contribute positively to the economic
                growth of the nation.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20 sm:mb-24 fullpadding">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4d6d] mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-linear-to-r  mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 fullpadding">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 border-b-4 border-transparent hover:border-[#f59e0b]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h4 className="text-xl font-bold text-[#1a4d6d] mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        {/* <div className="bg-gradient-to-r from-[#1a4d6d] to-[#2b6b93] rounded-2xl shadow-xl p-8 sm:p-12 lg:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Alpha5Academy?
            </h2>
            <div className="w-20 h-1 bg-[#f59e0b] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-4">
                Expert Team
              </h4>
              <p className="text-gray-100 leading-relaxed">
                Industry professionals with years of experience
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-4">
                Comprehensive Courses
              </h4>
              <p className="text-gray-100 leading-relaxed">
                From basics to advanced financial education
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-4">
                Trusted Platform
              </h4>
              <p className="text-gray-100 leading-relaxed">
                Regulated and committed to ethical standards
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-4">
                Personalized Support
              </h4>
              <p className="text-gray-100 leading-relaxed">
                Dedicated assistance for your financial goals
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-4">
                Market A-Z Resource
              </h4>
              <p className="text-gray-100 leading-relaxed">
                Complete guide to Indian stock markets
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-4">
                Community Driven
              </h4>
              <p className="text-gray-100 leading-relaxed">
                Join a network of financially aware individuals
              </p>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}
