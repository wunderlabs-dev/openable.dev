import "@/static/css/globals.css";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";

import copy from "@/copy/en-EN.json";
import { HomePageAppBar } from "@/components/home-page-app-bar";
import { HomePageFooter } from "@/components/home-page-footer";

const SITE_URL = "https://openable.dev";

const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

const openGraphImage = {
  url: "/images/og-default-1200x630.svg",
  width: OG_IMAGE_WIDTH,
  height: OG_IMAGE_HEIGHT,
  alt: copy.metadata.siteName,
};

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: "/",
    },
    icons: "/images/favicon.svg",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: SITE_URL,
      siteName: copy.metadata.siteName,
      title: t("metadata.ogTitle"),
      description: t("metadata.ogDescription"),
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title: t("metadata.twitterTitle"),
      description: t("metadata.twitterDescription"),
      images: [openGraphImage],
    },
  };
};

const data = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: copy.metadata.organizationName,
      email: copy.metadata.organizationEmail,
      url: copy.metadata.organizationUrl,
      sameAs: copy.metadata.organizationSameAs,
      logo: new URL("/images/favicon.svg", SITE_URL).toString(),
    },
    {
      "@type": "WebSite",
      name: copy.metadata.siteName,
      description: copy.metadata.description,
      url: new URL("/", SITE_URL).toString(),
      inLanguage: "en-US",
      publisher: {
        "@type": "Organization",
        name: copy.metadata.organizationName,
        url: copy.metadata.organizationUrl,
      },
    },
    {
      "@type": "SoftwareApplication",
      name: copy.metadata.siteName,
      description: copy.metadata.description,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      url: new URL("/", SITE_URL).toString(),
      image: new URL(openGraphImage.url, SITE_URL).toString(),
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: {
        "@type": "Organization",
        name: copy.metadata.organizationName,
        url: copy.metadata.organizationUrl,
      },
    },
  ],
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(data),
            }}
          />
          <HomePageAppBar />
          <main className="flex flex-col gap-24 overflow-hidden pt-32 lg:gap-48 lg:pt-48">
            {children}
          </main>
          <HomePageFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
