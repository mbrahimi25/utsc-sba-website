import Image from "next/image";
import Navbar from "@/components/Navbar";
import ArticleEventCard from "@/components/ArticleEventCard";
import Footer from "@/components/Footer";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events | UTSC SBA',
  description: 'Events organized by the UTSC Sports Business Association',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <h1 className="mt-12 flex justify-center text-4xl font-bold">Events</h1>

      <p className="mt-8 text-center text-xl">
        On this page, you can find events organized by
        the UTSC Sports Business Association!
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-5xl mx-auto">
      
              <ArticleEventCard
              title="Title 1"
              image="/sba_logo.png"
              description="Event 1"
              link="/events"
              ></ArticleEventCard>
      
              <ArticleEventCard
              title="Title 2"
              image="/sba_logo.png"
              description="Event 2"
              link="/events"
              ></ArticleEventCard>
      
              <ArticleEventCard
              title="Title 3"
              image="/sba_logo.png"
              description="Event 3"
              link="/events"
              ></ArticleEventCard>
      
            </div>

      <Footer />
    </main>
  );
}
