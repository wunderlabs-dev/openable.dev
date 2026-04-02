import "@/static/css/globals.css";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";

import { AppBar } from "@/components/ui/app-bar";
import { Footer } from "@/components/ui/footer";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className="scroll-smooth bg-grey-900 text-white selection:bg-amber-500 selection:text-white"
    >
      <body className="bg-linear-to-b from-grey-800 to-grey-900 antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppBar />
          <main className="flex flex-col gap-48 pt-48">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
