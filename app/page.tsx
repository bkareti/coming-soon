import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LivelongWealthSection from "./components/LivelongWealthSection";
import WelcomeSection from "./components/WelcomeSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full">
        <HeroSection />
        {/*<LivelongWealthSection />
      <WelcomeSection />
      <ServicesSection />
      <WhyChooseUsSection />*/}
      </main>
      <Footer />
    </>
  );
}
