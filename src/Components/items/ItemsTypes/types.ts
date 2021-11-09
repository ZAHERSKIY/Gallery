import {PhotoData} from '../../../Redux/helpers';

export type PhotoItemType = {
  id: string;
  setModalVisible: (visible: boolean, index: number) => void;
  setFilled: (id: string) => void;
  index: number;
  photo: string;
  isLiked: boolean;
  item: PhotoData;
};

export type ModalItemType = {
  isModalVisible: boolean;
  setIsModalVisible: (boo: boolean) => void;
  modalImage: string;
};

export type GalleryItemType = {
  data: PhotoData[];
};

export type FlatListItemTypes = {
  photos: PhotoData[];
  setModalVisible: (visible: boolean, index: number) => void;
  setFilled: (id: string) => void;
};
