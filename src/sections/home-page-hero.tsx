import { getTranslations } from "next-intl/server";

import productPosterSrc from "@/static/images/product-poster@2x.png";

import { gradientRenderer, mutedRenderer } from "@/utils/renderers";

import { SvgIconDownload } from "@/components/icon/svg-icon-download";
import { SvgIconCursor } from "@/components/icon/svg-icon-cursor";
import { SvgIconGear } from "@/components/icon/svg-icon-gear";
import { SvgIconGlitters } from "@/components/icon/svg-icon-glitters";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Entrance } from "@/components/ui/entrance";
import { LavaBlob } from "@/components/ui/lava-blob";
import { Typography } from "@/components/ui/typography";

const renderers = {
  gradient: gradientRenderer,
  muted: mutedRenderer,
} as const;

const features = [
  {
    icon: SvgIconGear,
    titleKey: "hero.features.zero.title",
    descKey: "hero.features.zero.description",
  },
  {
    icon: SvgIconCursor,
    titleKey: "hero.features.cursor.title",
    descKey: "hero.features.cursor.description",
  },
  {
    icon: SvgIconGlitters,
    titleKey: "hero.features.ai.title",
    descKey: "hero.features.ai.description",
  },
] as const;

const HomePageHero = async () => {
  const t = await getTranslations();

  return (
    <div id="overview" className="relative flex flex-col items-center gap-16">
      <LavaBlob />

      <Entrance delay={0.1}>
        <Container size="sm" className="px-12 lg:px-4">
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
      </Entrance>

      <Entrance delay={0.2}>
        <Container size="lg">
          <Card variant="glass" spacing="sm" className="w-full overflow-hidden">
            <CardContent>
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={productPosterSrc.src}
                className="h-full w-full rounded-xl object-cover"
              >
                <source src="/videos/product.mp4" type="video/mp4" />
              </video>
            </CardContent>
          </Card>
        </Container>
      </Entrance>

      <Entrance delay={0.3}>
        <Container size="md">
          <div className="flex flex-col gap-6 sm:flex-row">
            {features.map((feature) => (
              <div key={feature.titleKey} className="flex flex-1 flex-col gap-4">
                <feature.icon className="size-8 text-white" />
                <div className="flex flex-col gap-1">
                  <Typography variant="small" fontWeight="semibold">
                    {t(feature.titleKey)}
                  </Typography>
                  <Typography variant="overline" color="muted">
                    {t(feature.descKey)}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Entrance>
    </div>
  );
};

export { HomePageHero };
