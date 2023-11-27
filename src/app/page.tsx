import GamePreview from './components/GamePreview'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GamePreview
        gameId="teste"
        title="My Game"
        previewImageUrl="/previewImages/monstersPuzzleEscape.png"
      />
    </main>
  )
}
