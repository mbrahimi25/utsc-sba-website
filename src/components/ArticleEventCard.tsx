import Link from "next/link";
import Image from "next/image";

interface CardProps {
  title: string;
  image: string;
  link: string;
  description: string;
  date?: string; // Optional: helpful if you want to display an event date or publish date
}

export default function ArticleEventCard({ title, image, link, description, date }: CardProps) {
  return (
    <Link 
      href={link}
      className="group block w-full overflow-hidden shadow-lg bg-white border border-gray-100 transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative w-full h-48 sm:h-56 bg-gray-200 overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6">
        {/* Optional Date / Tag */}
        {date && (
          <span className="inline-block text-gray-500 text-xs font-semibold mb-2">
            {date}
          </span>
        )}

        {/* Title (Changes color on hover) */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-sba-red transition-colors line-clamp-2">
          {title}
        </h3>

        {/* 1-2 Sentence Breakdown */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}