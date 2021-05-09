export interface GalleryImage {
  image_id: number;
  src: string;
}

export interface Comment {
  name: string;
  id: number;
  image_id: number;
  description: string;
}

export interface IAction {
  type: string;
  payload: GalleryImage[];
}

export interface IStateGallery {
  isLoading: boolean;
  data: GalleryImage[];
}

export interface IStateModal {
  isLoading: boolean;
  data: {
    activeImageId: number;
    linkToImage: string;
    comments: Comment[];
  };
}
export interface IState {
  gallery: IStateGallery;
  modal: IStateModal;
}
