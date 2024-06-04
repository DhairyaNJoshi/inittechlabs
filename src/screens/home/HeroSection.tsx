import Section from "@/components/Section";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const HeroSection = () => {
  return (
    <Section className="bg-primary-100">
      <div className="container text-center p-5">
        <TextGenerateEffect
          words="INIT Tech Labs is a team of passionate and experienced IT professionals dedicated to providing innovative solutions that propel your business forward. We leverage the latest technologies to design, develop, and implement customized IT strategies tailored to your unique needs."
          className="font-500 md:text-24 text-20 leading-7 md:leading-8 text-gray-50"
        />
      </div>
    </Section>
  );
};

export default HeroSection;
