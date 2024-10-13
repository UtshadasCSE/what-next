import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="bg-purple-400 ">
      <nav className="flex justify-between items-center mx-5 py-2">
        <div>
          <h2>Logo</h2>
        </div>
        <div>
          <ul className="flex gap-3">
            {navLinks?.map((link) => (
              <Link key={link.path} href={link.path}>
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <button className="p-4 bg-red-500 rounded-md">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
