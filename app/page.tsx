import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Review } from "./components/Review";
import { API } from "./components/api";
import { SliderSection } from "./components/shared/slider";
import { Subscribe } from "./components/subscribe";

export default function Home() {
  return (
    <main className="w-full overflow-hidden min-h-screen space-y-[25px] lg:space-y-[50px] pb-10 lg:pb-20">
      <Banner />
      <SliderSection
        title="Our payment methods"
        className="text-xl xl:text-3xl font-semibold text-[#dcdcdc]"
      />
      <Subscribe />
      <API />
      <SliderSection title="Our clients" className="pt-10" />
      <Review />
      <Contact />
    </main>
  );
}
