import Image from "next/image";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import ExecutiveCard from "@/components/ExecutiveCard";
import Footer from "@/components/Footer";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | UTSC SBA',
  description: 'Learn more about the Scarborough campus\' Sports Business Association.',
};

export default function About() {
  return (
    <main className="min-h-screen">

      <Navbar />

      <AboutHero />

      <h2 className="mt-12 flex justify-center text-3xl font-bold">Meet the Executives</h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

        <ExecutiveCard
          name='Sem Nyong'
          position='Co-President'
          image='/execs/default.webp'
          bio='4th year Management & Marketing student. Favourite sport: Basketball'
          linkedin='http://www.linkedin.com/in/sem-nyong-a1334b312'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Michael Aneke'
          position='Co-President'
          image='/execs/default.webp'
          bio='4th year Management student specializing in Finance. Favourite sport: Soccer. Favourite team: Chelsea FC'
          linkedin='https://www.linkedin.com/in/michaelaneke/'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Catalina Bedoya Fuller'
          position='VP of Operations'
          image='/execs/individual/catalina_head.webp'
          bio='4th year Media Studies student. Favourite sport: Soccer. Favourite team: FC Barcelona'
          linkedin='https://www.linkedin.com/in/catalina-bedoya-a599b8329/'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Nathan Oribhabor'
          position='Co-VP of Marketing'
          image='/execs/individual/nathan_head2.webp'
          bio='3rd year Arts Management and Media Studies student. Favourite sport: Hockey. Favourite team: Toronto Maple Leafs'
          linkedin='https://www.linkedin.com/in/nathan-oribhabor-81755a323/'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Samten Loden'
          position='Co-VP of Marketing'
          image='/execs/individual/samten_head1.webp'
          bio='4th year BBA Management student specializing in Human Resources. Favourite sport: Soccer'
          linkedin='http://www.linkedin.com/in/samtenloden'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Ahso Yun'
          position='VP of Outreach'
          image='/execs/individual/ahso_head.webp'
          bio='2nd year BBA Co-op student specializing in Entrepreneurship. Favourite sport: Soccer. Favourite team: Manchester United'
          linkedin='https://www.linkedin.com/in/ahso-yun-2oo6o529'
        ></ExecutiveCard>
        
        <ExecutiveCard
          name='Elena Parennas'
          position='Events VP Director'
          image='/execs/individual/elena_head.webp'
          bio='3rd year Business Management student. Favourite sport: Soccer. Favourite team: FC Barcelona'
          linkedin='https://www.linkedin.com/in/elena-parrenas'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Kyrie Ou'
          position='Events Director'
          image='/execs/individual/kyrie_head.webp'
          bio='2nd year Statistics student. Favourite sport: Basketball'
          linkedin='https://www.linkedin.com/in/kyrieouoft/'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Arden Rego'
          position='N/A'
          image='/execs/individual/arden_head.webp'
          bio='4th year Mental Health and Neuroscience student. Favourite sports: Soccer and Hockey. Favourite teams: Liverpool FC and the Ottawa Senators'
          linkedin='https://www.linkedin.com/in/arden-rego/'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Audrey Sun'
          position='Marketing & Photography'
          image='/execs/default.webp'
          bio='2nd year MIB BBA student. Favourite sport: Skating'
          linkedin='https://www.linkedin.com/in/audrey-sun-6a3655320/'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Alexia Lei'
          position='Social Media Coordinator'
          image='/execs/individual/alexia_head1.webp'
          bio='4th year Social Sciences student. Favourite sport: F1. Favourite teams: Ferrari and McLaren'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Jovita Au'
          position='Graphic Designer'
          image='/execs/individual/jovita_head.webp'
          bio='5th year Management and Marketing student. Favourite sport: Hockey'
          linkedin='linkedin.com/in/jovita-au'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Mohamed Brahimi'
          position='Education/Web Coordinator'
          image='/execs/individual/mohamed_head.webp'
          bio='2nd year Computer Science and Statistics student. Favourite sport: Soccer. Favourite team: Toronto FC'
          linkedin='https://www.linkedin.com/in/mohbrahimi/'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Noah Payne'
          position='Research Coordinator'
          image='/execs/individual/noah_head.webp'
          bio='2nd year Business Administration student.'
          linkedin='https://www.linkedin.com/in/noahpayne07/'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Aiden Loh'
          position='Education Coordinator'
          image='/execs/default.webp'
          bio='3nd year Management student specializing in Accounting. Favourite sports: Basketball and football. Favourite team: Toronto Raptors'
          linkedin='https://www.linkedin.com/in/aiden-loh/'
        ></ExecutiveCard>

      </div>

      <Footer />
    </main>
  );
}
