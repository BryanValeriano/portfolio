import { IGamesDetailsRepository } from './repositories/IGamesDetailsRepository';
import { GamesDetailsRepositoryJSON } from './repositories/json/GamesDetailsRepositoryJSON';

interface IContainer {
  gamesDetailsRepository: IGamesDetailsRepository;
}

const dev: IContainer = {
  gamesDetailsRepository: new GamesDetailsRepositoryJSON()
};

const test: IContainer = {
  gamesDetailsRepository: new GamesDetailsRepositoryJSON()
};

const prod: IContainer = {
  gamesDetailsRepository: new GamesDetailsRepositoryJSON()
};

export function container(): IContainer {
  const mode = process.env.MODE || 'dev';

  switch (mode) {
  case 'dev':
    return dev;
  case 'prod':
    return prod;
  case 'test':
    return test;
  default:
    throw new Error('Invalid mode');
  }
}
