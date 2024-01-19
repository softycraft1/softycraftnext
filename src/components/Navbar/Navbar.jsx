import Link from "next/link";
import React from "react";
import NavLink from "./NavLink/NavLink";

const Navbar = () => {
  return (
    <div className="mt-8 w-10/12 m-auto">
      <div className="flex justify-between h-12">
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
