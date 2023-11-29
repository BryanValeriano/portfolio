import { GameDetail, IGamesDetailsRepository } from '@/server/repositories/IGamesDetailsRepository';

type Dependencies = {
  gamesDetailsRepository: IGamesDetailsRepository;
}

export default class GetAllGamesDetailsService {
  private gamesDetailsRepository: IGamesDetailsRepository;

  constructor({ gamesDetailsRepository }: Dependencies) {
    this.gamesDetailsRepository = gamesDetailsRepository;
  }

  public execute(): GameDetail[] {
    const gamesDetails = this.gamesDetailsRepository.getAll();
    return gamesDetails;
  }
}
