"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SecondaryButton from "./buttons/SecondaryButton";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/program", label: "Program" },
  { href: "/nutrition", label: "Nutrition" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="px-8 py-4 flex justify-between items-center max-w-[1440px] mx-auto">
      {/* Logo */}
      <div>
        <Image src="/images/logo.png" width={104} height={83.31} alt="logo" />
      </div>

      {/* Nav menu */}
      <nav>
        <ul className="flex gap-6 font-medium text-secondary items-center h-full">
          {navItems.map(({ href, label }) => {
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={clsx(
                    "hover:text-primary duration-[400ms]",
                    pathname == href && "text-primary"
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* CTA */}
      <div>
        <SecondaryButton>Contact us</SecondaryButton>
      </div>
    </div>
  );
}
