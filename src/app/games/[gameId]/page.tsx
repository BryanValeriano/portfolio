import React from 'react';
import GameComponent from '@/app/components/GameComponent';

export default function GamePage({ params }: { params: { gameId: string } }) {
  const { gameId } = params;

  // fetch from api
  const gameDetails = {
    id: gameId,
    title: 'Monsters Puzzle',
    description: 'Awesome game',
    gameUrl: '/gameFiles/monstersPuzzleEscape.html',
    previewImageUrl: '/previewImages/monstersPuzzleEscape.png',
  };

  return (
    <div>
      <h1>
        Game:
        {gameId}
      </h1>
      <GameComponent {...gameDetails} />
    </div>
  );
}
