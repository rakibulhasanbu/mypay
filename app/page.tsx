import Banner from "./components/Banner";
import Contact from "./components/Contact";
import PriceSection from "./components/PriceSection";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <PriceSection />
      <Testimonial />
      <Contact />
    </main>
  );
}
