import Navbar from "@/components/Navbar";
import ArticleHero from "@/components/ArticleHero"
import ArticleP from "@/components/ArticleP"
import Footer from "@/components/Footer";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Super Bowl LX | UTSC SBA',
  description: 'Seahawks Win Second Super Bowl',
};

export default function SuperBowl2026() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <ArticleHero
      title="Seahawks Win Second Super Bowl"
      author="Mohamed Brahimi"
      image="/articles/super-bowl-2026.jpg"
      width={1166}
      height={468}
      caption="Fireworks over Levi's Stadium after the game - Frank Franklin II/AP"
      alt="Fireworks over Levi's Stadium after Super Bowl LX"
      date="February 2026"/>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">

        <ArticleP>
          The Seattle Seahawks secured the Lombardi Trophy with a commanding 29–13 victory over 
          the New England Patriots in Super Bowl LX at Levi’s Stadium in Santa Clara. The win 
          delivered the franchise’s second championship and a measure of revenge for their loss 
          to New England a decade earlier, as Seattle controlled the game from start to finish 
          with a beautiful defensive effort.
        </ArticleP>

        <ArticleP>
          Seattle’s defense set the tone early, harassing Patriots quarterback Drake Maye all night 
          with relentless pressure that resulted in multiple sacks, turnovers, and a defensive touchdown. 
          New England was held scoreless through three quarters and only managed late points when the 
          outcome was already decided, highlighting the Seahawks’ dominance on that side of the ball.
        </ArticleP>

        <ArticleP>
          Offensively, Seattle relied on steady execution rather than flash. Running back Kenneth Walker III 
          powered the attack with 135 rushing yards to earn Super Bowl MVP honors, while quarterback Sam Darnold 
          added a touchdown pass in a composed performance. Kicker Jason Myers played a pivotal role as well, 
          converting five field goals — a Super Bowl record — as the Seahawks built a comfortable lead.
        </ArticleP>

        <ArticleP>
          By the final whistle, the result reflected a complete team effort. Seattle’s top-ranked defense, 
          balanced offense, and disciplined game plan overwhelmed the Patriots and capped an unlikely but 
          memorable season with a championship celebration.
        </ArticleP>

        <ArticleP>
          Beyond the on-field result, Seattle’s championship run carries significant business implications 
          for the franchise and the league. A Super Bowl victory typically drives spikes in merchandise sales, 
          ticket demand, and sponsorship value, and the Seahawks are positioned to capitalize on renewed global 
          visibility. From jersey sales to branded partnerships and media exposure, the title strengthens the 
          organization’s marketability and reinforces its brand as a premier NFL franchise, particularly in the 
          competitive Pacific Northwest sports market.
        </ArticleP>

        <ArticleP>
          Beyond the on-field result, Seattle’s championship run carries significant business implications 
          for the franchise and the league. A Super Bowl victory typically drives spikes in merchandise sales, 
          ticket demand, and sponsorship value, and the Seahawks are positioned to capitalize on renewed global 
          visibility. From jersey sales to branded partnerships and media exposure, the title strengthens the 
          organization’s marketability and reinforces its brand as a premier NFL franchise, particularly in the 
          competitive Pacific Northwest sports market.
        </ArticleP>

        <ArticleP>
          The matchup itself also underscored the NFL’s broader commercial power. Super Bowl LX generated massive 
          television audiences and advertising revenue, with brands paying premium rates for commercial slots and 
          corporate hospitality experiences surrounding the event. For both teams — even in defeat — participation 
          meant increased franchise valuation exposure and fan engagement opportunities. In an era where sports success 
          translates directly into financial leverage, Seattle’s victory represents not only a championship moment 
          but a catalyst for sustained economic momentum both locally and across the league’s business ecosystem.
        </ArticleP>

      </div>

      <Footer />
    </main>
  );
}
