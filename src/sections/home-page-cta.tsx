import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { SvgIconDownload } from "@/components/icon/svg-icon-download";
import { SvgIconEye } from "@/components/icon/svg-icon-eye";

const renderers = {
  gradient: (chunks: ReactNode) => (
    <span className="bg-linear-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
      {chunks}
    </span>
  ),
} as const;

const HomePageCta = async () => {
  const t = await getTranslations();

  return (
    <Container size="lg">
      <Card variant="solid" spacing="lg">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4">
            <Typography variant="h1" as="h2">
              {t.rich("cta.title", renderers)}
            </Typography>

            <Typography variant="small">{t("cta.description")}</Typography>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="primary">
              <SvgIconDownload size="md" />
              {t("cta.download")}
            </Button>

            <Button variant="secondary">
              <SvgIconEye size="md" />
              {t("cta.docs")}
            </Button>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export { HomePageCta };
