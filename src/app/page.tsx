import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Pattern as HomepageCarousel } from "@/components/examples/homepage_carousel"
import ArticleEventCard from "@/components/ArticleEventCard";
import Footer from "@/components/Footer";

import { Analytics } from '@vercel/analytics/next';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Analytics />

      <Navbar />

      <HomepageCarousel />

      <h1 className="mt-12 flex justify-center text-4xl font-bold">Latest</h1>

      <p className="mt-4 text-center text-xl">
        Events and articles on sports business stories worth knowing.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 max-w-4xl mx-auto justify-items-center">
      
        <ArticleEventCard
        title="Manchester City: 114 Charges"
        image="/articles/man-city-charges-2026.jpg"
        description="One Verdict That Could Change English Football"
        author="Mohamed Brahimi"
        date="September 2026"
        link="/articles/man-city-charges-2026"/>

        <ArticleEventCard
        title="Sample Event"
        image="/sba_logo.png"
        description="Sample Event"
        link="/events"/>
              
      </div>

      <Footer />
    </main>
  );
}
