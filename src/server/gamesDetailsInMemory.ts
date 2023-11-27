//TO DO refactor to be a repository

interface GameDetail {
  id: string;
  title: string;
  description: string;
  gameUrl: string;
  previewImageUrl: string; // Single image URL
}

export class GamesDetailsRepositoryInMemory {
  private db: GameDetail[] = [
    {
      id: "1",
      title: "Monsters Puzzle",
      description: "Awesome game",
      gameUrl: "/gameFiles/monstersPuzzleEscape.html",
      previewImageUrl: "/previewImages/monstersPuzzleEscape.png",
    }
  ];

  constructor() { }

  getById(id: string): GameDetail | null {
    const gameDetail = this.db.find((game) => game.id == id) ?? null;
    return gameDetail;
  }
}

