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
  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GamePreview
        gameId="teste"
        title="My Game"
        previewImageUrl="/previewImages/monstersPuzzleEscape.png"
      />
    </main>
  );
}
