import "@/static/css/globals.css";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import copy from "@/copy/en-EN.json";

import { APP_URL } from "@/utils/constants";

import { HomePageAppBar } from "@/components/home-page-app-bar";
import { HomePageFooter } from "@/components/home-page-footer";

export const metadata: Metadata = {
  title: copy.metadata.title,
  description: copy.metadata.description,
  metadataBase: new URL(APP_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: APP_URL,
    siteName: copy.metadata.siteName,
    title: copy.metadata.ogTitle,
    description: copy.metadata.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: copy.metadata.twitterTitle,
    description: copy.metadata.twitterDescription,
  },
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
      founder: [
        { "@type": "Person", name: "vtemian", url: "https://blog.vtemian.com/" },
        { "@type": "Person", name: "balajmarius", url: "https://balajmarius.com/" },
      ],
      logo: new URL("/icon.svg", APP_URL).toString(),
    },
    {
      "@type": "WebSite",
      name: copy.metadata.siteName,
      description: copy.metadata.description,
      url: new URL("/", APP_URL).toString(),
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
      url: new URL("/", APP_URL).toString(),
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
