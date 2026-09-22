import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Pattern as HomepageCarousel } from "@/components/examples/homepage_carousel"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <HomepageCarousel />

      <h2 className="mt-12 flex justify-center text-3xl font-bold">Latest</h2>



      <Footer />
    </main>
  );
}
