import Image from "next/image";
import Navbar from "@/components/Navbar";
import AboutCard from "@/components/AboutCard";
import ExecutiveCard from "@/components/ExecutiveCard";
import Footer from "@/components/Footer";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | UTSC SBA',
  description: 'Learn more about the Scarborough campus\' Sports Business Association.',
};

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <AboutCard />

      <h2 className="mt-12 flex justify-center text-3xl font-bold">Meet the Executives</h2>

      <div className="mt-12 flex flex-wrap justify-center gap-4 w-full gap-6">
        <ExecutiveCard
          name='Sample Exec 1'
          position='Sample Position'
          image='/sba_logo.png'
          linkedin='https://www.linkedin.com/'
          bio='Sample Description'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Sample Exec 2'
          position='Sample Position'
          image='/sba_logo.png'
          linkedin='https://www.linkedin.com/'
          bio='Sample Description'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Sample Exec 3'
          position='Sample Position'
          image='/sba_logo.png'
          linkedin='https://www.linkedin.com/'
          bio='Sample Description'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Sample Exec 4'
          position='Sample Position'
          image='/sba_logo.png'
          linkedin='https://www.linkedin.com/'
          bio='Sample Description'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Sample Exec 5'
          position='Sample Position'
          image='/sba_logo.png'
          linkedin='https://www.linkedin.com/'
          bio='Sample Description'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Sample Exec 6'
          position='Sample Position'
          image='/sba_logo.png'
          linkedin='https://www.linkedin.com/'
          bio='Sample Description'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Sample Exec 7'
          position='Sample Position'
          image='/sba_logo.png'
          linkedin='https://www.linkedin.com/'
          bio='Sample Description'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Sample Exec 8'
          position='Sample Position'
          image='/sba_logo.png'
          linkedin='https://www.linkedin.com/'
          bio='Sample Description'
        ></ExecutiveCard>

        <ExecutiveCard
          name='Sample Exec 9'
          position='Sample Position'
          image='/sba_logo.png'
          linkedin='https://www.linkedin.com/'
          bio='Sample Description'
        ></ExecutiveCard>

      </div>

      <Footer />
    </main>
  );
}
