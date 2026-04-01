"use client";

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { SvgIconSteps } from "@/components/icon/svg-icon-steps";

const renderers = {
  gradient: (chunks: ReactNode) => (
    <span className="bg-linear-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
      {chunks}
    </span>
  ),
} as const;

const stepKeys = [
  { key: "steps.items.import", step: "01" },
  { key: "steps.items.setup", step: "02" },
  { key: "steps.items.run", step: "03" },
  { key: "steps.items.edit", step: "04" },
] as const;

const HomePageSteps = () => {
  const t = useTranslations();

  return (
    <Container size="lg">
      <div className="flex flex-col gap-16">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <Typography variant="h2" className="whitespace-pre-line">
              {t.rich("steps.title", renderers)}
            </Typography>
            <Typography variant="small" color="muted">
              {t("steps.description")}
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-24">
          <div className="col-span-1 relative">
            <SvgIconSteps active={0} className="absolute right-0 h-full w-auto" />
          </div>

          <div className="col-span-1 flex flex-col gap-16">
            {stepKeys.map(({ key, step }) => (
              <div key={key} className="flex flex-col gap-6 opacity-25">
                <div className="flex flex-col">
                  <Typography variant="small" fontWeight="semibold">
                    {step}
                  </Typography>
                  <Typography variant="h3">{t(`${key}.title`)}</Typography>
                </div>
                <Typography variant="small" color="muted">
                  {t(`${key}.description`)}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export { HomePageSteps };
