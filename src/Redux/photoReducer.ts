import {
  FETCH_PHOTOS,
  GET_PHOTOS,
  ADD_TO_FAVORITES,
  PhotoState,
  PhotoAction,
  PhotoData,
  FavoritesPayload,
} from './helpers';

const initialState: PhotoState = {
  loading: false,
  photos: [],
};

const photoReducer = (state = initialState, action: PhotoAction) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return {...state, loading: true};
    case GET_PHOTOS:
      const photos = action.payload.map((photoItem: PhotoData) => {
        return {
          id: photoItem.id,
          photo: photoItem.urls.regular,
          isLiked: false,
        };
      });
      return {...state, loading: false, photos};
    case ADD_TO_FAVORITES:
      const item = state.photos.map((photo: PhotoData) =>
        photo.id === action.payload.id
          ? {...photo, isLiked: !photo.isLiked}
          : {...photo},
      );
      return {...state, photos: item};
  }
  return state;
};

export const fetchPhotos = () => ({type: FETCH_PHOTOS});
export const getPhotos = (payload: any) => ({type: GET_PHOTOS, payload});
export const addToFavorites = (payload: FavoritesPayload) => ({
  type: ADD_TO_FAVORITES,
  payload,
});
export default photoReducer;
