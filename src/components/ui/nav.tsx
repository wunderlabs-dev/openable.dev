"use client";

import { useState, useRef, useCallback, type ReactNode } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/helpers";
import {
  navIndicatorTransition,
  navIndicatorInitial,
  navIndicatorAnimate,
  navIndicatorExit,
} from "@/utils/animations";

type NavProps = {
  children: ReactNode;
  className?: string;
};

const Nav = ({ className, children }: NavProps) => {
  const navRef = useRef<HTMLElement>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const nav = navRef.current;
    if (!nav) return;

    const target = (e.target as HTMLElement).closest(
      "[data-slot='nav-link']",
    ) as HTMLElement | null;
    if (!target) return;

    const navRect = nav.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    setIndicator({
      left: targetRect.left - navRect.left + targetRect.width / 2 - 2,
      width: 4,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIndicator(null);
  }, []);

  return (
    <nav
      ref={navRef}
      data-slot="nav"
      className={cn("relative flex items-center gap-1", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {indicator ? (
          <motion.div
            className="absolute bottom-1 h-0.5 rounded-full bg-amber-500"
            initial={navIndicatorInitial}
            exit={navIndicatorExit}
            transition={navIndicatorTransition}
            animate={{
              ...navIndicatorAnimate,
              left: indicator.left,
              width: indicator.width,
            }}
          />
        ) : null}
      </AnimatePresence>
    </nav>
  );
};

const navLinkVariants = cva(
  [
    "inline-flex items-center",
    "px-4 py-3 rounded-full",
    "text-base font-normal leading-6",
    "cursor-pointer select-none",
    "transition-colors duration-150 ease-in-out",
  ],
  {
    variants: {
      variant: {
        default: "text-grey-50/90 hover:text-white",
        active: "text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type NavLinkProps = React.ComponentProps<typeof Link> & VariantProps<typeof navLinkVariants>;

const NavLink = ({ className, variant = "default", ...props }: NavLinkProps) => {
  return (
    <Link
      data-slot="nav-link"
      data-variant={variant}
      className={cn(navLinkVariants({ variant, className }))}
      {...props}
    />
  );
};

export { Nav, NavLink, navLinkVariants };
