"use client";

export default function CoursesDirectory() {
  const onlineCourses = [
    {
      id: 1,
      title: "Basics of Capital Markets",
      description:
        "Comprehensive introduction to capital markets, financial instruments, and trading fundamentals.",
      level: "Beginner",
      duration: "4-6 weeks",
      price: "Free for Students",
      topics: [
        "Stock market basics",
        "Understanding indices",
        "Trading mechanisms",
        "Market participants",
      ],
    },
    {
      id: 2,
      title: "Investment and Portfolio Construction – Basics to Advanced",
      description:
        "Learn the art of building and managing diversified investment portfolios from fundamentals to advanced strategies.",
      level: "Beginner to Advanced",
      duration: "8-10 weeks",
      price: "Free for Students",
      topics: [
        "Asset allocation",
        "Risk management",
        "Portfolio optimization",
        "Performance analysis",
      ],
    },
    {
      id: 3,
      title: "Advanced Techno-Funda Analysis Course",
      description:
        "Master the combination of technical and fundamental analysis for comprehensive market evaluation.",
      level: "Advanced",
      duration: "10-12 weeks",
      price: "Contact for pricing",
      topics: [
        "Advanced charting",
        "Fundamental metrics",
        "Combined analysis strategies",
        "Real-world applications",
      ],
    },
  ];

  const offlineCourses = [
    {
      id: 4,
      title: "Advanced Technofunda Analysis Course",
      description:
        "In-person intensive training combining technical and fundamental analysis with hands-on practice.",
      location: "Multiple Centers",
      duration: "3 months",
      format: "Weekend batches",
      topics: [
        "Live market analysis",
        "Case studies",
        "One-on-one mentoring",
        "Trading simulations",
      ],
    },
    {
      id: 5,
      title: "Mentorship Programs",
      description:
        "Personalized guidance from experienced traders and investors to accelerate your learning journey.",
      location: "In-person / Online",
      duration: "6 months",
      format: "Flexible schedule",
      topics: [
        "Personalized strategy development",
        "Portfolio review sessions",
        "Direct market guidance",
        "Career counseling",
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 p-5">
      <div className="fullpadding mx-auto">
        {/* Page Header */}
        <div className="text-center mb-20 sm:mb-24">
          <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-[#1a4d6d] mb-6 leading-tight">
            Learning Courses
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Master the art of investing with our comprehensive online and
            offline courses designed for every skill level
          </p>
        </div>

        {/* Online Courses Section */}
        <section className="pt-5 mb-20 sm:mb-24 scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4d6d] mb-10 sm:mb-12 pb-4">
            Online Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {onlineCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="bg-linear-to-r from-[#1a4d6d] to-[#2b6b93] text-white p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm opacity-90">{course.level}</p>
                </div>
                <div className="p-6 sm:p-8 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {course.description}
                  </p>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase">
                      Duration
                    </p>
                    <p className="text-gray-800">{course.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase">
                      Price
                    </p>
                    <p className="font-bold text-[#f59e0b]">{course.price}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-3">
                      Key Topics
                    </p>
                    <ul className="space-y-2">
                      {course.topics.map((topic, index) => (
                        <li
                          key={index}
                          className="flex items-start text-sm text-gray-700"
                        >
                          <span className="text-[#f59e0b] mr-2">✓</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                  <button className="w-full py-3 bg-linear-to-r from-[#f59e0b] to-[#d97706] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Offline Courses Section */}
        <section className="pt-5 mb-20 sm:mb-24 scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4d6d] mb-10 sm:mb-12 pb-4">
            Offline Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {offlineCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="bg-linear-to-r from-[#f59e0b] to-[#d97706] text-white p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm opacity-90">{course.location}</p>
                </div>
                <div className="p-6 sm:p-8 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase">
                        Duration
                      </p>
                      <p className="text-gray-800">{course.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase">
                        Format
                      </p>
                      <p className="text-gray-800">{course.format}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-3">
                      Program Highlights
                    </p>
                    <ul className="space-y-2">
                      {course.topics.map((topic, index) => (
                        <li
                          key={index}
                          className="flex items-start text-sm text-gray-700"
                        >
                          <span className="text-[#f59e0b] mr-2">✓</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                  <button className="w-full py-3 bg-linear-to-r from-[#1a4d6d] to-[#2b6b93] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                    Register Interest
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
