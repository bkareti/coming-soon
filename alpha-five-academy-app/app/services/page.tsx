import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkInProgress from "../components/WorkInProgress";

export const metadata = {
  title: "Services - Alpha5Academy",
  description:
    "Explore our professional services including workshops, wealth management, and estate planning at Alpha5Academy.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <WorkInProgress
          title="Professional Services"
          description="Discover our comprehensive range of services including interactive workshops, personalized wealth management, and strategic estate planning. We're building a dedicated space to help you achieve your financial goals."
          icon="💼"
        />
      </main>
      <Footer />
    </>
  );
}
