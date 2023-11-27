"use client"

import { useState } from 'react';

interface GameProps {
  title: string;
  description: string;
  gameUrl: string;
}

export default function GameComponent({ title, description, gameUrl }: GameProps) {
  const [iframeSrc, setIframeSrc] = useState(gameUrl);

  const refreshGame = () => {
    setIframeSrc(''); // Set src to empty to trigger unload
    setTimeout(() => setIframeSrc(gameUrl), 10); // Then set it back to gameUrl
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold">{title}</h2>
      <p>{description}</p>
      <div className="mt-2">
        <iframe
          src={iframeSrc}
          width="100%"
          height="400px"
          frameBorder="0"
          allowFullScreen>
        </iframe>
        <button onClick={refreshGame} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Refresh Game
        </button>
      </div>
    </div>
  );
};
