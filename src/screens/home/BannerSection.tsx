import { AuroraBackground } from "@/components/AuroraBackground";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Image from "next/image";

const BannerSection = () => {
  return (
    <AuroraBackground>
      <div className="grid md:grid-cols-2 gap-5 container z-10">
        <div className="w-full max-w-[920px] p-5 md:text-start text-center">
          <TextGenerateEffect
            words="Unleashing Innovation Through Technology"
            className="font-700 text-gray text-32 lg:text-48 leading-8 lg:leading-[48px]"
          />

          <TextGenerateEffect
            words="We engineer the future, one line of code at a time."
            className="text-20 md:text-24 text-gray leading-5 md:leading-7 font-600 my-6 md:my-10"
          />

          <TextGenerateEffect
            words="INIT Tech Labs is your trusted partner for cutting-edge IT"
            className="text-18 md:text-20 text-gray-100 leading-5 md:leading-7 font-500"
          ></TextGenerateEffect>
        </div>
        <div className="w-full h-full">
          <Image
            src="/images/svg/home_banner.svg"
            sizes="100vh"
            alt="hero image"
            width={0}
            height={0}
            className="h-full w-full mx-auto md:max-h-[450px] max-h-[250px] md:max-w-[600px] max-w-[400px]"
          />
        </div>
      </div>
    </AuroraBackground>
  );
};

export default BannerSection;
