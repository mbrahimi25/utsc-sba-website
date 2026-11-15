import Navbar from "@/components/Navbar";
import ArticleHero from "@/components/ArticleHero"
import ArticleP from "@/components/ArticleP"
import Footer from "@/components/Footer";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AFC Toronto Make History With First-Ever NSL Championship | UTSC SBA',
  description: 'Why the future of Canadian women\'s soccer has another reason to look promising.',
};

export default function WcQual2026() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <ArticleHero
      title="AFC Toronto Make History With First-Ever NSL Championship"
      author="Mohamed Brahimi"
      image="/articles/afc-toronto-nsl-2026.webp"
      width={1166}
      height={468}
      caption="The team preparing to lift the Diana B. Matheson Cup - Keito Newman/The Canadian Press"
      alt="AFC Toronto players preparing to lift the Diana B. Matheson Cup"
      date="November 2025"
      ></ArticleHero>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">

        <ArticleP>
          AFC Toronto have officially reached the summit of Canadian women's soccer, defeating the Montreal Roses 1-0 on 
          Saturday to capture their first-ever Northern Super League (NSL) championship. A decisive goal from 17-year-old 
          Olivia Chisholm secured the Diana B. Matheson Cup at TD Place in Ottawa, marking a significant milestone for both 
          the club and Canada's growing professional women's soccer landscape.
        </ArticleP>

        <ArticleP>
          The victory was particularly meaningful for Toronto, who returned to the championship final after suffering a 2-1 
          defeat to Vancouver Rise in the league's inaugural final in 2025. This time, however, the club ensured a different 
          outcome.
        </ArticleP>

        <ArticleP>
          The decisive moment came in the 39th minute when Lauren Rowe created space down the right flank before delivering a 
          pass into the penalty area. Chisholm finished clinically, scoring her first professional goal and ultimately delivering 
          the championship-winning moment. Despite sustained pressure from Montreal in the second half, Toronto goalkeeper Sabrina 
          D'Angelo produced three saves to preserve the clean sheet and secure the trophy.
        </ArticleP>

        <ArticleP>
          Beyond the result itself, the championship represents an important achievement for AFC Toronto's position within 
          Canada's emerging women's professional soccer market. The club becomes the first team in NSL history to win both 
          major league honours, having previously secured the Supporters' Shield in 2025.
        </ArticleP>

        <ArticleP>
          The Northern Super League, which launched in 2025 with six founding clubs (Toronto, Montreal, Ottawa, Vancouver, 
          Halifax, and Calgary), represents a significant step forward for professional women's soccer in Canada. Its 
          establishment created a domestic platform for Canadian talent, providing players with opportunities to compete 
          professionally without necessarily having to pursue careers overseas. As the league closes its second season, 
          competitive milestones such as Toronto's championship victory help establish its identity and build a stronger 
          foundation for future growth.
        </ArticleP>

        <ArticleP>
          The final also demonstrated the competitive quality developing within the league. Montreal entered the match as 
          Supporters' Shield winners after finishing first in the regular season, while Toronto finished third. The Roses 
          had also recorded a 12-match unbeaten streak heading into the championship, making Toronto's victory particularly 
          impressive.
        </ArticleP>

        <ArticleP>
          For the NSL, a championship contested between two Canadian clubs in a major national sporting venue provides another 
          opportunity to increase the visibility of women's professional soccer. Continued media coverage, supporter engagement 
          and competitive rivalries will be important factors in establishing the league's long-term commercial appeal.
        </ArticleP>

        <ArticleP>
          For AFC Toronto, the championship is more than an addition to the trophy cabinet. It represents a successful response 
          to last season's disappointment and provides the club with an opportunity to strengthen its connection with Toronto 
          supporters while building momentum heading into the 2027 campaign.
        </ArticleP>

        <ArticleP>
          With the Diana B. Matheson Cup now in Toronto, the club has established itself as one of the early standard-setters in 
          the Northern Super League. More importantly, its historic victory provides another landmark moment for the development 
          of professional women's soccer in Canada.
        </ArticleP>

        <ArticleP>
          AFC Toronto are champions. And the future of Canadian women's soccer has another reason to look promising.
        </ArticleP>

      </div>

      <Footer />
    </main>
  );
}
