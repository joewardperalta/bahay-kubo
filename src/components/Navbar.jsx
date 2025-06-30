import Image from "next/image";
import Link from "next/link";
import SecondaryButton from "./buttons/SecondaryButton";

export default function Navbar() {
  return (
    <div className="px-8 py-4 flex justify-between items-center max-w-[1440px] mx-auto">
      {/* Logo */}
      <div>
        <Image src="/images/Logo.png" width={104} height={83.31} />
      </div>

      {/* Nav menu */}
      <nav>
        <ul className="flex gap-6 font-medium text-primary items-center h-full">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/program">Program</Link>
          </li>
          <li>
            <Link href="/nutrition">Nutrition</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
        </ul>
      </nav>

      {/* CTA */}
      <div>
        <SecondaryButton>Contact us</SecondaryButton>
      </div>
    </div>
  );
}
