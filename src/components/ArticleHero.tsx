import Image from "next/image";
import Divider from "@/components/Divider";

interface ArticleHeroProps {
  title: string;
  author: string;
  image: string;
  width: number;
  height: number;
  caption: string;
  alt: string;
  date: string;
}

export default function ArticleHero({ title, author, image, width, height, caption, alt, date }: ArticleHeroProps) {
  return (
    <section className="w-full">
      {/* Red Header Div */}
      <div className="w-full p-6 md:p-10 bg-sba-dark-red text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl mx-auto leading-tight">
          {title}
        </h1>

        <p className="mt-4 text-sm md:text-base font-sans text-white/90 text-center">
          By <span className="font-semibold">{author}</span> <br/>
          {date}
        </p>
      </div>

      {/* Image & Caption Section (Outside the red div) */}
      <div className="w-full px-4 md:px-6 mt-8 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <Image
            src={image}
            alt={alt}
            height={height}
            width={width}
            className="w-full h-auto max-h-[600px] object-cover shadow-md"
            priority
          />
          {caption && (
            <p className="mt-2 text-xs md:text-sm font-sans text-white/70 text-left">
              {caption}
            </p>
          )}
        </div>
      </div>

      <Divider />
    </section>
  );
}