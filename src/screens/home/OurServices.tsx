import Section from "@/components/Section";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import React from "react";

const SERVICES = [
  {
    title: "Harness the power of technology",
    description:
      "From custom software development to cloud solutions and IT infrastructure management, INIT Tech Labs equips you with the technological tools you need to streamline operations, boost efficiency, and gain a competitive edge.",
  },
  {
    title: "Web Development",
    description:
      "We design and develop user-friendly, responsive websites and web applications that elevate your online presence and engage your target audience",
  },
  {
    title: "Mobile App Development",
    description:
      "We build innovative, engaging mobile apps that streamline your operations, enhance user experience, and drive growth. Our expertise spans across all major platforms (iOS, Android) and emerging technologies.",
  },
  {
    title: "IT Consulting",
    description:
      "Our experienced consultants provide insightful analysis and strategic guidance to help you optimize your IT infrastructure and maximize your return on technology investments.",
  },
  {
    title: "Cloud Solutions",
    description:
      "We help you navigate the ever-evolving cloud landscape, designing and implementing secure,scalable cloud-based solutions that empower your business.",
  },
  {
    title: "Implement powerful marketing strategies",
    description:
      "We don't just build websites, we help you drive traffic to them. Our marketing specialists create data-driven strategies that leverage SEO, social media marketing, and content marketing to increase your online visibility and attract qualified leads.",
  },
  {
    title: "Branding Solutions",
    description:
      "We collaborate closely with you to understand your brand's core values, target audience, and market positioning. This empowers us to create a unique brand identity that resonates with your customers and sets you apart from the competition.",
  },
];
const OurServices = () => {
  return (
    <Section className="bg-primary-50">
      <div className="container text-center p-5">
        <h2 className="font-700 text-gray text-32 lg:text-42 leading-8 lg:leading-[42px]">
          Our Services
        </h2>
        <BentoGrid className="mt-10">
          {SERVICES.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              className="h-full bg-white/60 hover:bg-white/80 p-5 md:p-7 hover:cursor-pointer shadow-md"
              titleClass="md:text-20 text-18 leading-6 text-start"
              descriptionClass="leading-6 mt-4 text-start"
            />
          ))}
        </BentoGrid>
      </div>
    </Section>
  );
};

export default OurServices;
