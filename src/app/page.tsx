import { HomePageHero } from "@/sections/home-page-hero";
import { HomePageFeatures } from "@/sections/home-page-features";
import { HomePageFaq } from "@/sections/home-page-faq";
import { HomePageCta } from "@/sections/home-page-cta";

const Home = async () => {
  return (
    <>
      <HomePageHero />
      <HomePageFeatures />
      <HomePageFaq />
      <HomePageCta />
    </>
  );
};

export default Home;
