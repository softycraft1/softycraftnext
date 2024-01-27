"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./NavLink.module.css";

function NavLink() {
  const pathname = usePathname();

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
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
          } py-2 px-4 mx-1 hover:bg-[#1a1a1a] hover:text-white duration-300`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default NavLink;
