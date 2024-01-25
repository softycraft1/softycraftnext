import Link from "next/link";
import React from "react";
import NavLink from "./NavLink/NavLink";

const Navbar = () => {
  return (
    <div className="p-4 px-10 w-full m-auto sticky top-0 bg-[#ffffff7c]">
      <div className="flex justify-between ">
        <div className="">
          <h1 className="text-2xl font-bold">
            <Link href="/">SoftyCraft</Link>
          </h1>
        </div>
        <div className="">
          <NavLink />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
