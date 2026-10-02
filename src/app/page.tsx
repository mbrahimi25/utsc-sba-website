import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Pattern as HomepageCarousel } from "@/components/examples/homepage_carousel"
import ArticleEventCard from "@/components/ArticleEventCard";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";

import { Analytics } from '@vercel/analytics/next';

export default function Home() {

  const latestArticle = articles[0];
  // Takes first element from articles.ts, and treats it as the most recent article
  // In the future, could switch this to taking the article with the most recent publishedAt date

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
        title={latestArticle.title}
        image={latestArticle.image}
        description={latestArticle.description}
        author={latestArticle.author}
        date={latestArticle.date}
        link={latestArticle.link}/>

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
