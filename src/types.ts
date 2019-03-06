export interface Card {
  name: string;
}

export interface AvailableCard extends Card {
  imageData: ArrayBuffer;
  image: string;
}

export interface UnavailableCard extends Card {
  error: string;
}

export interface CardState {
  available: AvailableCard[];
  unavailable: UnavailableCard[];
}

export type UpdateValueFunc = (input: string) => void;

export type UpdateCardsFunc = (names: string[]) => void;

export type RemoveCardFunc = (name: string) => void;

export type DownloadZipFunc = () => void;
