import React from "react";
import Logo from "../_components/logo/logo";
import Link from "next/link";
import { MenuBar } from "../_components/menubar";

export default function Navbar() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/">
        <Logo className="w-14 h-14" />
      </Link>
      <MenuBar />
    </div>
  );
}
