import Image from "next/image";
import Navbar from "@/components/Navbar";
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

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-5xl mx-auto">

        <ArticleEventCard
        title="Qualifying Fever"
        image="/articles/wc-qualification-2026.jpg"
        description="The Race to the 2026 World Cup"
        date="October 2025"
        link="/articles/wc-qualification-2026"
        ></ArticleEventCard>

        <ArticleEventCard
        title="Tension to Victory"
        image="/articles/mclaren-constructors-2025.jpg"
        description="McLaren's Constructors' Dominance"
        date="October 2025"
        link="/articles/mclaren-constructors-2025"
        ></ArticleEventCard>

        <ArticleEventCard
        title="Beyond the Salary Cap"
        image="/articles/miami-tfc-2025.jpg"
        description="How Designated Players shaped TFC vs. Miami"
        date="September 2025"
        link="/articles/miami-tfc-2025"
        ></ArticleEventCard>

      </div>

      <Footer />
    </main>
  );
}
