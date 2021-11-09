export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const GET_PHOTOS = 'GET_PHOTOS';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';

export interface PhotoState {
  loading: boolean;
  photos: PhotoData[];
}

export interface PhotoData {
  id: string;
  photo: any;
  isLiked: boolean;
}

export interface PhotoAction {
  type: string;
  payload?: any;
}

export type FavoritesPayload = {
  id: string;
};
