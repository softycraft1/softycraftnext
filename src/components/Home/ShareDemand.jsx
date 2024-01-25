import Link from "next/link";
import DemandCard from "../shared/DemandCard";
import Title from "../shared/Title";

const ShareDemand = () => {
  return (
    <div className="p-10">
      {/* Title and Subtitle */}
      <Title
        title={"Share Your Demand to Design Any Customized Software"}
        subtitle={
          "SoftyCraft, Inc. focuses on the exact requirements of the clients. We design and develop the best and most advanced software for all types of businesses."
        }
      />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <DemandCard
          image={"/demands/software-development.webp"}
          title={"Software Development"}
          description={
            "We can develop any kind of software solution to automate your business operations according to your requirements. Our strength is to develop customized software."
          }
          bg={"bg-slate-200"}
        />
        <DemandCard
          image={"/demands/website-development.webp"}
          title={"Website Development"}
          description={
            "A website can represent your business identity, we can develop it according to the motive of your business."
          }
          bg={"bg-gray-100"}
        />
        <DemandCard
          image={"/demands/mobile-app-development.webp"}
          title={"Mobile App Development"}
          description={
            "SoftyCrafts develops both Android and iOS application to make your business operation more Convenient and flexible."
          }
          bg={"bg-slate-200"}
        />
        <DemandCard
          image={"/demands/e-commerce.webp"}
          title={"E-Commerce"}
          description={
            "We have readymade eCommerce software solutions as well as develop the eCommerce solution based on your demand."
          }
          bg={"bg-gray-100"}
        />
        <DemandCard
          image={"/demands/blogging-platfoem.webp"}
          title={"Blogging Platform"}
          description={
            "We can develop an SEO-friendly content management system to publish blogs, articles, online news, and so on."
          }
          bg={"bg-slate-200"}
        />
        <div className="p-10 bg-gray-100 hover:bg-cyan-50 duration-300 flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl mb-5">Custom Software Development</h1>
          <Link className="btn2" href="/custom-order">
            Submit Request
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShareDemand;
