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
          name='Kyrie Ou'
          position='Events Director'
          image='/execs/kyrie_ou.jpeg'
          linkedin='https://www.linkedin.com/in/kyrieouoft/'
          bio='2nd year student majoring in Statistics. Favorite sport: Basketball'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Elena Parennas'
          position='Events VP Director'
          image='/execs/default.jpg'
          linkedin='https://www.linkedin.com/in/elena-parrenas'
          bio='3rd year Business Management student. Favorite sport: Soccer. Favorite team: FC Barcelona'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Audrey Sun'
          position='Marketing & Photography'
          image='/execs/audrey_sun.jpeg'
          linkedin='https://www.linkedin.com/in/audrey-sun-6a3655320/'
          bio='2nd year MIB BBA student. Favorite sport: Skating'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Sample Exec 4'
          position='Sample Position'
          image='/execs/default.jpg'
          linkedin='https://www.linkedin.com/'
          bio='Sample Description'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Sample Exec 5'
          position='Sample Position'
          image='/execs/default.jpg'
          linkedin='https://www.linkedin.com/'
          bio='Sample Description'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Sample Exec 6'
          position='Sample Position'
          image='/execs/default.jpg'
          linkedin='https://www.linkedin.com/'
          bio='Sample Description'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Sample Exec 7'
          position='Sample Position'
          image='/execs/default.jpg'
          linkedin='https://www.linkedin.com/'
          bio='Sample Description'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Sample Exec 8'
          position='Sample Position'
          image='/execs/default.jpg'
          linkedin='https://www.linkedin.com/'
          bio='Sample Description'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Sample Exec 9'
          position='Sample Position'
          image='/execs/default.jpg'
          linkedin='https://www.linkedin.com/'
          bio='Sample Description'
        ></ExecutiveCard>

      </div>

      <Footer />
    </main>
  );
}
