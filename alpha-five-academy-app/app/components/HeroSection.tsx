import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-200px)] flex items-center justify-center bg-linear-to-b from-blue-50 to-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Your Smart Wealth Path
          </h1>
          <h3 className="text-lg sm:text-xl text-gray-100 leading-relaxed">
            Workshops | Wealth Management | Estate Planning
          </h3>

          <div className="mt-6 pb-10">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-linear-to-r from-[#f59e0b] to-[#d97706] text-white font-semibold shadow hover:shadow-lg transition"
            >
              Sign Up Now
            </a>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <Image
                src="/images/HomePageImageNew.png"
                alt="Stock Market Chart"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
