"use client";

import { Link, NavbarItem } from "@heroui/react";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
};

const NavLink = ({ href, label }: Props) => {
  const pathname = usePathname();
  return (
    <NavbarItem isActive={pathname === href} as={Link} href={href}>
      <span>{label}</span>
    </NavbarItem>
  );
};

export default NavLink;
