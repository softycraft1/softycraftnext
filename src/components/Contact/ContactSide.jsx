import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function ContactSide() {
  return (
    <div className="flex flex-col gap-5 m-5 max-w-[700px]">
      <h1 className="text-5xl font-bold">{"Don’t Hesitate to contact with us for any kind of information"}</h1>
      <p className="text-2xl">Call us for query</p>
      <h3 className="text-3xl font-semibold">+880123456789</h3>
      <div className="flex flex-row gap-4 text-3xl">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedinIn />
      </div>
    </div>
  );
}
