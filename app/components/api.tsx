import Image from "next/image";
import { Button } from "./shared/button";
import { GradientShadow } from "./shared/gradient-shadow";

export const API = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-center md:justify-around items-center md:items-start gap-10 md:gap-5 pt-10">
      <div className="space-y-5 lg:space-y-10">
        <h1 className="text-2xl lg:text-4xl xl:text-[40px] font-medium text-[#e1e1e1] w-full md:max-w-[380px] lg:max-w-[550px] xl:max-w-[613px] md:leading-[40px] lg:leading-[60px]">
          We have a solid API designed to best integrate with your environment.
        </h1>

        <Button
          href="/view-api"
          className="gap-6 lg:gap-[50px] lg:p-2"
          imgSize="lg:w-[69.5px]"
        >
          VIEW API
        </Button>
      </div>
      <div className="relative">
        <GradientShadow className="top-10 right-0  md:-right-40 -z-50" />
        <Image
          src="/view-api.svg"
          width={481}
          height={392}
          className="w-full md:w-[325px] lg:w-[350px] xl:w-[481px] h-auto"
          alt=""
        />
      </div>
    </section>
  );
};
