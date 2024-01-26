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
      <div className="cursor-pointer lg:hidden" onClick={() => setOpen((prev) => !prev)}>
        <Image src="/burger-menu.svg" alt="Icon" width={80} height={80}  />
      </div>

      <div className="hidden lg:block">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={`${pathname === link.url && style.active
              } w-8 h-8 p-2 px-4 mx-1 hover:border-2 hover:border-none hover:rounded-[10px] hover:bg-[#f8b90c7a] hover:drop-shadow-md`}
          >
            {link.title}
          </Link>
        ))}
      </div>

      {
        open && (
          <div className="flex flex-col w-[100px]">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={`${pathname === link.url && style.active
                  } w-8 h-8 p-2 px-4 mx-1 hover:border-2 hover:border-none hover:rounded-[10px] hover:bg-[#f8b90c7a] hover:drop-shadow-md`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        )
      }

    </div>
  );
}

export default NavLink;
