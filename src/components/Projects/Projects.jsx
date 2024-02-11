import { getProjectData } from "@/lib/projectdata/projectdata";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";



const Projects = async () => {
  const datas = (await getProjectData()).slice(1, 6);

  return (
    <div>
      <div className="">
        <Suspense fallback={<h1>Loading..........</h1>}>
          {datas.map((data) => (
            <div
              key={data.id}
              className="h-40 bg-[#ececec9d] odd:bg-[#4bb4774d] hover:bg-[#85d46d9c] p-8 m-2 "
            >
              <div className="flex flex-col justify-left items-start gap-1">
                <div className="flex justify-center items-center gap-3">
                  <Image
                    src={data.picture}
                    alt="icon"
                    width={350}
                    height={350}
                  />
                  <h2 className="font-bold">{data.title}</h2>
                </div>
                <div>
                  <p className="font-normal">{data.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Suspense>
      </div>
      <div>
        <Link className="btn2" href="/projects">
          {" "}
          Show More.........
        </Link>
      </div>
    </div>
  );
};

export default Projects;
