import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Pattern as HomepageCarousel } from "@/components/examples/homepage_carousel"
import Footer from "@/components/Footer";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 Error | UTSC SBA',
  description: 'Page not found.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <h2 className="mt-12 flex justify-center text-3xl font-bold">404 - Page not found</h2>

      <p className="mt-8 text-center text-xl">
        Please make sure the URL of the page is inputted correctly, <br/>
        or visit another page from our website!
      </p>

      <Footer />
    </main>
  );
}
