import { ContactForm } from "./ContactForm";
import { AbsoluteImg } from "./shared/absolute-img";
import { GradientShadow } from "./shared/gradient-shadow";
import { SectionTitle } from "./shared/section-title";

export const Contact = () => {
  return (
    <section className="py-10 space-y-10 lg:space-y-20 relative">
      <AbsoluteImg
        img="/planet.png"
        imgClass="w-[352px] h-[341px]"
        className="hidden xl:block top-[18%] left-[8.4%]"
      />
      <GradientShadow className="-top-[15%] left-[8.4%]" />
      <GradientShadow className="-bottom-[10%] -right-[30%]" />

      <SectionTitle className="relative z-20">
        Information request
      </SectionTitle>
      <ContactForm />
    </section>
  );
};
