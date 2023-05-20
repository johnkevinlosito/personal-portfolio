import React from "react";
import { NavItem } from "./Header";
import ThemeSwitch from "./ThemeSwitch";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  return (
    <>
      {isOpen ? (
        <div className="fixed md:hidden z-40 transition-all duration-700 delay-100 ease-in-out bg-gradient-to-b from-gray-200 dark:from-gray-900 to-transparent backdrop-blur-xl w-screen p-4 gap-12 top-0 h-screen">
          <ul className="flex flex-col justify-center align-center text-center gap-4 h-full">
            <NavItem href="/about" text="About" />
            <NavItem href="/projects" text="Projects" />
            <NavItem href="/blog" text="Blog" />
            <li className="flex justify-center mt-12">
              <ThemeSwitch />
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default MobileMenu;
