import Link from "next/link";

import { FaLinkedin } from "react-icons/fa";

interface ExecutiveCardProps {
  name: string;
  position: string;
  image: string;
  linkedin: string;
  bio: string;
}

export default function ExecutiveCard({ name, position, image, linkedin, bio }: ExecutiveCardProps) {
  return (
    <div className="w-full overflow-hidden shadow-lg bg-white border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
      {/* Executive Photo */}
      <div className="relative w-full h-56 sm:h-64 bg-gray-200">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-6">
        {/* Position Badge */}
        <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
          {position}
        </span>

        {/* Name and LinkedIn */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate">{name}</h3>
          <Link 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition duration-200 hover:scale-110 flex-shrink-0 ml-2" 
            title="LinkedIn"
          >
            <FaLinkedin color="black" size={24}/>
          </Link>
        </div>

        {/* Role Description & Bio */}
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  );
}