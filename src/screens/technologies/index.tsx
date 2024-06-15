import Section from "@/components/Section";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { TECHNOLOGIES } from "@/constants/Technologies";
import { cn } from "@/utils/cn";
import Image from "next/image";

const TechnologiesPage = () => {
  return (
    <>
      {TECHNOLOGIES?.map((item, index) => (
        <Section className={cn(item.sectionClass)} key={index}>
          <div className="container text-center p-5">
            <h2 className="font-700 text-gray text-32 lg:text-42 leading-8 lg:leading-[42px]">
              {item?.title}
            </h2>
            {/* <BentoGrid className="mt-10 md:grid-cols-6 sm:grid-cols-4 grid-cols-2">*/}
            <BentoGrid className="mt-10 flex flex-wrap justify-center">
              {item?.images?.map((img, i) => (
                <div
                  className={cn(
                    "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-white border border-gray-100/20 justify-between flex flex-col space-y-4 shadow-lg h-[236px] w-[236px]"
                  )}
                  key={i}
                >
                  <Image
                    src={img}
                    className="w-full aspect-square"
                    alt="img"
                    sizes="100vw"
                    height={0}
                    width={0}
                  />
                </div>
              ))}
            </BentoGrid>
          </div>
        </Section>
      ))}
    </>
  );
};

export default TechnologiesPage;
