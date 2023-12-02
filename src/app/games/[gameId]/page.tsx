import React from 'react';
import GameComponent from '@/app/components/GameComponent';

async function getData(gameId: string) {
  console.log(gameId);
  const res = await fetch(process.env.NEXT_PUBLIC_URL + `/api/game/search?id=${gameId}`, {
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
  const { gameDetails } = await getData(gameId);

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
