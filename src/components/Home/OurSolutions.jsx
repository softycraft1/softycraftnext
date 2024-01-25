"use client";

import { getSoluationsData } from "@/lib/soluationscard/soluationscarddata";
import Image from "next/image";
import { Suspense, useState } from "react";
import Title from "../shared/Title";

const first_data = [
  {
    type: "Business",
    title: "ERP",
    desc: "Business ERP Solution / Product / Shop / Company Management",
    icon: "/soluations/Sales-ERP.png",
  },
  {
    type: "Business",
    title: "HR Mananger",
    desc: "Human Resource Management System HR Software (HRMS)",
    icon: "/soluations/HR-Manager.png",
  },
  {
    type: "Business",
    title: "Wholesale",
    desc: "Inventory Control and Inventory Management System",
    icon: "/soluations/Wholesale.png",
  },
  {
    type: "Business",
    title: "Flight Booking",
    desc: "Flight Booking Software",
    icon: "/soluations/Flight-Booking.png",
  },
  {
    type: "Business",
    title: "VMS",
    desc: "Vehicle Management System",
    icon: "/soluations/VMS.webp",
  },
  {
    type: "Business",
    title: "GMS",
    desc: "Garage Management Software",
    icon: "/soluations/GMS.png",
  },
  {
    type: "Business",
    title: "Innue",
    desc: "Business Live Chat Software",
    icon: "/soluations/Innue.webp",
  },
  {
    type: "Business",
    title: "Bus365",
    desc: "Bus Reservation System",
    icon: "/soluations/Bus-365.webp",
  },
  {
    type: "Business",
    title: "Edutask",
    desc: "Online Course Selling Marketplace",
    icon: "/soluations/Edutask.webp",
  },
];

export default function OurSolutions() {
  const [data, setData] = useState(first_data);

  // console.log(data.icon);

  async function getData(type = "Business") {
    setData(await getSoluationsData(type));
  }

  return (
    <div className="flex flex-col items-center p-10">
      <div>
        <Title title={"Our Solutions"} />
      </div>
      <div>
        <p>
          We provide a time-worthy business solution to every type of business.
          Find out your one and level up your success stairs.
        </p>
      </div>
      <div className="flex flex-row gap-5 m-5">
        <button onClick={() => setData(first_data)} className="btn1">
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Suspense fallback={<h1>Loading..........</h1>}>
              {data.map((d, i) => (
                <div key={i} className="hover:bg-slate-100 p-5">
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center">
                      <Image src={d.icon} alt="icon" width={50} height={50} />
                      <h2 className="font-bold">{d.title}</h2>
                    </div>
                    <div>
                      <p>{d.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
