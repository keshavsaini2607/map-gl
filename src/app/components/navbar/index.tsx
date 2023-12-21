import Link from "next/link";
import React from "react";

export type NavLink = {
   title: string;
   href: string;
};

export type NavbarProps = {
   navLinks: NavLink[];
};

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
   return (
      <nav className="h-[8vh] border-b border-b-gray-300 flex items-center px-20 py-10">
         <h1 className="flex flex-col font-semibold text-orange-600 mr-10">
            <span className="text-lg">Property</span>
            <span>Finder</span>
         </h1>
         <ul className="flex flex-row items-center gap-10">
            {navLinks.map((link, idx) => (
               <li key={idx} className="text-sm">
                  <Link href={link.href}>{link.title}</Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Navbar;
