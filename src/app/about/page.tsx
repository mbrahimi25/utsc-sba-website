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
          name='Kyrie Ou'
          position='Events Director'
          image='/execs/individual/kyrie_head.webp'
          bio='2nd year student majoring in Statistics. Favourite sport: Basketball'
          linkedin='https://www.linkedin.com/in/kyrieouoft/'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Elena Parennas'
          position='Events VP Director'
          image='/execs/individual/elena_head.webp'
          bio='3rd year Business Management student. Favourite sport: Soccer. Favourite team: FC Barcelona'
          linkedin='https://www.linkedin.com/in/elena-parrenas'
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
          name='Samten Loden'
          position='Co-VP of Marketing'
          image='/execs/individual/samten_head1.webp'
          bio='4th year BBA Management student specializing in Human Resources. Favourite sport: Soccer'
          linkedin='http://www.linkedin.com/in/samtenloden'
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
          bio='2nd year Statistics and Computer Science student. Favourite sport: Soccer. Favourite team: Toronto FC'
          linkedin='https://www.linkedin.com/in/mohbrahimi/'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Sample Exec 9'
          position='Sample Position'
          image='/execs/default.webp'
          bio='Sample Description'
          linkedin='https://www.linkedin.com/'
        ></ExecutiveCard>

      </div>

      <Footer />
    </main>
  );
}
