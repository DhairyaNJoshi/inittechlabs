import Section from "@/components/Section";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Image from "next/image";

const ContactUsBannerSection = () => {
  return (
    <Section className="bg-gradient-primary">
      <div className="grid md:grid-cols-2 gap-5 container">
        <div className="w-full max-w-[920px] p-5 md:text-start text-center">
          <TextGenerateEffect
            words="Get in Touch"
            className="font-700 text-gray text-32 lg:text-48 leading-8 lg:leading-[48px]"
          />
          <TextGenerateEffect
            words="Welcome to INIT Tech Labs, where digital innovation meets seamless solutions. Whether you're dreaming of a user-friendly mobile app, an efficient eCommerce platform, or integrating AI for enhanced business insights, we're here to bring your vision to life. Reach out to us using the form below and let's start transforming your ideas into reality.Also Our personalized training and course offerings ensure your team stays ahead in today's digital landscape."
            className="mt-10 text-18 md:text-20 text-gray-100 leading-5 md:leading-7 font-500"
          ></TextGenerateEffect>
        </div>
        <div className="w-full h-full">
          <Image
            src="/images/svg/contact_us_banner.svg"
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

export default ContactUsBannerSection;
