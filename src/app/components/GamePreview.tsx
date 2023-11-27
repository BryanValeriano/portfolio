import React from 'react';
import Link from 'next/link';

interface GamePreviewProps {
  gameId: string;
  title: string;
  previewImageUrl: string;
}

export default function GamePreview({ gameId, title, previewImageUrl }: GamePreviewProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden border border-gray-600 hover:border-gray-400 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out bg-gray-800">
      <Link href={`/games/${gameId}`}>
        <img className="w-full" src={previewImageUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">{"Play"}</div>
        </div>
      </Link>
    </div>
  );
};
