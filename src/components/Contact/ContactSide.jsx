import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function ContactSide() {
  return (
    <div className="flex flex-col">
      <h1>{"Don’t Hesitate to contact with us for any kind of information"}</h1>
      <p>Call us for query</p>
      <h3>+880123456789</h3>
      <div className="flex flex-row gap-3">
        <h1>
          <FaFacebookF />
        </h1>
        <h1>
          <FaInstagram />
        </h1>
        <h1>
          <FaTwitter />
        </h1>
        <h1>
          <FaLinkedinIn />
        </h1>
      </div>
    </div>
  );
}
