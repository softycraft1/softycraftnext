"use client"

import Image from "next/image";
import { Suspense } from "react";


const Projects = () => {
  
  
    return (
        <div>
            <div>

            </div>
            <div className="">
          <Suspense fallback={<h1>Loading..........</h1>}>
            {data.map((d, i) => (
              <div
                key={i}
                className="h-40 bg-[#ececec9d] odd:bg-[#4bb4774d] hover:bg-[#85d46d9c] p-8 m-2 "
              >
                <div className="flex flex-col justify-left items-start gap-1">
                  <div className="flex justify-center items-center gap-3">
                    <Image src={d.picture} alt="icon" width={350} height={350} />
                    <h2 className="font-bold">{d.title}</h2>
                  </div>
                  <div>
                    <p className="font-normal">{d.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Suspense>
        </div>
        </div>
    );
};

export default Projects;