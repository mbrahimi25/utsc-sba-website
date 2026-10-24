import Navbar from "@/components/Navbar";
import ArticleHero from "@/components/ArticleHero"
import ArticleP from "@/components/ArticleP"
import Footer from "@/components/Footer";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TFC vs. CF Montreal | UTSC SBA',
  description: 'Toronto\'s Dramatic Late Comeback',
};

export default function WcQual2026() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <ArticleHero
      title="Toronto FC Complete Dramatic Late Comeback Against CF Montréal"
      author="Mohamed Brahimi"
      image="/articles/tfc-mtl-comeback-2026.webp"
      width={1166}
      height={468}
      caption="Mihailovic and Laryea celebrate TFC's 90+5' winner - Frank Gunn/The Canadian Press"
      alt="Mihailovic and Laryea celebrate TFC's 90+5 winner"
      date="October 2025"
      ></ArticleHero>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">

        <ArticleP>
          A few days ago, Toronto FC midfielder Niklas Dorsch said about the imminent showdown vs Montreal that “We have to win this game. There's no excuses anymore.”
        </ArticleP>

        <ArticleP>
          Niklas Dorsch proceeded to deliver.
        </ArticleP>

        <ArticleP>
          Toronto FC delivered a dramatic comeback in what was described as a must-win game on Saturday, defeating rivals CF Montréal
          2–1 at BMO Field in the latest edition of the 401 Derby. Trailing for most of the second half, the Reds scored twice in
          stoppage time to secure three crucial points and end a three-game losing streak.
        </ArticleP>

        <ArticleP>
          After a scoreless first half, Montréal took the lead in the 52nd minute when Daniel Ríos capitalized on a rebound following a
          save by Toronto goalkeeper William Yarbrough, who came on in the first half after starting keeper Luka Gavran suffered what
          appeared to be a knock. Toronto struggled to find an equalizer despite creating several opportunities, forcing head coach Robin Fraser,
          who is currently in the hot seat, to turn to his bench for an attacking spark.
        </ArticleP>

        <ArticleP>
          Toronto's persistence finally paid off in the 93rd minute. Substitute Lewis Morgan connected with an accurate cross from Niklas Dorsch to
          level the score at 1–1, scoring his first goal in red. It was Dorsch’s first assist since being signed by TFC and his 3rd goal contribution for the club.
        </ArticleP>

        <ArticleP>
          Just two minutes later, recently recovered Djordje Mihailovic completed the comeback, finishing a low cross from Theo Corbeanu after an attacking move 
          initiated by Richie Laryea. The late winner sent the home crowd into celebration and transformed an almost certain defeat into a memorable derby victory. 
        </ArticleP>

        <ArticleP>
          Beyond the three points, the result highlighted the importance of squad depth and effective substitutions. Both Morgan and Mihailovic made decisive 
          contributions off the bench, demonstrating how individual performances can change the outcome of a match.
        </ArticleP>

        <ArticleP>
          The victory also extended Toronto FC's unbeaten run against Montréal in MLS regular-season play to six consecutive meetings. As the regular season nears 
          its end, the Reds will look to build on this momentum and deliver more consistent performances.
        </ArticleP>

        <ArticleP>
          The result buried L’Impact further down the Eastern Conference table. The team are currently at the bottom of the East, 3 points behind Atlanta United FC. 
          In the combined MLS regular season table, they sit at second-to-last place, ahead of Sporting Kansas City.
        </ArticleP>

        <ArticleP>
          TFC’s win helps them tremendously in their push for their first playoff appearance since 2020. As of Sunday, OCtober 11th, they find themselves 11th in 
          the Eastern Conference, only 2 spots and 4 points away from a play-in spot. They still have 6 regular season games to go, with matches scheduled against 
          Orlando (H), NYRB (A), Columbus (A), DC United (H), Atlanta (A), and the Philadelphia Union (A).
        </ArticleP>

        <ArticleP>
          Whether or not the team succeeds in their most convincing playoff push in over half a decade, the win today has certainly improved the mood in the locker 
          room and among fans of the team. The Reds will look to build on this momentum as they try to achieve a playoff spot in the MLS last season before switching 
          to the European calendar.
        </ArticleP>

      </div>

      <Footer />
    </main>
  );
}
