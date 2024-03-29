import ContactFrom from "@/components/Contact/ContactFrom";
import ContactSide from "@/components/Contact/ContactSide";

export const metadata = {
  title: "SoftyCraft || Contact",
  description: "Generated by create next app",
};
const contact = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-6 my-12 p-3 w-full ">
      <ContactFrom />
      <ContactSide />
    </div>
  );
};

export default contact;
