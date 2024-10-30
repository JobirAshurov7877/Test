import { ExploreServices, WeGuarantee } from "@/components";
import FAQ from "@/components/FAQ";
import AboutUs from "@/widgets/home/AboutUs";
import DownloadOurApp from "@/widgets/home/DownloadOurApp";
import Header from "@/widgets/home/Header";
import OurServices from "@/widgets/home/OurServices";
import SubServiceAbout from "@/widgets/home/Partners";
import TopArticles from "@/widgets/home/TopArticles";

export default function Home() {
  return (
    <>
      <Header />
      <OurServices />
      <DownloadOurApp />
      <AboutUs />
      <WeGuarantee />
      <SubServiceAbout />
      <TopArticles />
      <ExploreServices />
      <FAQ />
    </>
  );
}
