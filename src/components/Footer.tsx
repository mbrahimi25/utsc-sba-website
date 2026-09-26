import Link from "next/link";
import Image from "next/image"

import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { PiLinktreeLogoFill } from "react-icons/pi";
import { IoIosArrowUp } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-sba-red border-white/10 py-10 font-sans">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
        
        <div className="flex gap-8 items-center">

          <Image
            src="/sba_logo.png"
            alt="UTSC Sports Business Association Navbar Logo"
            height={60}
            width={60}
            className="md:h-[75px] md:w-[75px]"
          />

          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} UTSC Sports Business Association. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-white/70">

          <Link
          href="https://www.instagram.com/utscsportsbusiness/"
          className="hover:text-white transition duration-200 hover:scale-120"
          title="Instagram"
          target="_blank" >
            <FaInstagram size={25}/>
          </Link>

          <Link
          href="https://www.linkedin.com/company/utsc-sports-business-association"
          className="hover:text-white transition duration-200 hover:scale-120"
          title="LinkedIn"
          target="_blank" >
            <FaLinkedin size={25}/>
          </Link>

          <Link href="https://linktr.ee/utsc.sba"
          className="hover:text-white transition duration-200 hover:scale-120"
          title="Linktree"
          target="_blank" >
            <PiLinktreeLogoFill size={25}/>
          </Link>

        </div>

      </div>
    </footer>
  );
}