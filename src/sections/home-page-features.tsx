import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

const renderers = {
  gradient: (chunks: ReactNode) => (
    <span className="bg-linear-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
      {chunks}
    </span>
  ),
} as const;

const HomePageFeatures = async () => {
  const t = await getTranslations();

  return (
    <Container size="lg">
      <div className="grid grid-cols-2 gap-16">
        <div className="flex flex-col gap-4">
          <Typography variant="h2" className="whitespace-pre-line">
            {t.rich("features.title", renderers)}
          </Typography>
          <Typography variant="small" color="muted">
            {t("features.description")}
          </Typography>
        </div>

        <div className="col-span-2 flex flex-col gap-8">
          <Card variant="solid" spacing="md" className="h-116">
            <div className="flex flex-col gap-2 w-1/2">
              <Typography variant="h5">{t("features.creators.title")}</Typography>
              <Typography variant="small" color="muted">
                {t("features.creators.description")}
              </Typography>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-8">
            <Card variant="solid" spacing="md" className="h-116">
              <div className="flex flex-col gap-2">
                <Typography variant="h5">{t("features.github.title")}</Typography>
                <Typography variant="small" color="muted">
                  {t("features.github.description")}
                </Typography>
              </div>
            </Card>

            <Card variant="solid" spacing="md" className="h-116">
              <div className="flex flex-col gap-2">
                <Typography variant="h5">{t("features.cursor.title")}</Typography>
                <Typography variant="small" color="muted">
                  {t("features.cursor.description")}
                </Typography>
              </div>
            </Card>
          </div>

          <Card variant="solid" spacing="md" className="h-116">
            <div className="flex flex-col gap-2 w-1/2">
              <Typography variant="h5">{t("features.setup.title")}</Typography>
              <Typography variant="small" color="muted">
                {t("features.setup.description")}
              </Typography>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export { HomePageFeatures };
