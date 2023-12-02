import React from 'react';
import GameComponent from '@/app/components/GameComponent';

async function getData(gameId: string) {
  console.log(gameId);
  const res = await fetch(process.env.NEXT_PUBLIC_URL + `/api/game/${gameId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function GamePage({ params }: { params: { gameId: string } }) {
  const { gameId } = params;
  const data = await getData(gameId);
  console.log(data);

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
