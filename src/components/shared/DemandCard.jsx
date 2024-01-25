import Image from "next/image";

const DemandCard = ({ image, title, description, bg }) => {
  return (
    <div className={`p-10 ${bg && bg} space-y-3 hover:bg-cyan-50 duration-300`}>
      <Image src={image && image} alt={title} width={80} height={80} />
      <h1 className="font-bold text-xl">{title && title}</h1>
      <p className="text-neutral-600">{description && description}</p>
    </div>
  );
};

export default DemandCard;
