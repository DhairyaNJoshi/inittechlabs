"use client";
import Section from "@/components/Section";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { EXPERTISE_AREAS } from "@/constants/ExpertiseAreas";
import { cn } from "@/utils/cn";
import SingleService from "./SingleService";

const ExpertiseSection = () => {
  return (
    <>
      <Section className="bg-primary-100">
        <div className="grid container justify-center">
          <TextGenerateEffect
            words="Unparalleled Expertise Across Every Stage of Development"
            className="max-w-6xl mx-auto font-700 !text-white text-32 lg:text-48 leading-10 lg:leading-[56px] text-center"
          />
          <TextGenerateEffect
            words="We offer a comprehensive suite of services designed to cater to your specific needs, from conceptualization and design to development, deployment, and ongoing maintenance. Here's a glimpse into what INIT Tech Labs can do for you:"
            className="text-center text-18 lg:text-20 text-gray-50 leading-7 lg:leading-8 font-500 my-6 lg:my-10"
          />
        </div>
      </Section>
      <Section className={cn("sm:!pb-40", "bg-gradient-secondary")}>
        <TracingBeam scrollClass={"!left-[96%] hidden md:block"}>
          {EXPERTISE_AREAS?.map((item, index) => (
            <div className="container text-center p-5" key={index}>
              <SingleService item={item} index={index} />
            </div>
          ))}
        </TracingBeam>
      </Section>
    </>
  );
};

export default ExpertiseSection;
