"use client";

import type { ComponentProps } from "react";
import { motion } from "motion/react";

import { entranceAnimate, entranceInitial, entranceTransition } from "@/utils/animations";

type EntranceProps = ComponentProps<typeof motion.div> & {
  delay?: number;
};

const Entrance = ({ delay = 0, ...props }: EntranceProps) => {
  return (
    <motion.div
      initial={entranceInitial}
      animate={entranceAnimate}
      transition={{ ...entranceTransition, delay }}
      {...props}
    />
  );
};

export { Entrance };
