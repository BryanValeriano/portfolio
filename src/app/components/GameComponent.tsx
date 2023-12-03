'use client';

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
    <div className="border p-4 rounded-lg shadow-lg flex flex-col items-center">
      <h2 className="text-lg font-bold">{title}</h2>
      <p>{description}</p>
      <div className="mt-2 relative">
        {/* Mobile frame as a background image */}
        <div className="mobile-frame" style={{
          backgroundImage: 'url(/iphone.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: '400px', // Adjust to the width of your mobile frame
          height: '600px', // Adjust to the height of your mobile frame
          position: 'relative'
        }}>
          {/* iframe positioned inside the mobile frame */}
          <iframe
            src={iframeSrc}
            style={{
              position: 'absolute',
              top: '7%',  // Adjust based on your frame's dimensions
              left: '19%',
              width: '62%',  // Adjust based on your frame's dimensions
              height: '82%', // Adjust based on your frame's dimensions
            }}
            allowFullScreen
            title="playable"
          />
        </div>
      </div>
      <button type="button" onClick={refreshGame} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Play Again
      </button>
    </div>
  );
}
