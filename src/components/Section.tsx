import { cn } from "@/utils/cn";
import React from "react";

const Section = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <section
      className={cn("flex flex-col items-center py-12 lg:py-20", className)}
    >
      {children}
    </section>
  );
};

export default Section;
