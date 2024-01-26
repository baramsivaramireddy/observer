"use client";
import { useState } from "react";
import Link from "next/link";
const Layout = ({ children }) => {
  return (
    <>
      <div className="">
     
          <Header />
      
        <div className="">{children}</div>
      </div>
    </>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItems = [
    {
      label: "about",
      href: "./#about",
      style: "",
    },
    {
      label: "architect",
      href: "./#architect",
      style: "",
    },

    {
      label: "members",
      href: "./#membes",
      style: "",
    },
    {
      label: "try it out",
      href: "./#tryitout",
      style: " rounded-full py-2 px-4 bg-blue-500 text-white font-semibold",
    },
  ];
 
  return (
    <>
      <header className=" sticky  top-0 z-10  bg-white  shadow-md border-b-2 py-4 px-1 flex flex-col md:flex-row md: justify-between ">
        <div className="flex flex-row items-center">
          <p className="font-bold text-xl"> <Link href={'/'}> Observer </Link></p>

          <div
            className="md:hidden  text-3xl ml-auto"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
           ≡
          </div>
        </div>
        <div className={`${isMobileMenuOpen? "" : "hidden"} md:flex`}>
          <ul onClick={() =>{setIsMobileMenuOpen(false)}} className="flex flex-col gap-10 md:flex-row md:gap-5 items-center capitalize ">
            {NavItems.map((navitem, index) => (
              <li key={index}>
                <Link href={navitem.href} className={navitem.style}>
                  {" "}
                  {navitem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};
export default Layout;
