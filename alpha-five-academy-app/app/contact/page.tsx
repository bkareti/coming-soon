import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

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
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
