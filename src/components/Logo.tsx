import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" passHref>
      <div className="group relative transition whitespace-nowrap hover:transition duration-300 text-2xl font-bold flex gap-4 items-center">
        <Image
          src={"/assets/avatar_memoji.jpg"}
          width={48}
          height={48}
          quality={100}
          alt="Memoji"
          className="w-12 h-12"
        />
        <span className="transition duration-300 opacity-0 md:opacity-100 group-hover:opacity-100 md:group-hover:opacity-0">
          @johnkevinlosito
        </span>
        <span className="absolute transition duration-300 left-16 opacity-100 md:opacity-0 group-hover:opacity-0 md:group-hover:opacity-100 group-hover:gradient-text">
          John Kevin
        </span>
      </div>
    </Link>
  );
};

export default Logo;
