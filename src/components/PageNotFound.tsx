import Section from "@/components/Section";
import Image from "next/image";
export const ComingSoon = () => {
  return (
    <Section>
      <div className="h-full w-full flex justify-center items-center flex-col gap-y-8">
        <Image
          src="/images/svg/coming-soon.svg"
          alt="404"
          width={0}
          height={0}
          sizes="100vh"
          className="h-full w-full max-h-[500px] max-w-[800px]"
        />
        <p className="sm:text-52 text-32 text-gray-100 font-700">Coming soon</p>
      </div>
    </Section>
  );
};

export const PageNotFound = () => {
  return (
    <Section>
      <div className="h-full w-full flex justify-center items-center flex-col gap-y-8">
        <Image
          src="/images/svg/404-img.svg"
          alt="404"
          width={0}
          height={0}
          sizes="100vh"
          className="h-full w-full max-h-[500px] max-w-[800px]"
        />
        <p className="sm:text-52 text-32 text-gray-100 font-700">
          Page not found.
        </p>
      </div>
    </Section>
  );
};
