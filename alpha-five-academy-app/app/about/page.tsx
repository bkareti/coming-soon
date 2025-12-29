import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full">
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}
