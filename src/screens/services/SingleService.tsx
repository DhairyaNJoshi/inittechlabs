"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import FlipWords from "@/components/ui/FlipWords";
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";

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
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const observer = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (containerRef.current) {
      observer.current.observe(containerRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        className={cn(
          "h-fit md:sticky top-40 pt-8 sm:pt-32 sm:pb-20",
          index % 2 === 0 ? "md:order-1" : "md:order-2"
        )}
        ref={containerRef}
      >
        <h2 className="font-700 text-gray text-32 lg:text-42 leading-8 lg:leading-[42px]">
          <FlipWords words={[item?.title]} isVisible={isVisible} />
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
