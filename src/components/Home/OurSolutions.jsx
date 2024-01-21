"use client";

import { getSoluationsData } from "@/lib/soluationscard/soluationscarddata";
import { Suspense, useState } from "react";

export default function OurSolutions() {
  const [data, setData] = useState([]);
  console.log(data);
  // const data = await getSoluationsData("Business");
  async function getData(type = "Business") {
    setData(await getSoluationsData(type));
  }

  return (
    <div className="flex flex-col items-center p-10">
      <div>
        <h1 className="text-4xl m-6">Our Solutions</h1>
      </div>
      <div>
        <p>
          We provide a time-worthy business solution to every type of business.
          Find out your one and level up your success stairs.
        </p>
      </div>
      <div className="flex flex-row gap-5 m-5">
        {/* <button
          onClick={async () => setData(await getSoluationsData("Business"))}
          className="btn1"
        >
          Business
        </button>
        <button
          onClick={async () => setData(await getSoluationsData("Hospitality"))}
          className="btn1"
        >
          Hospitality
        </button>
        <button
          onClick={async () => setData(await getSoluationsData("E-Commerce"))}
          className="btn1"
        >
          E-commerce
        </button>
        <button
          onClick={async () => setData(await getSoluationsData("Healthcare"))}
          className="btn1"
        >
          Healthcare
        </button> */}
        <button onClick={() => getData("Business")} className="btn1">
          Business
        </button>
        <button onClick={() => getData("Hospitality")} className="btn1">
          Hospitality
        </button>
        <button onClick={() => getData("E-Commerce")} className="btn1">
          E-commerce
        </button>
        <button onClick={() => getData("Healthcare")} className="btn1">
          Healthcare
        </button>
      </div>
      <div>
        <div className="flex flex-row gap-2">
          <div>
            <h1>icon</h1>
          </div>
          <div className="flex flex-col">
            <Suspense fallback={<h1>Loading..........</h1>}>
              {data.map((d, i) => (
                <div key={i}>
                  <h1>{d.title}</h1>
                  <p>{d.desc}</p>
                </div>
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
