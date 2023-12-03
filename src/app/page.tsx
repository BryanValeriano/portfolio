import { GameDetail } from '@/server/repositories/IGamesDetailsRepository';
import GamePreview from './components/GamePreview';

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/gamesdetails', {
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

export default async function Home() {
  const data = await getData();
  const gamesDetails: GameDetail[] = data.gamesDetails;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {gamesDetails.map((game) => (
        <GamePreview
          key={game.id}
          gameId={game.id}
          title={game.title}
          previewImageUrl={game.previewImageUrl}
        />
      ))}
    </div>
  );
}
