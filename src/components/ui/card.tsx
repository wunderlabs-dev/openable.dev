import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/helpers";

const cardVariants = cva("relative overflow-hidden rounded-3xl shadow-card-inset", {
  variants: {
    variant: {
      solid: "bg-grey-900/20",
      glass: "backdrop-blur-2xl bg-grey-50/10",
    },
    spacing: {
      none: "p-0",
      md: "p-8",
      lg: "p-12",
    },
  },
  defaultVariants: {
    variant: "solid",
    spacing: "md",
  },
});

type CardProps = React.ComponentProps<"div"> & VariantProps<typeof cardVariants>;

const Card = ({ variant, spacing, className, children, ...props }: CardProps) => {
  return (
    <div data-slot="card" className={cn(cardVariants({ variant, spacing, className }))} {...props}>
      {children}
    </div>
  );
};

export { Card, cardVariants };
