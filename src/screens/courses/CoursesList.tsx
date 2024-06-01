import Section from "@/components/Section";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { Button } from "@/components/ui/Button";
import { COURSES_LIST } from "@/constants/Courses";
import { cn } from "@/utils/cn";
import Image from "next/image";

const CoursesList = () => {
  return (
    <Section className="bg-white">
      <div className="container">
        <h1 className="text-32 md:text-42 font-700 text-center">Our Courses</h1>
        <BentoGrid className="mt-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {COURSES_LIST.map((course, i) => (
            <div
              className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-1 bg-white border border-gray-100/20 flex flex-col shadow-lg"
              )}
              key={i}
            >
              <Image
                src={course?.img}
                className="w-full h-full max-h-[170px] rounded-lg"
                alt="img"
                sizes="100vw"
                height={0}
                width={0}
              />
              <div className="p-3 h-full flex flex-col justify-between">
                <div className={cn("text-gray mb-2 mt-2 font-600")}>
                  {course?.name}
                </div>
                <div className="flex justify-center">
                  <Button className="text-white rounded-xl" size={"sm"}>
                    ${course?.amount}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </BentoGrid>
      </div>
    </Section>
  );
};

export default CoursesList;
