import Section from "@/components/Section";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";

const SERVICES = [
  {
    title: "Innovation at Our Core",
    description:
      "We embrace new technologies and stay ahead of the curve, ensuring your solutions are future-proof.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We collaborate closely with you to understand your specific needs and develop solutions that exceed expectations.",
  },
  {
    title: "Agile Methodology",
    description:
      "We adopt an agile development approach, fostering flexibility and continuous improvement throughout the project lifecycle.",
  },
  {
    title: "Proven Track Record",
    description:
      "We have a proven track record of success in delivering high-quality, impactful IT solutions across various industries.",
  },
];
const WhyChooseUs = () => {
  return (
    <Section className="bg-white">
      <div className="container text-center p-5">
        <h2 className="font-700 text-gray text-32 lg:text-42 leading-8 lg:leading-[42px]">
          Why Choose INIT Tech Labs?
        </h2>
        <BentoGrid className="mt-10 md:grid-cols-2">
          {SERVICES.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              className="h-full border border-gray/20 hover:bg-white/80 p-5 md:p-7 hover:cursor-pointer shadow-md"
              titleClass="md:text-20 text-18 leading-6 text-start"
              descriptionClass="leading-6 mt-4 text-start"
            />
          ))}
        </BentoGrid>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
