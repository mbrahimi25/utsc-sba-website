import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | UTSC SBA',
  description: 'Learn more about the Scarborough campus\' Sports Business Association.',
};

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <h2 className="mt-12 flex justify-center text-3xl font-bold">About</h2>

      

      <Footer />
    </main>
  );
}
