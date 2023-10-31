"use client";

import { usePathname } from "next/navigation";
import React from "react";
import animationData from './cat.json'
import Lottie from "lottie-react";
import { ChevronLeft } from "lucide-react";
import { Button, Link } from "@nextui-org/react";

export const AuthTemplate = ({ children }) => {
  const pathname = usePathname();

  if (pathname === "/verify") {
    return <section className="h-screen flex justify-center items-center">{children}</section>;
  }

  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 h-screen">
      <Link href="/" className="fixed top-9 left-9">
        <Button variant="bordered" className="flex items-center gap-1">
          <ChevronLeft size={18} />
          Back to Home
        </Button>
      </Link>
      <section className="hidden lg:flex lg:justify-center bg-secondary-50 p-8 col-span-2"><Lottie animationData={animationData} loop={true} size={40} />
      </section>
      <section className="flex justify-center items-center">{children}</section>
    </main>
  );
};
