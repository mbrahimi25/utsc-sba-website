import Navbar from "@/components/Navbar";
import ArticleHero from "@/components/ArticleHero"
import Footer from "@/components/Footer";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NCAA vs. OUA | UTSC SBA',
  description: 'What Ontario (and Canada) Can Learn from the NIL Era',
};

export default function NcaaOua2026() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <ArticleHero
      title="NCAA vs OUA: What Ontario (and Canada) Can Learn from the NIL Era"
      author="Mohamed Brahimi"
      image="/articles/ncaa-oua-2026.png"
      width={1166}
      height={468}
      caption="A 2023 OUA football game taking place in Kingston, ON, between the Western Mustangs and the Queen's Gaels - Western Mustangs"
      alt="A 2023 OUA football game taking place in Kingston, ON, between the Western Mustangs and the Queen's Gaels"
      date="March 2026"/>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          University sports play a major role in North American athletics, but the scale 
          looks very different depending on which side of the border you’re on.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          In the United States, the National Collegiate Athletic Association (NCAA) oversees 
          college athletics across roughly 1,100 universities. Founded in 1906, it has grown 
          into a massive commercial sports ecosystem fueled by television deals, sponsorships, 
          and packed stadiums. Events like the NCAA Division I Men's Basketball Tournament 
          generate billions in media revenue, and many athletes move directly into professional 
          leagues for their sports, like the NBA or the NFL respectively.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          In Canada, university sports operate on a much smaller scale. The Ontario University 
          Athletics (OUA) coordinates competition between 20 universities in Ontario and is one 
          of four regional conferences under U Sports, the national governing body for Canadian 
          university athletics. While the OUA plays a similar role to a U.S. athletic conference, 
          its programs generally receive far less media exposure and sponsorship revenue.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          One major shift in college sports came in 2021, when a combination of changes involving 
          NCAA rules and state laws allowed athletes to profit from their NIL. NIL refers to a person’s 
          legal right to control and monetize how their identity, mainly their Name, Image, and 
          Likeness, is used commercially. This change allowed athletes to sign endorsement deals, 
          promote brands online, and build personal businesses while still competing in university 
          sports.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          Most NIL deals focus on football and basketball players, where large fan bases and television 
          audiences create real marketing value. In Canada, however, NIL opportunities remain limited. 
          With smaller audiences and fewer broadcasting deals, Canadian university athletes rarely have 
          access to the same sponsorship opportunities.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          That doesn’t mean the gap can’t shrink. If the OUA wants to grow its commercial presence, 
          increasing media exposure and investing in stronger branding around university teams could 
          be a good start. More streaming access, better storytelling around athletes, and deeper 
          partnerships with local businesses could help bring Canadian university sports closer to 
          the visibility seen in the NCAA.
        </p>

        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-sans">
          The NIL era has changed the conversation around college athletics. For Canadian university 
          sports, it may also present an opportunity to rethink how student-athletes, universities, 
          and sponsors can all benefit from a more visible and connected system.
        </p>

      </div>

      <Footer />
    </main>
  );
}
