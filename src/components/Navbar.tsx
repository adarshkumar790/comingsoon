import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/story", label: "Our Story" },
    { href: "/music", label: "Music" },
    // { href: "/news", label: "News" },
    // { href: "/blog", label: "Blog" },
    { href: "/connect", label: "Connect" },
    {href:"/login", label: "admin"}
  ];

  return (
    <nav className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-red-400 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>


      <div
        className={`fixed top-0 left-0 h-full text-white md:w-32 w-32 transition-transform transform ${
          isOpen ? "translate-x-0 mt-28" : "-translate-x-full mt-24"
        }`}
      >
        <div className="flex flex-col items-start p-2 md:p-3 space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-semibold text-blue-200 hover:text-yellow-400 text-center underline underline-offset-8"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
