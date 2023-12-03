import React from 'react';
import Link from 'next/link';

interface GamePreviewProps {
  gameId: string;
  title: string;
  description: string;
  previewImageUrl: string;
}

export default function GamePreview({ gameId, title, description, previewImageUrl }: GamePreviewProps) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg transition duration-300 ease-in-out bg-gray-500 relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url(${previewImageUrl})` }}></div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-3xl"></div> {/* Adjust blur intensity as needed */}

      {/* Content */}
      <Link href={`/games/${gameId}`}>
        <div className="relative z-10 flex flex-col justify-between h-full"> {/* Ensure this content is above the overlay */}
          <img className="w-full h-52 object-cover rounded-xl p-2" src={previewImageUrl} alt={title} />
          <div className="px-4">
            <div className="font-bold text-xl mb-2 text-white">{title}</div>
            <p className="text-white text-base">{description}</p>
          </div>
          {/* Footer with Play Button */}
          <div className="p-2  text-center">
            <button className="text-zinc-500 w-full bg-gray-100 hover:opacity-60 font-bold p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-[1.01]">
              Play
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

