"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { cn } from "@/utils/cn";

const SingleService = ({
  item,
  index,
}: {
  item: {
    title: string;
    description: string;
    sectionClass: string;
    cardData: {
      title: string;
      description: string;
    }[];
  };
  index: number;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        className={cn(
          "h-fit md:sticky top-40 pt-8 sm:pt-32 sm:pb-20",
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
          "md:mt-10 md:grid-cols-1 md:py-20",
          index % 2 === 0 ? "md:order-2" : "md:order:1"
        )}
      >
        {item?.cardData?.map((card, i) => (
          <BentoGridItem
            key={i}
            title={card.title}
            description={card.description}
            className="h-full border border-gray/20 bg-white hover:bg-white/80 p-5 md:p-7 hover:cursor-pointer shadow-md max-w-[400px] mx-auto min-h-[200px]"
            titleClass="md:text-20 text-18 leading-6 text-start"
            descriptionClass="leading-6 mt-4 text-start"
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default SingleService;
