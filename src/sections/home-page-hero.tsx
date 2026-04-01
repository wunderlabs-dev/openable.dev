import type { ReactNode } from "react";
import { SettingsIcon, MousePointerIcon, SparklesIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { SvgIconDownload } from "@/components/icon/svg-icon-download";

const renderers = {
  gradient: (chunks: ReactNode) => (
    <span className="bg-linear-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
      {chunks}
    </span>
  ),
  muted: (chunks: ReactNode) => <span className="text-grey-100">{chunks}</span>,
} as const;

const features = [
  {
    icon: SettingsIcon,
    titleKey: "hero.features.zero.title",
    descKey: "hero.features.zero.description",
  },
  {
    icon: MousePointerIcon,
    titleKey: "hero.features.cursor.title",
    descKey: "hero.features.cursor.description",
  },
  {
    icon: SparklesIcon,
    titleKey: "hero.features.ai.title",
    descKey: "hero.features.ai.description",
  },
] as const;

const HomePageHero = async () => {
  const t = await getTranslations();

  return (
    <div className="flex flex-col items-center gap-16">
      <Container size="md">
        <div className="flex flex-col gap-2">
          <Typography variant="small" fontWeight="semibold">
            {t.rich("hero.brand", renderers)}
          </Typography>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Typography variant="h1">{t.rich("hero.title", renderers)}</Typography>
              <Typography variant="small">{t("hero.description")}</Typography>
            </div>

            <Button variant="primary" className="self-start">
              <SvgIconDownload size="md" />
              {t("hero.download")}
            </Button>
          </div>
        </div>
      </Container>

      <Card variant="glass" spacing="none" className="h-136 w-full max-w-section" />

      <Container size="lg">
        <div className="flex gap-6">
          {features.map((feature) => (
            <div key={feature.titleKey} className="flex flex-1 flex-col gap-4">
              <feature.icon className="size-8 text-white" />
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold leading-6">{t(feature.titleKey)}</p>
                <p className="text-sm leading-5 text-grey-100">{t(feature.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export { HomePageHero };
