import Image from "next/image";
import Title from "../shared/Title";

const data = [
  { title: "FinTech", icon: "/industry/fintech.png" },
  { title: "Healthcare", icon: "/industry/fintech.png" },
  { title: "E-Commerce", icon: "/industry/ecommerce.png" },
  { title: "Automotive", icon: "/industry/automotive.png" },
  { title: "Education", icon: "/industry/education.png" },
  { title: "Real-Estate", icon: "/industry/real-estate.png" },
  { title: "Hospitality", icon: "/industry/hospitality.png" },
  { title: "RMG", icon: "/industry/rmg.png" },
  { title: "Pharmacy", icon: "/industry/pharmacy.png" },
  { title: "Aviation", icon: "/industry/aviation.png" },
  { title: "UI/Ux", icon: "/industry/ui-ux.png" },
  { title: "Many More", icon: "/industry/more.png" },
];
export default function IndustryWeServe() {
  return (
    <div className="my-10">
      <div className="text-center mb-6">
        <Title
          title={"Industry We Serve"}
          subtitle={"Bridge Your Business with the Virtual World"}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center justify-start gap-4 max-w-[1150px] mx-auto p-4">
        {data.map((d, i) => (
          <div key={i}>
            <div className="flex flex-col items-center min-w-42  lg:h-[170px] bg-slate-300 hover:bg-slate-100 duration-100 p-6 rounded-md">
              <Image src={d.icon} alt="Icon" width={80} height={80} />
              <h1 className="mt-2">{d.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
