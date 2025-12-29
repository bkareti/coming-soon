import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkInProgress from "../components/WorkInProgress";

export const metadata = {
  title: "Sign Up - Alpha5Academy",
  description:
    "Join Alpha5Academy to access exclusive investment courses, workshops, and wealth management services.",
};

export default function SignUpPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <WorkInProgress
          title="Registration Opening Soon"
          description="We're preparing an amazing sign-up experience for you! Soon you'll be able to register for our exclusive courses, workshops, and wealth management services. Get ready to start your journey with Alpha5Academy."
          icon="🎯"
        />
      </main>
      <Footer />
    </>
  );
}
