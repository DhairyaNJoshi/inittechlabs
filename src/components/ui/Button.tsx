"use client";
import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "rounded font-600 leading-5 lg:leading-6 border transition duration-100 ease-in-out whitespace-nowrap",
  {
    variants: {
      variant: {
        default:
          "bg-primary border-transparent hover:text-white hover:bg-gray hover:shadow-cst disabled:pointer-events-none disabled:bg-gray-50 disabled:text-black/50 text-white",
        outline:
          "border-[#a0b0ae] text-gray bg-transparent hover:border-transparent hover:bg-gray hover:shadow-cst hover:text-white",
      },
      size: {
        default: "px-5 2xl:px-10 lg:px-6 py-3 2xl:py-5 text-16 xl:text-20",
        sm: "text-14 lg:text-16 py-3 px-6",
        xs: "text-14 p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      children,
      asChild = false,
      isLoading = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          isLoading && "pointer-events-none relative overflow-hidden",
          ""
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
