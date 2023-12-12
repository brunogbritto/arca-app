import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className=" flex items-center w-fit space-x-2">
        <div>
          <Image src="/lib/logo3.jpg" alt="logo" height={100} width={100} />
        </div>
        <h1 className="font-bold text-xl">Arca</h1>
      </Link>
      <div className="px-5 flex space-x-2 items-center">
        {/* theme toggler*/}

        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
