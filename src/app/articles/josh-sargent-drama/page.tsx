import Navbar from "@/components/Navbar";
import ArticleHero from "@/components/ArticleHero"
import ArticleP from "@/components/ArticleP"
import Footer from "@/components/Footer";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Josh Sargent Drama | UTSC SBA',
  description: 'The Josh Sargent Transfer Drama',
};

export default function JoshSargentDrama() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <ArticleHero
      title="The Josh Sargent Transfer Drama"
      author="Mohamed Brahimi"
      image="/articles/josh-sargent-drama.jpg"
      width={1166}
      height={468}
      caption="Josh Sargent in a Norwich City FC kit - Getty Images"
      alt="Josh Sargent in a Norwich City FC kit"
      date="January 2026"/>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">

        <ArticleP>
          Over the past few weeks, there have been many sporting events worthy of analysis from 
          a business perspective, with many receiving global attention, such as the Africa Cup 
          of Nations Final. A situation closer to home which has been receiving less attention, 
          however, is the transfer drama involving Josh Sargent.
        </ArticleP>

        <ArticleP>
          On January 11th, 2026, Italian sports journalist Fabrizio Romano revealed that Toronto FC 
          have submitted an $18 million offer for American striker Josh Sargent, who currently plays 
          for struggling Norwich City F.C. The post made waves worldwide, especially among North American 
          soccer fans, as Sargent, who has been having a slight off year in terms of performance, has 
          been statistically one of the best players in the English Championship over the past few years.
        </ArticleP>

        <ArticleP>
          The day Romano announced Toronto’s offer was the day of an English FA Cup draw involving Norwich and 
          Walsall, which Sargent refused to participate in as a result of wanting his transfer to Toronto to be 
          finalized. Phillipe Clement, the Norwich head coach, revealed after the game that Sargent has since 
          been training and playing with the Norwich Under-21 team as a result of his unprofessional conduct. 
          Norwich are not willing to sell Sargent in the middle of the season, and they believe Toronto’s offer 
          leaves a lot to be desired.
        </ArticleP>

        <ArticleP>
          Sources such as renowned MLS journalist Tom Bogert have reported that a meeting involving Sargent, Clement, 
          and the Norwich sporting director ended bitterly, with the American’s time in England seemingly over. The 
          club are still adamant regarding their valuation of the player, and recent sources say that Toronto have 
          submitted an improved offer for their main offseason target.
        </ArticleP>

        <ArticleP>
          Toronto FC have lacked a reliable striker for over 2 seasons, and a DP striker (whose salary can be counted off the 
          salary cap) is the top priority before the 2026 MLS season starts on February 21st. Signings from the English 
          Championship are not unheard of in the MLS, with Atlanta FC breaking the then MLS transfer record to sign 
          Middlesbrough striker Emmanuel Latte Lath. Toronto themselves are familiar with Championship talent in the 
          form of veteran Kevin Long, who played on the Reds’ backline for 2 seasons.
        </ArticleP>

        <ArticleP>
          The drama underlines the impact of transfers in the modern game, and how agents and transfer offers can disrupt a 
          team and potentially damage a player’s career. Whether the deal materializes or not, the Sargent saga has already 
          underscored Toronto FC’s ambition and Norwich City’s resolve, leaving fans on both sides waiting to see who will blink first.
        </ArticleP>

      </div>

      <Footer />
    </main>
  );
}
