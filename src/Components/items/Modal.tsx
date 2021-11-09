import React from 'react';
import {Modal, StyleSheet, View, Image} from 'react-native';
import BackIcon from '../../icons/BackIcon';
import {ModalItemType} from './ItemsTypes/types';

const ModalItem: React.FC<ModalItemType> = ({
  isModalVisible,
  setIsModalVisible,
  modalImage,
}) => {
  return (
    <Modal animationType={'fade'} transparent={true} visible={isModalVisible}>
      <View style={style.modal}>
        <BackIcon onPress={() => setIsModalVisible(false)} />
        <Image source={{uri: modalImage}} style={style.modalImage} />
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  modalImage: {
    flex: 1,
    marginTop: 3,
  },
  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  modalText: {
    color: 'white',
  },
});

export default ModalItem;
