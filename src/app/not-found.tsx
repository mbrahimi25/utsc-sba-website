import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { MdHome } from "react-icons/md";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 Error | UTSC SBA',
  description: 'Page not found.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <h1 className="mt-12 flex justify-center text-4xl font-bold">404 - Page not found</h1>

      <p className="mt-8 text-center text-xl">
        The URL may not be entered correctly, 
        or the page you requested was deleted.
      </p>

      <Link
      href='/'
      className="mt-12 flex items-center gap-2 justify-center text-2xl font-bold text-white hover:text-white/70 transition-colors">
        <MdHome />
        Home Page
      </Link>

      <Footer />
    </main>
  );
}
