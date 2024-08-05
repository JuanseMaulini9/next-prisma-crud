import React from "react";
import { ModeToggle } from "./theme-toggle-button";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="flex justify-between py-5">
      <Link href="/">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          NextActionCRUD
        </h1>
      </Link>
      <div className="flex gap-x-2 items-center">
        <Link href="/new" className={buttonVariants({ variant: "secondary" })}>
          Crate Task
        </Link>
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
};
