import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import SocialIcons from "../SocialIcons";
import Search from "../Search";

function Header({
  navigation,
}: {
  navigation: { label: string; url: string }[];
}) {
  return (
    <header className="navbar px-4 lg:px-6 gap-2">
      <div className="flex-1 items-center">
        <Logo />
      </div>
      <Search />
      <SocialIcons />
      <div className="hidden lg:flex-none lg:block">
        <ul className="menu menu-horizontal px-1 gap-1">
          {navigation.map((link) => (
            <li key={link.label}>
              <Link href={link.url} aria-label={`Page ${link.label}`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
