import type * as React from "react";

import { cn } from "@/utils/helpers";

type DividerProps = React.ComponentProps<"div">;

const Divider = ({ className, ...props }: DividerProps) => {
  return (
    <div data-slot="divider" className={cn("h-px w-full bg-grey-50/30", className)} {...props} />
  );
};

export { Divider };
