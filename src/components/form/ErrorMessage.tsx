import { cn } from "@/utils/cn";

const ErrorMessage = ({
  error,
  className,
}: {
  error: string | undefined;
  className?: string;
}) => {
  if (error) {
    return (
      <span className={cn("mt-1 block text-12 text-red-500", className)}>
        {error}
      </span>
    );
  }
  return <></>;
};

export default ErrorMessage;
