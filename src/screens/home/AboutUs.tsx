import Section from "@/components/Section";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Section className="bg-white">
      <div className="grid md:grid-cols-2 gap-5 container">
        <div className="w-full max-w-[920px] p-5 md:text-start text-center order-1 md:order-2">
          <TextGenerateEffect
            words="About Us"
            className="font-700 text-gray text-32 lg:text-48 leading-8 lg:leading-[48px]"
          />
          <TextGenerateEffect
            words="At INIT Tech Labs, we believe in the power of technology to transform businesses. Our team of experts combines deep technical knowledge with a results-oriented approach to deliver projects on time and within budget. We foster a collaborative work environment that prioritizes clear communication and a deep understanding of your goals."
            className="text-18 lg:text-20 text-gray-100 leading-7 lg:leading-8 font-500 my-6 lg:my-10"
          />
        </div>
        <div className="w-full h-full order-2 md:order-1">
          <Image
            src="/images/img_side.png"
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

export default AboutUs;
