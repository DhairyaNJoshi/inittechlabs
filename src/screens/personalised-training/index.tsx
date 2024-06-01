import Section from "@/components/Section";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { PERSONALISED_TRAINING_PAGE_DATA } from "@/constants/PersonalisedTraining";
import { cn } from "@/utils/cn";

const PersonalisedTrainingPage = () => {
  return (
    <>
      {PERSONALISED_TRAINING_PAGE_DATA?.map((item, index) => (
        <Section className={cn(item.sectionClass)} key={index}>
          <div className="container text-center p-5">
            <h2 className="font-700 text-gray text-32 lg:text-42 leading-8 lg:leading-[42px]">
              {item?.title}
            </h2>
            <h2 className="mt-5 font-500 text-gray-100 text-18 lg:text-24 leading-8 lg:leading-[32px]">
              {item?.description}
            </h2>
            <BentoGrid className="mt-10 md:grid-cols-3">
              {item?.cardData?.map((card, i) => (
                <BentoGridItem
                  key={i}
                  title={card.title}
                  description={card.description}
                  className="h-full border border-gray/20 bg-white/40 hover:bg-white/80 p-5 md:p-7 hover:cursor-pointer shadow-md"
                  titleClass="md:text-20 text-18 leading-6 text-start"
                  descriptionClass="leading-6 mt-4 text-start"
                />
              ))}
            </BentoGrid>
          </div>
        </Section>
      ))}
      <Section className="bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-[1024px]">
            <h2 className="font-700 text-gray text-center text-32 lg:text-42 leading-8 lg:leading-[42px]">
              Ready to take your first step towards a rewarding career in web
              and mobile development?
            </h2>
            <p className="font-500 md:text-20 text-18 my-5 leading-7 md:leading-8 text-gray-100 text-center">
              Explore our course offerings, training programs, and bootcamps to
              find the perfect fit for your needs. Contact INIT Tech Labs today
              to discuss your goals and unlock your app development potential!
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PersonalisedTrainingPage;
