import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkInProgress from "../components/WorkInProgress";

export const metadata = {
  title: "News - Alpha5Academy",
  description:
    "Latest updates and news about stock market, investments, and financial education from Alpha5Academy.",
};

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <WorkInProgress
          title="Market News & Updates"
          description="Stay informed with the latest market trends, economic indicators, and investment insights. Our news section will bring you curated content from the stock market world, expert analysis, and educational updates."
          icon="📰"
        />
      </main>
      <Footer />
    </>
  );
}
