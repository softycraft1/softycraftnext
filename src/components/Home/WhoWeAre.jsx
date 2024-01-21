import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WhoWeAre() {
  return (
    <div className="flex flex-row items-center gap-8 p-10">
      <div className="basis-1/2 ms-6">
        <div className="flex flex-col gap-5">
          <div>
            <h1>Who We Are</h1>
          </div>
          <div>
            <h1 className="text-4xl">We are From Another Space to Automate the World</h1>
          </div>
          <div className="my-6">
            <p>
              SoftyCraft works in multiple areas including software development,
              website development, customized software solution, mobile app
              development, theme design, and development. Our dream is to
              continue your journey with success.
            </p>
          </div>
          <div>
            <Link className="btn2" href="/about">More About Us</Link>
          </div>
        </div>
      </div>
      <div className="basis-1/2">
        <Image
          width={500}
          height={500}
          src="/who-we-are.webp"
          alt="Img"
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        ></Image>
      </div>
    </div>
  );
}
