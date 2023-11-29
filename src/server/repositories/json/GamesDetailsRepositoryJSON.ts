import fs from 'node:fs';
import { GameDetail, IGamesDetailsRepository } from '../IGamesDetailsRepository';
import path from 'node:path';


export class GamesDetailsRepositoryJSON implements IGamesDetailsRepository {
  private filename = 'gamesDetails.json';

  private getGamesDetailsFromFile() {
    const gamesDetails: GameDetail[] = JSON.parse(
      fs.readFileSync(
        path.join(
          'src',
          'server',
          'repositories',
          'json',
          this.filename
        ),
        'utf8'
      )
    );
    return gamesDetails;
  }


  public getAll(): GameDetail[] {
    return [...this.getGamesDetailsFromFile()];
  }

  getById(id: string): GameDetail | null {
    const gameDetails = this.getGamesDetailsFromFile();
    return gameDetails.find((gameDetail) => gameDetail.id == id) ?? null;
  }
}
