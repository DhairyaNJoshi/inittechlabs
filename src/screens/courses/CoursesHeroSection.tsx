import Section from "@/components/Section";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const CARD_ITEMS = [
  {
    title: "Flexible Learning",
    description:
      "Learn from the comfort of your home with pre-recorded video lectures, quizzes, and downloadable resources.",
  },
  {
    title: "Lifetime Access",
    description:
      "Once you purchase a course, the knowledge is yours forever. Go back and review concepts as nee	ded.",
  },
  {
    title: "Industry-Relevant Curriculum",
    description:
      "Our courses are developed and maintained by experienced developers, ensuring you learn the most up-to-date skills.",
  },
];
const CoursesHeroSection = () => {
  return (
    <Section className="bg-gradient-primary">
      <div className="container">
        <div className="w-full max-w-[920px] p-5 md:text-start text-center mx-auto">
          <TextGenerateEffect
            words="Invest in Yourself with Our Buyable Courses"
            className="text-center font-700 text-gray text-32 lg:text-48 leading-8 lg:leading-[48px]"
          />

          <TextGenerateEffect
            words="Upskill and build your portfolio at your own pace with our on-demand video courses."
            className="text-center text-20 md:text-24 text-gray leading-5 md:leading-7 font-600 my-6 md:my-10"
          />
        </div>
        <BentoGrid className="mt-10">
          {CARD_ITEMS.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              className="h-full bg-white/40 hover:bg-white/80 p-5 md:p-7 hover:cursor-pointer shadow-md"
              titleClass="md:text-20 text-18 leading-6 text-start"
              descriptionClass="leading-6 mt-4 text-start"
            />
          ))}
        </BentoGrid>
      </div>
    </Section>
  );
};

export default CoursesHeroSection;
