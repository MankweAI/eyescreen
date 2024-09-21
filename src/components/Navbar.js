// components/Navbar.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full pt-4 flex justify-center items-center">
      <Link href="/">
        <Image
          src="/images/agentic-vision-logo.png"
          alt="Logo"
          width={60}
          height={10}
          className="inline-block cursor-pointer"
        />
      </Link>
      <div className="w-auto h-auto">
        <span className="text-[#C60D69] border-2 border-[#C60D69] px-2 rounded-xl text-sm font-bold text-center inline-block w-auto">
          EyeScreen
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
