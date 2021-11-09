import React from 'react';
import {useSelector} from 'react-redux';
import GalleryItem from './items/GalleryItem';
import {PhotoData, PhotoState} from '../Redux/helpers';

const Favorites = () => {
  const photos = useSelector((state: PhotoState) => state.photos);
  const favorites = photos.filter((photo: PhotoData) => photo.isLiked);

  return (
    <>
      <GalleryItem data={favorites} />
    </>
  );
};

export default Favorites;
