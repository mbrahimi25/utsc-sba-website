import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="w-full p-6 md:p-8 flex flex-col lg:flex-row items-center bg-sba-dark-red text-white">
      {/* Image container: stacks on top for mobile, shifts to left on large screens */}
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <Image
          src="/sba_logo_background.webp"
          alt="Sports Business Association logo"
          width={1200}
          height={600}
          className="w-full h-auto object-contain lg:ml-6"
          fetchPriority="high"
          loading="eager"
        />
      </div>

      {/* Text container: stacks below for mobile, shifts to right on large screens */}
      <div className="w-full lg:w-1/2 px-2 md:px-6">
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-center lg:text-left">
          UTSC Sports Business Association
        </h1>

        <p className="my-6 text-sm md:text-base font-sans text-white/90 leading-relaxed text-left">
          The Sports Business Association is a student-led organization dedicated to helping students explore 
          and gain experience in the dynamic world behind sports from business, marketing, and operations to nutrition, 
          media, and performance management. Our mission is to build a fun, inclusive, and professional environment 
          where members can learn, collaborate, and grow through hands-on opportunities, creative projects, and 
          meaningful discussions. We strive to empower all students regardless of background or major to find their 
          place in the sports industry and develop real-world skills and confidence to pursue their passions.
        </p>

        <a
          href="https://sop.utoronto.ca/group/utsc-sports-business-association-student-group-sba/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block max-w-full text-center text-sm md:text-base font-semibold underline underline-offset-4 decoration-white/70 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white break-words"
        >
          Visit us on the UofT Student Organization Portal
        </a>
      </div>
    </section>
  );
}
