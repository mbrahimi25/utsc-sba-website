import Navbar from "@/components/Navbar";
import ArticleHero from "@/components/ArticleHero"
import Footer from "@/components/Footer";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'World Cup 26 Qualifying | UTSC SBA',
  description: 'Qualifying Fever - The Race to the 2026 FIFA World Cup',
};

export default function WcQual2026() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <ArticleHero
      title="Qualifying Fever - The Race to the 2026 FIFA World Cup"
      author="Mohamed Brahimi"
      image="/articles/wc-qualification-2026.jpg"
      width={1166}
      height={468}
      caption="Olivia Chow poses in Toronto amidst a celebration of one year left until the 2026 FIFA World Cup - Photo shared by FIFA"
      alt="Olivia Chow poses in Toronto"
      date="October 2025"
      ></ArticleHero>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          As the month of June approaches, national teams from around the globe are still competing 
          for a spot in the 2026 FIFA World Cup, which is set to be played in Canada, Mexico, and 
          the United States.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          The main qualification phase has concluded in Africa, and fans are now sure whether or not 
          their countries are playing across the Atlantic this June. Many African giants have guaranteed 
          their spots, with Egypt, Senegal, Morocco, Côte d'Ivoire, Algeria, Tunisia, and Ghana topping 
          their groups as expected. Many nations have topped their groups against the odds, as South Africa 
          finished first in their group ahead of Nigeria and Benin, and Cabo Verde making their first ever 
          world cup as they, against all odds, topped a group with Cameroon and Libya, both of which were 
          expected to compete for first and second place. For the top 4 teams who finished the main phase 
          in second place among their group, there is still a chance to represent Africa within the 
          inter-continental playoffs. Gabon, DR Congo, Burkina Faso, and Cameroon will play a set of 
          games to determine the lone African playoff representative, who will then compete in Mexico 
          against one Asian, one Oceanian, and two North/Central American teams for a last chance for 
          2 spots at the world cup.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          Qatar, led by former West Ham manager Julen Lopetegui,  have recently become the 24th country to 
          claim a spot at the upcoming world cup. They joined fellow Asian nations Australia, Iran, Japan, 
          Jordan, Qatar, Saudi Arabia, South Korea, and Uzbekistan, who are set to compete at the first world 
          cup in their history following the recent appointment of a legend of the sport: Fabio Cannavaro.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          North America, Europe, and Oceania have altogether produced 5 nations who will play at the world cup, 
          with many more spots yet to be filled. Only Canada, the United States, and Mexico have qualified for 
          the world cup so far from North America, as they are set to host the tournament. Oceania’s single 
          direct spot has been filled by New Zealand, and only one out of Europe’s 16 world cup slots has been 
          filled by England. The next few months will confirm the fates of the remaining competing teams.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          The qualifiers so far have been a goalfest, especially for a certain group of strikers. Norway’s 
          Erling Haaland and Qatar’s Almoez Ali lead in terms of goals, with both having scored 12 goals each. 
          Haaland’s feat is incredible considering he scored his 12 goals in six games, compared to Ali’s thirteen. 
          His latest hattrick against Israel, a struggling team who were recently at risk of being banned from 
          competing altogether, shows Haaland’s resilience after previously missing 2 penalties earlier in the game.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          Africa’s top goalscorers are showing their worth in the qualification stage, as Liverpool and Egypt winger 
          Mohamed Salah, Mali and Brest player Kamory Doumbia, LAFC and Gabon forward Denis Bouanga, and VfL Wolfsburg 
          and Algeria winger Mohamed Amoura bagged 33 goals altogether.
        </p>

         <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          Overall, with the qualification stage almost complete, fans are eager to watch their favorite clubs and nations 
          compete in the first ever 48 team FIFA World Cup, and fans from host cities — Toronto included — are excited to 
          finally watch the tournament come to their backyard.
        </p>

      </div>

      <Footer />
    </main>
  );
}
