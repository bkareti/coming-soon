import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        <div className="text-center">
          <h1 className="hero-title">Your Smart Wealth Path</h1>
          <h3 className="hero-subtitle">
            Workshops | Wealth Management | Estate Planning
          </h3>

          <div className="mt-4 pb-10 ">
            <a href="#services" className="btn secondaray-btn">
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
