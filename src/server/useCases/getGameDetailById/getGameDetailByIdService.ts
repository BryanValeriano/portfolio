import { GameDetail, IGamesDetailsRepository } from '@/server/repositories/IGamesDetailsRepository';

type Dependencies = {
  gamesDetailsRepository: IGamesDetailsRepository;
}

export default class GetGameDetailByIdService {
  private gamesDetailsRepository: IGamesDetailsRepository;

  constructor({ gamesDetailsRepository }: Dependencies) {
    this.gamesDetailsRepository = gamesDetailsRepository;
  }

  public execute(id: string): GameDetail | null {
    const gameDetail = this.gamesDetailsRepository.getById(id);
    return gameDetail;
  }
}
