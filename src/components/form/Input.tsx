"use client";
import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

export const inputVariants = cva(
  "outline-none focus:ring-offset-0 rounded border",
  {
    variants: {
      variant: {
        default:
          "text-gray focus:border focus:border-gray-400 placeholder:text-gray-500 border-gray-100",
        secondary: "bg-gray-50/50 border-gray-100 rounded",
      },
      inputSize: {
        default:
          "px-3 py-2 text-16 placeholder:text-12 placeholder:font-400 sm:p-3",
        lg: "lg:p-5 lg:text-18",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: any | undefined;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, inputSize, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({ variant, inputSize, className }),
          error && "border-red-400 focus:border-red-400"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof inputVariants> {
  error?: any | undefined;
}

export { Input };
