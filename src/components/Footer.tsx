import Link from "next/link";

import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { PiLinktreeLogoFill } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10 font-sans">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
        
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} UTSC Sports Business Association. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-white/60">

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