// components/Navbar.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full pt-4 text-center">
      <Link href="/">
        <Image
          src="/images/agentic-vision-logo.png"
          alt="Logo"
          width={60}
          height={10}
          className="inline-block cursor-pointer"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
