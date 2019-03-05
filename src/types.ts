export interface Card {
  name: string;
}

export interface AvailableCard extends Card {
  imageData: ArrayBuffer;
  image: string;
  thumbnail: string;
}

export interface UnavailableCard extends Card {
  error: string;
}

export interface CardState {
  available: AvailableCard[];
  unavailable: UnavailableCard[];
}

export type UpdateCardsFunc = (names: string[]) => void;

export type RemoveCardFunc = () => void;

export type DownloadZipFunc = () => void;
