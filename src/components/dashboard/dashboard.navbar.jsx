"use client"
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from 'next/navigation'
import { UserButton, useUser } from '@clerk/nextjs'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image } from "@nextui-org/react";

export const DashboardNavbar = () => {
  return (
    <Navbar maxWidth="full" isBordered>
      <Image src='/tut-wuri.png' width={40} />
      <NavbarBrand>
        <p className="font-bold text-inherit">UPT SDN WIROGUNAN</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <UserButton showName="true" />
      </NavbarContent>
    </Navbar>
  )
}
