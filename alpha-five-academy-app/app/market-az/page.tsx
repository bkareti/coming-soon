import Header from "../components/Header";
import Footer from "../components/Footer";
import MarketDirectory from "../components/MarketDirectory";

export default function MarketAZPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full">
        <MarketDirectory />
      </main>
      <Footer />
    </>
  );
}
