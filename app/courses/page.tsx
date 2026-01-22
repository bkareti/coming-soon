import Header from "../components/Header";
import Footer from "../components/Footer";
import CoursesDirectory from "../components/CoursesDirectory";

export const metadata = {
  title: "Courses - Alpha5Academy",
  description:
    "Enroll in our professional investment and stock market courses. Learn from basics to advanced levels through online and offline programs at Alpha5Academy.",
};

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full">
        <CoursesDirectory />
      </main>
      <Footer />
    </>
  );
}
