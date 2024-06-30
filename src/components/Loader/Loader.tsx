import { cn } from "@/utils/cn";

const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("lds-ellipsis", className)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
