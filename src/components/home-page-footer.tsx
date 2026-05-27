"use client";

import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getYear } from "date-fns";

import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Typography } from "@/components/ui/typography";

import { SvgIconOpenable } from "@/components/icon/svg-icon-openable";

type HomePageFooterProps = ComponentProps<"footer">;

const renderers = {
  year: getYear(new Date()),
  link: (chunks: ReactNode) => (
    <a
      target="_blank"
      href="https://wunderlabs.dev"
      rel="noopener noreferrer"
      className="text-amber-500"
    >
      {chunks}
    </a>
  ),
} as const;

const sections = [
  {
    id: "community",
    title: "footer.community",
    links: [
      {
        id: "github",
        href: "https://github.com/wunderlabs-dev/openable",
        labelKey: "footer.github",
      },
      { id: "vtemian", href: "https://x.com/vtemian", labelKey: "footer.vtemian" },
      { id: "balajmarius", href: "https://x.com/balajmarius", labelKey: "footer.balajmarius" },
    ],
  },
  {
    id: "product",
    title: "footer.product",
    links: [
      { id: "overview", href: "/", labelKey: "footer.overview" },
      { id: "contact", href: "mailto:office@wunderlabs.dev", labelKey: "footer.contact" },
    ],
  },
] as const;

const HomePageFooter = ({ className, ...props }: HomePageFooterProps) => {
  const t = useTranslations();

  return (
    <footer data-slot="footer" className={className} {...props}>
      <Container size="xl" spacing="lg">
        <Divider />

        <div className="flex flex-col items-stretch justify-between gap-12 pt-3 pb-12 lg:flex-row">
          <div className="flex flex-col justify-between gap-4 lg:gap-6">
            <Link href="/" aria-label={t("footer.logoLabel")}>
              <SvgIconOpenable size="auto" className="max-w-xl" />
            </Link>

            <div className="flex flex-col gap-1">
              <Typography variant="small" color="muted">
                {t.rich("footer.copyright", renderers)}
              </Typography>
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            {sections.map((section) => (
              <nav key={section.id} className="flex flex-col gap-3">
                <Typography variant="h4">{t(section.title)}</Typography>

                {section.links.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    className="text-base hover:text-amber-500"
                  >
                    {t(item.labelKey)}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { HomePageFooter };
