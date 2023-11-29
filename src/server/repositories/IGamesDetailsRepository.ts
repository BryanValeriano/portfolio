export interface GameDetail {
  id: string;
  title: string;
  description: string;
  gameUrl: string;
  previewImageUrl: string; // Single image URL
}

export interface IGamesDetailsRepository {
  getAll(): GameDetail[];
  getById(id: string): GameDetail | null;
}
