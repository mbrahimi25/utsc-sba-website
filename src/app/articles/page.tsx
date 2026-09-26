import Image from "next/image";
import Navbar from "@/components/Navbar";
import Divider from "@/components/Divider"
import ArticleEventCard from "@/components/ArticleEventCard";
import Footer from "@/components/Footer";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles | UTSC SBA',
  description: 'Articles on the latest news in the sports business world.',
};

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <h1 className="mt-12 flex justify-center text-4xl font-bold">Articles</h1>

      <p className="mt-8 text-center text-xl">
        Explore our archive of past sports stories, packed with highlights, insights, and every moment you may have missed. 
      </p>

      <Divider />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-5xl mx-auto">

        <ArticleEventCard
        title="Kawhi to Toronto"
        image="/articles/kawhi-leonard-scandal-2026.jpg"
        description="The Clippers Salary Cap Scandal"
        date="September 2026"
        link="/articles/kawhi-leonard-scandal-2026"/>

        <ArticleEventCard
        title="Beyond the Trophy"
        image="/articles/fifa-wc-revenue-2026.jpg"
        description="The Business Behind the 2026 FIFA World Cup"
        date="July 2026"
        link="/articles/fifa-wc-revenue-2026"/>

        <ArticleEventCard
        title="From Contenders to Crisis"
        image="/articles/tottenham-crisis-2026.png"
        description="The Story of Tottenham Hotspur"
        date="March 2026"
        link="/articles/tottenham-crisis-2026"/>

        <ArticleEventCard
        title="NCAA vs OUA"
        image="/articles/ncaa-oua-2026.png"
        description="What Ontario (and Canada) Can Learn from the NIL Era"
        date="March 2026"
        link="/articles/ncaa-oua-2026"/>

        <ArticleEventCard
        title="Seahawks Win Second Super Bowl"
        image="/articles/super-bowl-2026.jpg"
        description="What went down in Santa Clara"
        date="February 2026"
        link="/articles/super-bowl-2026"/>

        <ArticleEventCard
        title="The Josh Sargent Drama"
        image="/articles/josh-sargent-drama.jpg"
        description="The story behind TFC's offer"
        date="January 2026"
        link="/articles/josh-sargent-drama"/>

        <ArticleEventCard
        title="Qualifying Fever"
        image="/articles/wc-qualification-2026.jpg"
        description="The Race to the 2026 World Cup"
        date="October 2025"
        link="/articles/wc-qualification-2026"/>

        <ArticleEventCard
        title="Tension to Victory"
        image="/articles/mclaren-constructors-2025.jpg"
        description="McLaren's Constructors' Dominance"
        date="October 2025"
        link="/articles/mclaren-constructors-2025"/>

        <ArticleEventCard
        title="Beyond the Salary Cap"
        image="/articles/miami-tfc-2025.jpg"
        description="How Designated Players shaped TFC vs. Miami"
        date="September 2025"
        link="/articles/miami-tfc-2025"/>

      </div>

      <Footer />
    </main>
  );
}
