import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {FlatListItemTypes} from './ItemsTypes/types';
import PhotoItem from './PhotoItem';

const FlatListItem: React.FC<FlatListItemTypes> = ({
  photos,
  setModalVisible,
  setFilled,
}) => {
  return (
    <FlatList
      data={photos}
      style={style.container}
      numColumns={3}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => (
        <PhotoItem
          id={item.id}
          setModalVisible={setModalVisible}
          setFilled={setFilled}
          index={index}
          photo={item.photo}
          isLiked={item.isLiked}
          item={item}
        />
      )}
    />
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
});

export default FlatListItem;
