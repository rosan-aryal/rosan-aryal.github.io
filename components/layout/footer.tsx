import { links } from "@/data/links";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto px-4 ">
      <div className="w-full">
        <div>
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={48}
            height={48}
            className="mx-auto"
          />
        </div>
        <div className="mb-6 text-center text-4xl">Roshan Aryal</div>
        <nav className="flex items-center justify-center w-full flex-wrap gap-6 text-sm text-[#666666] mb-6">
          <Link href={links.x} className="hover:underline">
            TWITTER
          </Link>
          <Link href={links.github} className="hover:underline">
            GITHUB
          </Link>
          <Link href={links.linkedIn} className="hover:underline">
            LINKEDIN
          </Link>
          <Link href={links.facebook} className="hover:underline">
            FACEBOOK
          </Link>
          <Link href={links.instagram} className="hover:underline">
            INSTAGRAM
          </Link>
        </nav>
        <span className="block text-center  text-sm text-muted-foreground/70">
          ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
