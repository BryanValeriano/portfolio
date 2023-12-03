import React from 'react';
import Link from 'next/link';

interface GamePreviewProps {
  gameId: string;
  title: string;
  previewImageUrl: string;
}

export default function GamePreview({ gameId, title, previewImageUrl }: GamePreviewProps) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out bg-gray-500 relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-75" style={{ backgroundImage: `url(${previewImageUrl})` }}></div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-xl"></div> {/* Adjust blur intensity as needed */}

      {/* Content */}
      <Link href={`/games/${gameId}`}>
        <div className="relative z-10"> {/* Ensure this content is above the overlay */}
          <img className="w-full h-48 object-cover rounded-xl p-2" src={previewImageUrl} alt={title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">{title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
