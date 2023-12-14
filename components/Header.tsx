import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    <header className="flex items-center justify-between h-[60px]">
      <Link href="/" className=" flex items-center w-fit space-x-2">
        <div>
          <Image src="/logo3.jpg" alt="logo" height={75} width={75} />
        </div>
        <h1 className="font-bold text-2xl">Arca</h1>
      </Link>
      <div className="px-5 flex space-x-2 items-center">
        <ThemeToggler />

        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
