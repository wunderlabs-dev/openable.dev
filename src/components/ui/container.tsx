import type * as React from "react";

import { cn } from "@/utils/helpers";
import { spacingClassNames, type Spacing } from "@/utils/spacing";

type ContainerSize = "xs" | "sm" | "md" | "lg" | "xl";

const containerSizeClassNames: Record<ContainerSize, string> = {
  xs: "max-w-md",
  sm: "max-w-xl",
  md: "max-w-narrow",
  lg: "max-w-standard",
  xl: "max-w-wide",
};

type ContainerProps<T extends React.ElementType = "div"> = {
  as?: T;
  size?: ContainerSize;
  spacing?: Spacing;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

const Container = <T extends React.ElementType = "div">({
  as,
  size = "md",
  spacing = "none",
  className,
  children,
  ...props
}: ContainerProps<T>) => {
  const Component = as || "div";

  return (
    <Component
      data-slot="container"
      className={cn(
        "mx-auto w-full",
        containerSizeClassNames[size],
        spacingClassNames[spacing],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export { Container };
