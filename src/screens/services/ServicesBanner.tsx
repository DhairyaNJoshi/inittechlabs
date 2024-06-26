import Section from "@/components/Section";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Image from "next/image";

const ServicesBanner = () => {
  return (
    <Section className="bg-gradient-primary">
      <div className="grid md:grid-cols-2 gap-5 container">
        <div className="w-full max-w-[920px] p-5 md:text-start text-center">
          <TextGenerateEffect
            words="Shaping the Future, Together"
            className="font-700 text-gray text-32 lg:text-48 leading-8 lg:leading-[48px]"
          />
          <TextGenerateEffect
            words="At INIT Tech Labs, we're a passionate team of developers, designers, and strategists who craft exceptional web and mobile app experiences. We don't just build apps, we transform ideas into reality, empowering businesses to thrive in the ever-evolving digital landscape"
            className="mt-10 text-18 md:text-20 text-gray-100 leading-5 md:leading-7 font-500"
          ></TextGenerateEffect>
        </div>
        <div className="w-full h-full">
          <Image
            src="/images/svg/services_banner.svg"
            sizes="100vh"
            alt="hero image"
            width={0}
            height={0}
            className="h-full w-full mx-auto md:max-h-[450px] max-h-[250px] md:max-w-[600px] max-w-[400px]"
          />
        </div>
      </div>
    </Section>
  );
};

export default ServicesBanner;
