import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkInProgress from "../components/WorkInProgress";

export const metadata = {
  title: "Courses - Alpha5Academy",
  description:
    "Enroll in our professional investment and stock market courses. Learn from basics to advanced levels through online and offline programs at Alpha5Academy.",
};

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <WorkInProgress
          title="Learning Courses"
          description="Master the art of investing with our comprehensive courses. From basics of capital markets to advanced techno-fundamental analysis, we offer both online and offline programs designed for every skill level."
          icon="📚"
        />
      </main>
      <Footer />
    </>
  );
}
