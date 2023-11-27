import Image from 'next/image'
import GameComponent from './components/GameComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GameComponent
        title="My Game"
        description="This is my awesome game"
        gameUrl="/gameFiles/monstersPuzzleEscape.html"
      />
    </main>
  )
}
