import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkInProgress from "../components/WorkInProgress";

export const metadata = {
  title: "Get In Touch - Alpha5Academy",
  description:
    "Contact Alpha5Academy for inquiries, feedback, or to get started with our services and courses.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <WorkInProgress
          title="Get In Touch"
          description="We'd love to hear from you! Our dedicated contact form and customer support team are being set up to assist you with any questions about our services, courses, or investment guidance."
          icon="📞"
        />
      </main>
      <Footer />
    </>
  );
}
