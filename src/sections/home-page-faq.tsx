"use client";

import { useTranslations } from "next-intl";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { SvgIconEye } from "@/components/icon/svg-icon-eye";

const faqKeys = [
  "faq.items.code",
  "faq.items.import",
  "faq.items.platforms",
  "faq.items.builtForMe",
  "faq.items.free",
] as const;

const HomePageFaq = () => {
  const t = useTranslations();

  return (
    <Container size="sm">
      <div className="flex flex-col items-center gap-12">
        <div className="flex w-full flex-col gap-4">
          <Typography
            variant="h2"
            className="bg-linear-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent"
          >
            {t("faq.title")}
          </Typography>
          <Typography variant="small" color="muted">
            {t("faq.subtitle")}
          </Typography>
        </div>

        <Accordion className="w-full">
          {faqKeys.map((key) => (
            <AccordionItem key={key}>
              {(isOpen, toggle) => (
                <>
                  <AccordionTrigger isOpen={isOpen} onToggle={toggle}>
                    {t(`${key}.question`)}
                  </AccordionTrigger>
                  <AccordionContent isOpen={isOpen}>{t(`${key}.answer`)}</AccordionContent>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>

        <Button variant="secondary">
          <SvgIconEye size="md" />
          {t("faq.docs")}
        </Button>
      </div>
    </Container>
  );
};

export { HomePageFaq };
