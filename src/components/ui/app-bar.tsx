"use client";

import type { ComponentProps } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { cn } from "@/utils/helpers";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Entrance } from "@/components/ui/entrance";
import { Nav, NavLink } from "@/components/ui/nav";
import { SvgIconDownload } from "@/components/icon/svg-icon-download";
import { SvgIconOpenableSymbol } from "@/components/icon/svg-icon-openable-symbol";

type AppBarProps = ComponentProps<"header">;

const links = [
  { href: "/#overview", labelKey: "appBar.overview" },
  { href: "/#features", labelKey: "appBar.features" },
  { href: "/#how-it-works", labelKey: "appBar.howItWorks" },
] as const;

const AppBar = ({ className, ...props }: AppBarProps) => {
  const t = useTranslations();

  return (
    <Entrance className={cn("fixed inset-x-0 top-4 z-50", className)}>
      <header data-slot="app-bar" className="backdrop-blur-2xl" {...props}>
        <Container className="flex items-center justify-center gap-3 whitespace-nowrap">
          <Link
            href="/"
            className="flex h-14 items-center justify-center px-6 rounded-full bg-grey-50/10 shadow-card-inset backdrop-blur-2xl"
          >
            <SvgIconOpenableSymbol size="auto" className="h-5" />
          </Link>

          <div className="flex items-center gap-12 p-1 rounded-full bg-grey-50/10 shadow-card-inset backdrop-blur-2xl">
            <Nav className="hidden lg:flex">
              {links.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {t(link.labelKey)}
                </NavLink>
              ))}
            </Nav>

            <Button variant="primary">
              <SvgIconDownload size="md" />
              {t("appBar.download")}
            </Button>
          </div>
        </Container>
      </header>
    </Entrance>
  );
};

export { AppBar };
