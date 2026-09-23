import Image from 'next/image';
import {FaLinkedin} from "react-icons/fa";

interface ExecutiveCardProps {
  name: string;
  position: string;
  image: string;
  linkedin: string;
  bio: string;
}

export default function ExecutiveCard({ name, position, image, linkedin, bio }: ExecutiveCardProps) {
  return (
    <div className="min-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
      {/* Executive Photo */}
      <div className="relative w-full h-64 bg-gray-200">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Position Badge */}
        <span className="inline-block bg-gray-300 text-black text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
          {position}
        </span>

        {/* Name and LinkedIn */}
        <div className="flex">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
          <a href={linkedin} className="transition duration-200 hover:scale-120 ml-4" title="LinkedIn">
            <FaLinkedin color="black" size={25}/>
          </a>
        </div>

        {/* Role Description & Bio */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  );
}