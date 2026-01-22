import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesDirectory from "../components/ServicesDirectory";

export const metadata = {
  title: "Services - Alpha5Academy",
  description:
    "Explore our professional services including workshops, wealth management, and estate planning at Alpha5Academy.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full">
        <ServicesDirectory />
      </main>
      <Footer />
    </>
  );
}
