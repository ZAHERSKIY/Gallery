import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import FilledHeartIcon from '../../icons/FilledHeartIcon';
import HeartIcon from '../../icons/HearIcon';
import {useDispatch} from 'react-redux';
import {addToFavorites} from '../../Redux/photoReducer';
import {PhotoItemType} from './ItemsTypes/types';

const PhotoItem: React.FC<PhotoItemType> = ({
  id,
  setModalVisible,
  setFilled,
  index,
  photo,
  isLiked,
  item,
}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={style.list}
      key={id}
      onPress={() => {
        setModalVisible(true, index);
      }}>
      <View>
        <ImageBackground source={{uri: photo}} style={style.image}>
          <TouchableOpacity
            onPress={() => {
              dispatch(addToFavorites(item));
              setFilled(item.id);
            }}>
            {isLiked ? <FilledHeartIcon /> : <HeartIcon />}
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  list: {
    padding: 4,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  image: {
    borderColor: '#fff',
    width: 100,
    height: 100,
  },
});

export default PhotoItem;
