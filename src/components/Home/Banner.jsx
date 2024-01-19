import Image from "next/image";

function Banner() {
  return (
    <div className="flex flex-row gap-4 items-center m-6">
      <div className="w-[50%] p-4">
        <h1 className="text-4xl font-bold leading-snug my-4">
          Best Web-base Application Development Company To Architect The Dream
          For Next Generation
        </h1>
        <p className="text-xl font-medium">
          SoftyCraft, has a global reputation for up to scratch customer
          experience which marks us as one of the best Web-base Application
          development companies in the world.
        </p>
        <div></div>
      </div>
      <div className="w-[50%] p-4">
        <Image
          className="mx-auto rounded-2xl"
          style={{ objectFit: "contain" }}
          src="/dev-team.jpg"
          alt="img"
          sizes=""
          width={800}
          height={500}
        />
      </div>
    </div>
  );
}

export default Banner;
