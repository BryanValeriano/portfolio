import path from "node:path";
import { GameDetail, IGamesDetailsRepository } from "../IGamesDetailsRepository";
import fs from 'node:fs/promises'

const databasePath = path.join(__dirname, './gamesDetails.json');

export class GamesDetailsRepositoryJSON implements IGamesDetailsRepository {
  private gameDetails: GameDetail[] = [];

  constructor() {
    fs.readFile(databasePath).then(data => {
      this.gameDetails = JSON.parse(data.toString());
    }).catch(() => {
      this.persist();
    })
  }

  private persist() {
    fs.writeFile(databasePath, JSON.stringify(this.gameDetails));
  }

  public getAll(): GameDetail[] {
    return this.gameDetails;
  }

  getById(id: string): GameDetail | null {
    return this.gameDetails.find((gameDetail) => gameDetail.id == id) ?? null;
  }
}
