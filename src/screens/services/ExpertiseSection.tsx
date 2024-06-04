import Section from "@/components/Section";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { EXPERTISE_AREAS } from "@/constants/ExpertiseAreas";
import { cn } from "@/utils/cn";

const ExpertiseSection = () => {
  return (
    <>
      <Section className="bg-primary-100">
        <div className="grid container justify-center">
          <TextGenerateEffect
            words="Unparalleled Expertise Across Every Stage of Development"
            className="max-w-6xl mx-auto font-700 !text-white text-32 lg:text-48 leading-8 lg:leading-[48px] text-center"
          />
          <TextGenerateEffect
            words="We offer a comprehensive suite of services designed to cater to your specific needs, from conceptualization and design to development, deployment, and ongoing maintenance. Here's a glimpse into what INIT Tech Labs can do for you:"
            className="text-center text-18 lg:text-20 text-gray-50 leading-7 lg:leading-8 font-500 my-6 lg:my-10"
          />
        </div>
      </Section>
      {EXPERTISE_AREAS?.map((item, index) => (
        <Section className={cn("!pb-40", item.sectionClass)} key={index}>
          <div className="container text-center p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className={cn(
                  "h-fit sticky top-40 self-center",
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                )}
              >
                <h2 className="font-700 text-gray text-32 lg:text-42 leading-8 lg:leading-[42px]">
                  {item?.title}
                </h2>
                <h2 className="mt-5 font-500 text-gray-100 text-18 lg:text-24 leading-8 lg:leading-[32px]">
                  {item?.description}
                </h2>
              </div>
              <BentoGrid
                className={cn(
                  "mt-10 md:grid-cols-1",
                  index % 2 === 0 ? "md:order-2" : "md:order:1"
                )}
              >
                {item?.cardData?.map((card, i) => (
                  <BentoGridItem
                    key={i}
                    title={card.title}
                    description={card.description}
                    className="h-full border border-gray/20 hover:bg-white/80 p-5 md:p-7 hover:cursor-pointer shadow-md max-w-[400px] mx-auto"
                    titleClass="md:text-20 text-18 leading-6 text-start"
                    descriptionClass="leading-6 mt-4 text-start"
                  />
                ))}
              </BentoGrid>
            </div>
          </div>
        </Section>
      ))}
    </>
  );
};

export default ExpertiseSection;
