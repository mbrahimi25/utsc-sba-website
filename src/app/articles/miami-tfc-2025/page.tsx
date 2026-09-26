import Navbar from "@/components/Navbar";
import ArticleHero from "@/components/ArticleHero"
import Footer from "@/components/Footer";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Miami vs. TFC 2025 | UTSC SBA',
  description: 'Beyond the Salary Cap - How Designated Players shaped TFC vs. Miami',
};

export default function MiamiTfc2025() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <ArticleHero
      title="Beyond the Salary Cap - How Designated Players shaped TFC vs. Miami"
      author="Mohamed Brahimi"
      image="/articles/miami-tfc-2025.jpg"
      width={1166}
      height={468}
      caption="Photo: TFC Republic"
      alt="Toronto FC and Inter Miami Designed Players Djordje Mihailovic and Lionel Messi"
      date="September 2025"
      ></ArticleHero>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          Last weekend was certainly an eventful one for Toronto's sports teams. The Blue Jays won the division title, 
          and the city's women's soccer team - AFC Toronto - clinched the Northern Super League regular season title in 
          the team's and the league's inaugural season. <br/>

          There was also the curious case of Toronto FC and Inter Miami...
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          The visiting Miami team's star-studded roster surely attracted a large portion of the 28,855 attendees at BMO Field, 
          with Sergio Busquets, Jordi Alba, Luis Suarez, and 8-time Ballon d'Or winner Lionel Messi all making the starting lineup. 
          While many expected a thrashing at the expense of the hosts, a solid defense, a beautiful goalkeeping display, a last-second 
          slide from Richie Laryea, and a tap-in from Mihailovic were enough for Toronto's 7th draw in a row - A new MLS record.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          While many would seem pessimistic about the performance, Toronto played very well considering the circumstances. In North America, 
          Soccer has a trove of sports to compete with, so organizers needed a format similar to what American fans already recognized. As a 
          result, MLS is full to the brim with confusing rules and a format that simply keeps most European fans away from the American brand 
          of the sport.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          Central to these rules is the salary cap, which, as of the 2025 season, is $5,950,000 per team, per year. The goal of the cap is to create 
          a structure of financial equality between teams, so that richer clubs do not have a huge advantage, with value given to prioritizing homegrown 
          players and coaching style. Each team also has 2-3 Designated Player slots. These "DPs" are the powerhouses of the league. Toronto started the 
          2025 season with Italian duo Lorenzo Insigne and Federico Bernardeschi as DPs, until they had their contracts bought out on July 1st because of 
          severely underwhelming performances. Clearly, a high salary did not guarantee good performances.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          Since then, Toronto has splashed $8 million for playmaker Djordje Mihailovic from Colorado. His performance rescued 1 point on Saturday, but it 
          lso showed the disparity between Miami and Toronto's rosters. For the hosts, Mihailovic was the only DP, while Miami fielded DPs Messi, Alba, 
          and Busquets, as well as Luis Suarez and Rodrigo De Paul, leaving people wondering at how the club fit the players within the league's strict 
          salary rules.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          While a star-studded roster like Miami's definitely needed thorough planning (and payment) to assemble, it has certainly paid off in both publicity 
          and results. The team, founded less than 10 years ago, has received a surge of popularity since the first of its superstar signings - Messi - touched 
          down in Florida in July 2023. For the last 2 years, Messi's Inter Miami jersey has been the most sold in the entire MLS. The team has caused sold-out 
          stadiums to become the norm wherever they travel across the continent. Their amazing performances led to the team winning the MLS Supporters' Shield 
          and the Leagues Cup in 2024, with the hunt still on for the elusive MLS Cup.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          The business, finances, marketing, and, of course, the performances of big MLS teams will always be a scene to behold. That’s what makes MLS both maddening 
          and magical — any team, on any given day, can rewrite the script. Toronto’s current chapter is still being written - it just might take a few seasons to 
          get to the good part. 
        </p>

      </div>

      <Footer />
    </main>
  );
}
