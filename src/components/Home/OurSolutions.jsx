import { getSoluationsData } from "@/lib/soluationscard/soluationscarddata";

export default async function OurSolutions() {
  const data = await getSoluationsData("Business");

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="text-4xl">Our Solutions</h1>
      </div>
      <div>
        <p>
          We provide a time-worthy business solution to every type of business.
          Find out your one and level up your success stairs.
        </p>
      </div>
      <div className="flex flex-row gap-5">
        <div>Business</div>
        <div>BlockChain</div>
        <div>Hospitality</div>
        <div>E-commerce</div>
        <div>Healthcare</div>
      </div>
      <div>
        <div className="flex flex-row gap-2">
          <div>
            <h1>icon</h1>
          </div>
          <div className="flex flex-col">
            {data.map((d, i) => (
              <div key={i}>
                <h1>{d.title}</h1>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
