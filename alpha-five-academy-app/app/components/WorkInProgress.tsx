"use client";

import { useEffect, useState } from "react";

interface WorkInProgressProps {
  title: string;
  description: string;
  icon?: string;
}

export default function WorkInProgress({
  title,
  description,
  icon = "🚀",
}: WorkInProgressProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh-200px)] bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Main Container */}
        <div
          className={`text-center transform transition-all duration-1000 ${
            animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Animated Icon */}
          <div
            className={`inline-block mb-8 transform transition-transform duration-1000 ${
              animate ? "scale-100 rotate-0" : "scale-0 -rotate-12"
            }`}
          >
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 bg-linear-to-r from-[#f59e0b] to-[#d97706] rounded-full opacity-20 animate-pulse" />
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <span className="text-6xl">{icon}</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a4d6d] mb-4 animate-bounce">
            Coming Soon
          </h1>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            {title}
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* Animated Progress Indicator */}
          <div className="mb-12">
            <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wider">
              Currently in Development
            </p>
            <div className="w-64 h-2 bg-gray-300 rounded-full mx-auto overflow-hidden">
              <div
                className={`h-full bg-linear-to-r from-[#f59e0b] to-[#d97706] rounded-full transition-all duration-2000 ${
                  animate ? "w-3/4" : "w-0"
                }`}
              />
            </div>
          </div>

          {/* Animated Dots */}
          <div className="flex justify-center gap-2 mb-12">
            <div className="w-3 h-3 bg-[#f59e0b] rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-[#d97706] rounded-full animate-bounce delay-100" />
            <div className="w-3 h-3 bg-[#b45309] rounded-full animate-bounce delay-200" />
          </div>

          {/* Call to Action */}
          <div className="pt-8 border-t border-gray-300">
            <p className="text-gray-600 mb-6">
              Get notified when this page launches
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! We'll notify you soon.");
              }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/30 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-linear-to-r from-[#f59e0b] to-[#d97706] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          </div>

          {/* Footer Message */}
          <p className="text-gray-500 text-sm mt-8">
            Check back soon for exciting content!
          </p>
        </div>

        {/* Floating Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#f59e0b]/10 rounded-full animate-pulse duration-4000" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#1a4d6d]/5 rounded-full animate-pulse duration-5000" />
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-[#d97706]/10 rounded-full animate-pulse duration-3000" />
        </div>
      </div>
    </div>
  );
}
