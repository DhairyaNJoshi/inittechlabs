import { AuroraBackground } from "@/components/AuroraBackground";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const BannerSection = () => {
  return (
    <AuroraBackground>
      <div className="container flex justify-center">
        <div className="w-full max-w-[920px] p-5 md:text-start text-center">
          <TextGenerateEffect
            words="Unleashing Innovation Through Technology"
            className="text-center font-700 text-gray text-32 lg:text-48 leading-8 lg:leading-[48px]"
          />

          <TextGenerateEffect
            words="We engineer the future, one line of code at a time."
            className="text-center text-20 md:text-24 text-gray leading-5 md:leading-7 font-600 my-6 md:my-10"
          />

          <TextGenerateEffect
            words="INIT Tech Labs is your trusted partner for cutting-edge IT"
            className="text-center text-18 md:text-20 text-gray-100 leading-5 md:leading-7 font-500"
          ></TextGenerateEffect>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default BannerSection;
