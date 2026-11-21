import Image from "next/image";
import Link from "next/link";

import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { PiLinktreeLogoFill } from "react-icons/pi";

export default function AboutHero() {
  return (
    <section className="bg-sba-dark-red px-5 py-10 text-white sm:px-8 sm:py-14 lg:px-12 lg:py-16">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="w-full overflow-hidden rounded-lg shadow-xl ring-1 ring-white/15">
          <Image
            //src="/sba_logo_background.webp"
            src="/execs/team/team_photo2.webp"
            alt="The UTSC Sports Business Association executive team"
            width={1200}
            height={600}
            className="block h-auto w-full scale-[1.03] object-contain"
            fetchPriority="high"
            loading="eager"
          />
        </div>

        <div className="mx-auto w-full max-w-2xl lg:mx-0">
          <h1 className="text-center text-2xl font-bold leading-tight sm:text-3xl lg:text-left lg:text-4xl">
            UTSC Sports Business Association
          </h1>

          <p className="my-5 text-left text-sm font-sans leading-relaxed text-white/90 sm:my-6 sm:text-base">
            The Sports Business Association is a student-led organization dedicated to helping students explore 
            and gain experience in the dynamic world behind sports from business, marketing, and operations to nutrition, 
            media, and performance management. Our mission is to build a fun, inclusive, and professional environment 
            where members can learn, collaborate, and grow through hands-on opportunities, creative projects, and 
            meaningful discussions. We strive to empower all students regardless of background or major to find their 
            place in the sports industry and develop real-world skills and confidence to pursue their passions.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3 lg:items-start">
            <Link
              href="https://sop.utoronto.ca/group/copy-of-utsc-sports-business-association-student-group-sba/"
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-full break-words text-center text-sm font-semibold underline decoration-white/70 underline-offset-4 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-left sm:text-base"
            >
              Visit us on the UofT Student Organization Portal
            </Link>

            <nav aria-label="Social links" className="flex shrink-0 items-center justify-center gap-4 text-white">
              <Link href="https://www.instagram.com/utscsportsbusiness/" className="transition duration-200 hover:scale-110" title="Instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={25} />
              </Link>
              <Link href="https://www.linkedin.com/company/utsc-sports-business-association" className="transition duration-200 hover:scale-110" title="LinkedIn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={25} />
              </Link>
              <Link href="https://linktr.ee/utsc.sba" className="transition duration-200 hover:scale-110" title="Linktree" aria-label="Linktree" target="_blank" rel="noopener noreferrer">
                <PiLinktreeLogoFill size={25} />
              </Link>
            </nav>
          </div>

        </div>

      </div>
    </section>
  );
}
