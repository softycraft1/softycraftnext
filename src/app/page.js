import Banner from "@/components/Home/Banner";
import IndustryWeServe from "@/components/Home/IndustryWeServe";
import OurSolutions from "@/components/Home/OurSolutions";
import ShareDemand from "@/components/Home/ShareDemand";
import WhoWeAre from "@/components/Home/WhoWeAre";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <OurSolutions />
      <WhoWeAre />
      <IndustryWeServe />
      <ShareDemand />
      <Projects/>
    </div>
  );
}
