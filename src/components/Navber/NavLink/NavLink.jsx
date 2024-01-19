"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./NavLink.module.css";

function NavLink() {
  const pathname = usePathname();
  console.log(pathname);
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
    <div>
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          className={`${
            pathname === link.title && style.active
          } w-8 h-8 p-4 hover:border-2 hover:border-none hover:rounded-[25px] hover:bg-[#F8B90C] hover:drop-shadow-md`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default NavLink;
