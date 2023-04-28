"use client";

import React, { useEffect, useState } from "react";
import Headroom from "react-headroom";
import ThemeSwitch from "./ThemeSwitch";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import MobileMenu from "./MobileMenu";

interface NavItemProps {
  href: string;
  text: string;
}

export const NavItem = ({ href, text }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname?.startsWith(href);

  return (
    <Link
      href={href}
      className={classNames(
        isActive
          ? "font-bold gradient-text"
          : "font-normal text-gray-500 dark:text-gray-400",
        "hover:text-gray-900 dark:hover:text-gray-200 transition-all text-xl"
      )}
    >
      {text}
    </Link>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Headroom style={{ zIndex: 50 }}>
      <header className="relative z-50 py-6 backdrop-blur-md">
        <Container>
          <div className="flex justify-between items-center">
            <Logo />
            <nav className="hidden md:block">
              <ul className="flex gap-8 text-lg">
                <NavItem href="/about" text="About" />
                <NavItem href="/projects" text="Projects" />
                <NavItem href="/posts" text="Posts" />
              </ul>
            </nav>
            <button
              className="absolute z-50 top-8 right-4 md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Menu"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
            <div className="hidden md:block">
              <ThemeSwitch />
            </div>
          </div>
        </Container>
      </header>
      <MobileMenu isOpen={isOpen} />
    </Headroom>
  );
};

export default Header;
