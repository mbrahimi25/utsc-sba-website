import Navbar from "@/components/Navbar";
import ArticleHero from "@/components/ArticleHero"
import ArticleP from "@/components/ArticleP"
import Footer from "@/components/Footer";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'McLaren Constructors\' Cup 2025 | UTSC SBA',
  description: 'Tension to Victory - McLaren\'s Constructors\' Dominance',
};

export default function MclarenConstructors2025() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <ArticleHero
      title="Tension to Victory - McLaren's Constructors' Dominance"
      author="Mohamed Brahimi"
      image="/articles/mclaren-constructors-2025.jpg"
      width={1200}
      height={482}
      caption="Oscar Piastri racing for McLaren in Japan - Wikimedia Commons contributors"
      alt="Oscar Piastri racing for McLaren in Japan - Wikimedia Commons contributors"
      date="October 2025"
      ></ArticleHero>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">

        <ArticleP>
          At the Singapore Grand Prix on October 5th, 2025, McLaren officially clinched their 
          second consecutive Formula 1 Constructors' Championship - with six races to go.
        </ArticleP>

        <ArticleP>
          The championship was won not through a race win, but through a season’s worth of determination 
          and hard work. Lando Norris and Oscar Piastri brought home third and fourth place, respectively, 
          securing the points needed to mathematically seal the title for McLaren. It was Mercedes driver 
          George Russel who won the race, but the bigger celebration was happening in papaya orange.
        </ArticleP>

        <ArticleP>
          While McLaren clinching the championship in Marina Bay was the main event of the race, it was not 
          the only one to make headlines. An incident between Norris and Piastri before the race’s conclusion 
          drew criticism from fans, as well as from the drivers themselves. Norris had made an audacious attempt 
          to pass his teammate in the opening lap, making contact with Red Bull’s Max Verstrappen in the process. 
          While the overtake was in itself fair, Piastri voiced his frustration over the team radio, stating that 
          the team’s decision to not do anything about the situation was “not fair”. Fans and reporters are 
          already questioning McLaren’s handling of the incident, as well as previous events occurring between the 
          two drivers, as Piastri has already been disadvantaged in two controversial incidents just this past year.
        </ArticleP>

        <ArticleP>
          Lando Norris has not stayed quiet regarding the incident.
        </ArticleP>

        <ArticleP>
          “Anyone on the grid would have done exactly the same thing I did,” was Norris’ justification. He does admit 
          that he “misjudged a little bit how close” he was to Verstrappen, but shrugged off the mistake as simply 
          a part of racing.
        </ArticleP>

        <ArticleP>
          “We will have good reviews, good conversations,” McLaren’s Team principal Andrea Stella said regarding the 
          incident. “We’ll come back stronger and even more united.”
        </ArticleP>

        <ArticleP>
          While the misunderstanding between Norris and Piastri has somewhat diminished McLaren’s Constructors' Championship 
          win, Andrea Stella made sure to clarify that the result was due to the organization’s efficiency and the teamwork 
          among the drivers.
        </ArticleP>

        <ArticleP>
          “This title isn’t just about speed — it’s about teamwork, strategy, and resilience,” she said after the race. 
          “To secure it this early shows the level of performance we’ve achieved across the entire organization.”
        </ArticleP>

        <ArticleP>
          In the end, Singapore was less about a squabble between teammates and more about a team in their prime. Norris and Piastri’s 
          clash may have made headlines, but it cannot overshadow the scale of McLaren’s achievement.
        </ArticleP>

        <ArticleP>
          One heated moment - Back-to-back Constructors' Championship wins - and a clear message that papaya orange rules the grid.
        </ArticleP>

      </div>

      <Footer />
    </main>
  );
}
