"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./NavLink.module.css";
import Image from "next/image";
import { useState } from "react";

function NavLink() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Projects",
      url: "/projects",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
  return (
    <div className="font-semibold">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          className={`${
            pathname === link.url && style.active
          } w-8 h-8 p-2 px-4 mx-1 hover:bg-[#2e2e2e] hover:text-white duration-200 hover:drop-shadow-md`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default NavLink;
