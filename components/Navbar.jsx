"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();
  if (pathName.includes("dashboard")) return <div>Hello Dash Nav</div>;
  const handler = () => {
    router.push("/login");
  };
  const navLinks = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
  ];
  return (
    <div>
      <div>
        <nav className="bg-slate-800 text-white flex justify-between items-center p-3">
          <div>Logo</div>
          <div>
            <ul className="flex gap-4">
              {navLinks?.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`${pathName === link.path && "text-yellow-400"}`}
                >
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <button
              onClick={handler}
              className="p-3 bg-pink-300 text-black rounded-md"
            >
              Login
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
