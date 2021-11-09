import React, {useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {PhotoState} from '../Redux/helpers';
import {fetchPhotos} from '../Redux/photoReducer';
import GalleryItem from './items/GalleryItem';

const Gallery = () => {
  const photos = useSelector((state: PhotoState) => state.photos);
  const loading = useSelector((state: PhotoState) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <View style={style.indicator}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <GalleryItem data={photos} />
      )}
    </>
  );
};

const style = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Gallery;
