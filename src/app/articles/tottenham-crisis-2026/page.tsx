import Navbar from "@/components/Navbar";
import ArticleHero from "@/components/ArticleHero"
import Footer from "@/components/Footer";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'From Contenders to Crisis | UTSC SBA',
  description: 'The Story of Tottenham Hotspur',
};

export default function TottenhamCrisis2026() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <ArticleHero
      title="From Contenders to Crisis: The Story of Tottenham Hotspur"
      author="Mohamed Brahimi"
      image="/articles/tottenham-crisis-2026.png"
      width={1166}
      height={468}
      caption="Nottingham Forest players celebrating a goal against Tottenham Hotspur - Alex Pantling/Getty Images"
      alt="Nottingham Forest players celebrating a goal against Tottenham Hotspur"
      date="March 2026"/>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          On March 22nd, 2026, Tottenham Hotspur F.C. welcomed Nottingham Forest F.C. in a 
          match meant to boost the Spurs' confidence and be the start of a turnaround for 
          an otherwise dreadful season. The final score was Spurs 0 - 3 Forest.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          Following a 7-5 aggregate loss against Atlético Madrid in the UEFA Champions League 
          over 2 games played earlier in the month, the first of which included goalkeeper 
          Antonin Kinský being removed from the game less than 20 minutes into his UCL debut, 
          the English Premier League side now have just 7 league games left before the end of 
          their season. To put it lightly, they find themselves in quite an unfortunate position.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          Tottenham Hotspur has not won a league game since December 28th, 2025, an away win 
          against Crystal Palace which saw youngster Archie Gray score the only goal of the 
          game. In the 3 months since that game, the club has won 5 out of 39 possible 
          points - an embarrassing statistic for a side which prides itself on being considered 
          part of England's "Big 6".  This season accounts for the club's joint-lowest points 
          after 31 games, alongside the club's 1914/15 season.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          Spurs head coach Igor Tudor is facing increased scrutiny from pundits and fans for 
          his controversial tactics and decisions. Alongside Kinský's removal early in the game 
          against Atlético, star centre back Mickey Van de Ven was withdrawn after 45 minutes against 
          Nottingham Forest, and left-back Djed Spence was replaced by Lucas Bergvall, who was forced 
          to play in an unfamiliar midfield position. While the team was already behind at the half 
          thanks to a strike from in-form Brazilian striker Igor Jesus, the substitutions 
          undoubtedly played a role in the team's negative performance.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          To add fuel to the fire, Spurs head coach Igor Tudor found out his father had passed 
          away shortly after the 3-0 loss.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          As of now, the North London side sit 17th in the Premier League table, being leapfrogged 
          by Forest as a result of the game. Tottenham are a frightening 1 point ahead of the 
          relegation zone. Failing to take advantage of the remaining games could see them fall out 
          of the English top-flight for the first time since the 1978.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          If Tottenham fail to address their defensive vulnerabilities and rediscover attacking fluency, 
          the prospect of relegation — once unthinkable for a club of their stature — could become 
          a very real possibility. 
        </p>

      </div>

      <Footer />
    </main>
  );
}
