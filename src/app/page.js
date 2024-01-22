import Banner from "@/components/Home/Banner";
import IndustryWeServe from "@/components/Home/IndustryWeServe";
import OurSolutions from "@/components/Home/OurSolutions";
import WhoWeAre from "@/components/Home/WhoWeAre";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <OurSolutions />
      <WhoWeAre />
      <IndustryWeServe />
    </div>
  );
}
