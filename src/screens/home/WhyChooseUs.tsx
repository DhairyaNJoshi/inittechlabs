import Section from "@/components/Section";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import Image from "next/image";

const SERVICES = [
  {
    title: "Innovation at Our Core",
    description:
      "We embrace new technologies and stay ahead of the curve, ensuring your solutions are future-proof.",
    image: "/images/svg/innovation-img.svg",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We collaborate closely with you to understand your specific needs and develop solutions that exceed expectations.",
    image: "/images/svg/client-centric-img.svg",
  },
  {
    title: "Agile Methodology",
    description:
      "We adopt an agile development approach, fostering flexibility and continuous improvement throughout the project lifecycle.",
    image: "/images/svg/home_about_us.svg",
  },
  {
    title: "Proven Track Record",
    description:
      "We have a proven track record of success in delivering high-quality, impactful IT solutions across various industries.",
    image: "/images/svg/track-record-img.svg",
  },
];
const WhyChooseUs = () => {
  return (
    <Section className="bg-white">
      <div className="container text-center p-5">
        <h2 className="font-700 text-gray text-32 lg:text-42 leading-8 lg:leading-[42px]">
          Why Choose INIT Tech Labs?
        </h2>
        <BentoGrid className="mt-10 md:grid-cols-1 lg:grid-cols-2">
          {SERVICES.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              className="h-full border border-gray/20 hover:bg-white/80 p-5 md:p-7 hover:cursor-pointer shadow-md grid sm:grid-cols-[auto_1fr] gap-x-6 space-y-2"
              titleClass="md:text-20 text-18 leading-6 sm:text-start"
              descriptionClass="leading-6 mt-4 sm:text-start"
              header={
                <div className="sm:self-center flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={0}
                    width={0}
                    className="w-full h-full max-w-[120px] max-h-[120px]"
                  />
                </div>
              }
            />
          ))}
        </BentoGrid>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
