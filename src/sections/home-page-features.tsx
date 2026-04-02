import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { gradientRenderer } from "@/utils/renderers";

import madeForCreatorsSrc from "@/static/images/made-for-creators@2x.png";
import githubIntegrationSrc from "@/static/images/github-integration@2x.png";
import openInCursorSrc from "@/static/images/open-in-cursor@2x.png";
import oneClickSetupSrc from "@/static/images/one-click-setup@2x.png";

import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

const renderers = { gradient: gradientRenderer } as const;

const HomePageFeatures = async () => {
  const t = await getTranslations();

  return (
    <Container id="features" size="lg">
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
          <Card variant="solid" className="flex flex-col gap-8 bg-app-4 bg-cover bg-center">
            <CardContent className="w-1/2">
              <Typography variant="h3">{t("features.creators.title")}</Typography>
              <Typography variant="small" color="muted">
                {t("features.creators.description")}
              </Typography>
            </CardContent>

            <Image
              src={madeForCreatorsSrc}
              alt={t("features.creators.title")}
              className="ml-auto h-70 w-auto select-none object-cover"
            />
          </Card>

          <div className="grid grid-cols-2 gap-8">
            <Card variant="solid" className="flex flex-col gap-8 bg-app-2 bg-cover bg-center">
              <CardContent>
                <Typography variant="h3">{t("features.github.title")}</Typography>
                <Typography variant="small" color="muted">
                  {t("features.github.description")}
                </Typography>
              </CardContent>

              <Image
                src={githubIntegrationSrc}
                alt={t("features.github.title")}
                className="mx-auto h-70 w-auto select-none object-cover"
              />
            </Card>

            <Card variant="solid" className="flex flex-col gap-8 bg-app-3 bg-cover bg-center">
              <CardContent>
                <Typography variant="h3">{t("features.cursor.title")}</Typography>
                <Typography variant="small" color="muted">
                  {t("features.cursor.description")}
                </Typography>
              </CardContent>

              <Image
                src={openInCursorSrc}
                alt={t("features.cursor.title")}
                className="mx-auto h-70 w-auto select-none object-cover"
              />
            </Card>
          </div>

          <Card variant="solid" className="flex flex-col gap-8 bg-app-1 bg-cover bg-center">
            <CardContent className="w-1/2">
              <Typography variant="h3">{t("features.setup.title")}</Typography>
              <Typography variant="small" color="muted">
                {t("features.setup.description")}
              </Typography>
            </CardContent>

            <Image
              src={oneClickSetupSrc}
              alt={t("features.setup.title")}
              className="mx-auto h-70 w-auto select-none object-cover"
            />
          </Card>
        </div>
      </div>
    </Container>
  );
};

export { HomePageFeatures };
