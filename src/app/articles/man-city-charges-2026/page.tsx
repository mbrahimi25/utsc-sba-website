import Navbar from "@/components/Navbar";
import ArticleHero from "@/components/ArticleHero"
import ArticleP from "@/components/ArticleP"
import Footer from "@/components/Footer";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manchester City: 114 Charges | UTSC SBA',
  description: 'One Verdict That Could Change English Football',
};

export default function ManCityCharges2026() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <ArticleHero
      title="Manchester City: 114 Charges, One Verdict That Could Change English Football"
      author="Mohamed Brahimi"
      image="/articles/man-city-charges-2026.jpg"
      width={547}
      height={365}
      caption="Manchester City's Etihad Stadium - AP"
      alt="Corner flag at the Etihad Stadium with Man City's logo"
      date="September 2026"
      ></ArticleHero>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">

        <ArticleP>
          After years of investigations, hearings and speculation, one of the biggest financial 
          stories in football has finally reached a major turning point. Manchester City has reportedly 
          been found guilty of 114 out of 115 financial-rule breaches brought against the club by 
          the English Premier League.
        </ArticleP>

        <ArticleP>
          The charges were originally announced in February 2023 and cover a period from 2009 to 2018. 
          They include allegations surrounding the accuracy of the club’s financial information, revenue 
          reporting, player and manager payments, and compliance with financial regulations. Manchester 
          City has consistently denied the allegations and is expected to appeal the findings.
        </ArticleP>

        <ArticleP>
          So why does this matter beyond Manchester City?
        </ArticleP>

        <ArticleP>
          Since its takeover by the UAE-based Abu Dhabi United Group (ADUG) in 2008, 
          Manchester City has gone from a club competing for occasional European qualification 
          to one of the biggest forces in world football. The club has won multiple Premier League titles, 
          the Champions League and numerous other major trophies. At the same time, its commercial revenues, 
          sponsorships and global profile have grown dramatically.
        </ArticleP>

        <ArticleP>
          That transformation is exactly why this case has attracted so much attention. At its core, 
          the investigation raises a major question about how financial power should be regulated in 
          professional sport. Football clubs are businesses, and investment can help them grow, attract 
          talent and compete at the highest level. But leagues also need rules that prevent financial 
          advantages from undermining competitive balance.
        </ArticleP>

        <ArticleP>
          The verdict could therefore have consequences far beyond Manchester. If significant penalties 
          are eventually imposed, other Premier League clubs will be watching closely. The outcome could 
          influence how clubs structure sponsorship agreements, manage player wages and plan major 
          investments in the future.
        </ArticleP>

        <ArticleP>
          However, there is still a long way to go. Manchester City has not yet received a punishment, 
          and the club is expected to appeal the findings. Until that process is completed, it is impossible 
          to know whether the club will face financial penalties, sporting sanctions or another form of punishment.
        </ArticleP>

        <ArticleP>
          For the Premier League, the case is also a test of its financial regulations. Rules are only 
          effective if they can be enforced, even when they involve one of the league's most successful 
          and commercially powerful clubs.
        </ArticleP>

        <ArticleP>
          The findings also place a stain on the success of Manchester City over the last two decades. 
          Under ADUG, the club has brought the Etihad Stadium a staggering amount of silverware. 
          Since 2009, the club has won over 20 trophies, with honors including a domestic and continental treble, 
          a 100-point title-winning season, and a record-breaking 4 Premier League titles in a row
        </ArticleP>

        <ArticleP>
          Manchester City's case is therefore about more than 114 charges. It is about money, competition, 
          regulation and the future business model of football. Whatever happens next, the final outcome 
          could shape how the Premier League operates, and how local and international fans view the league, 
          for years to come.
        </ArticleP>


      </div>

      <Footer />
    </main>
  );
}
