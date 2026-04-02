import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/helpers";

const buttonVariants = cva(
  "flex h-12 items-center gap-3 rounded-full px-5 py-3 text-base font-semibold leading-6 text-white cursor-pointer",
  {
    variants: {
      variant: {
        primary: "border border-transparent bg-amber-500",
        secondary: "border border-amber-500 bg-amber-500/20",
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
