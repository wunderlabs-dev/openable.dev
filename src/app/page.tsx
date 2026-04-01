import { getTranslations } from "next-intl/server";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

const Home = async () => {
  const t = await getTranslations();

  return (
    <Container size="lg" spacing="lg">
      <Typography variant="h2">{t("metadata.title")}</Typography>

      <div className="mt-12 flex flex-col gap-8">
        <Card variant="solid" spacing="md">
          <Typography variant="h4">Solid / md</Typography>
          <Typography variant="small" color="muted">
            Opaque card with 32px padding
          </Typography>
        </Card>

        <Card variant="solid" spacing="lg">
          <Typography variant="h4">Solid / lg</Typography>
          <Typography variant="small" color="muted">
            Opaque card with 48px padding
          </Typography>
        </Card>

        <Card variant="glass" spacing="md">
          <Typography variant="h4">Glass / md</Typography>
          <Typography variant="small" color="muted">
            Translucent card with 32px padding
          </Typography>
        </Card>

        <Card variant="glass" spacing="lg">
          <Typography variant="h4">Glass / lg</Typography>
          <Typography variant="small" color="muted">
            Translucent card with 48px padding
          </Typography>
        </Card>
      </div>
    </Container>
  );
};

export default Home;
