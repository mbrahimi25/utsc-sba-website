import Link from "next/link";
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-sba-red">

      <div className="flex gap-6 items-center">
        <Image
        src="/sba_logo.png"
        alt="UTSC Sports Business Association Navbar Logo"
        height={75}
        width={75}
        />

        <h2 className="text-xl font-bold">
          UTSC Sports Business Association
        </h2>
      </div>

      <div className="flex gap-6 text-white/70 font-sans">
        <a href="/" className="hover:text-white">
          Home
        </a>

        <a href="/about" className="hover:text-white">
          About Us
        </a>

        <a href="/articles" className="hover:text-white">
          Articles
        </a>

        <a href="/events" className="hover:text-white">
          Events
        </a>
      </div>
      
    </nav>
  );
}