import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToFavorites} from '../../Redux/photoReducer';
import FlatListItem from './FlatListItem';
import {GalleryItemType} from './ItemsTypes/types';
import ModalItem from './Modal';

const GalleryItem: React.FC<GalleryItemType> = ({data}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const dispatch = useDispatch();

  const setModalVisible = (visible: boolean, index: number) => {
    setModalImage(data[index].photo);
    setIsModalVisible(visible);
  };

  const setFilled = (id: string) => {
    dispatch(addToFavorites(id));
  };

  return (
    <>
      <ModalItem
        isModalVisible={isModalVisible}
        modalImage={modalImage}
        setIsModalVisible={setIsModalVisible}
      />
      <FlatListItem
        photos={data}
        setModalVisible={setModalVisible}
        setFilled={setFilled}
      />
    </>
  );
};

export default GalleryItem;
