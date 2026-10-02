"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Divider from "@/components/Divider";
import ArticleEventCard from "@/components/ArticleEventCard";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";

export default function ArticlesPage() {
  const [sortOrder, setSortOrder] = useState("newest");

  // Sort logic based on selected dropdown value
  const sortedArticles = [...articles].sort((a, b) => {
    if (sortOrder === "newest") {
      // Sort descending using publishedAt
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    }
    if (sortOrder === "oldest") {
      // Sort ascending using publishedAt
      return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
    }
    if (sortOrder === "az") {
      // Alphabetical A-Z on the title
      return a.title.localeCompare(b.title);
    }
    if (sortOrder === "za") {
      // Alphabetical Z-A on the title
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  return (
    <main className="min-h-screen">
      <Navbar />

      <h1 className="mt-12 flex justify-center text-4xl font-bold">Articles</h1>

      <p className="mt-8 text-center text-xl">
        Explore our archive of past sports stories, packed with highlights, insights, and every moment you may have missed. 
      </p>

      <Divider />

      {/* Sorting Dropdown Controls */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="font-medium text-sm">Sort by:</label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border rounded-md px-3 py-1.5 text-sm bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="az">Alphabetical (A-Z)</option>
            <option value="za">Alphabetical (Z-A)</option>
          </select>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-5xl mx-auto">
        {sortedArticles.map((article, index) => (
          <ArticleEventCard
            key={index}
            title={article.title}
            image={article.image}
            description={article.description}
            author={article.author}
            date={article.date}
            link={article.link}
          />
        ))}
      </div>

      <Footer />
    </main>
  );
}