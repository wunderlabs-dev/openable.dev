import { HomePageHero } from "@/sections/home-page-hero";
import { HomePageFaq } from "@/sections/home-page-faq";
import { HomePageCta } from "@/sections/home-page-cta";

const Home = async () => {
  return (
    <>
      <HomePageHero />
      <HomePageFaq />
      <HomePageCta />
    </>
  );
};

export default Home;
