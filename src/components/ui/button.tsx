import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/helpers";

const buttonVariants = cva(
  cn(
    "flex h-12 items-center gap-3 rounded-full px-5 py-3",
    "text-base font-semibold leading-6 text-white whitespace-nowrap",
    "cursor-pointer select-none transition-all duration-200 ease-out",
    "relative isolate overflow-hidden",
    "before:absolute before:inset-0 before:-z-10",
    "before:opacity-0 before:transition-opacity before:duration-200",
    "hover:before:opacity-100",
    "active:scale-97 active:before:opacity-0",
  ),
  {
    variants: {
      variant: {
        primary: cn(
          "border border-transparent bg-amber-500",
          "before:bg-linear-to-br before:from-amber-500 before:to-amber-400",
        ),
        secondary: cn(
          "border border-amber-500 bg-amber-500/20",
          "before:bg-linear-to-br before:from-amber-500/20 before:to-amber-500",
          "hover:border-amber-200",
        ),
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>;

const Button = ({ variant, className, children, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  );
};

export { Button, buttonVariants };
