"use client";

import { motion } from "motion/react";

import {
  lavaBlobPrimaryAnimate,
  lavaBlobPrimaryTransition,
  lavaBlobSecondaryAnimate,
  lavaBlobSecondaryTransition,
} from "@/utils/animations";

const LavaBlob = () => {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <motion.div
        className="absolute left-1/2 top-1/4 -translate-x-1/2 h-96 w-96 rounded-full bg-linear-to-b from-orange-400/30 to-transparent blur-3xl"
        animate={lavaBlobPrimaryAnimate}
        transition={lavaBlobPrimaryTransition}
      />

      <motion.div
        className="absolute left-1/2 top-1/4 -translate-x-1/2 h-80 w-80 rounded-full bg-linear-to-b from-orange-200/25 to-transparent blur-3xl"
        animate={lavaBlobSecondaryAnimate}
        transition={lavaBlobSecondaryTransition}
      />
    </div>
  );
};

export { LavaBlob };
