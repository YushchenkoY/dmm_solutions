import React from 'react';
import { IStateGallery } from '../../types';

interface IProps {
  gallery: IStateGallery['data'];
  onClickItem: (id: number) => void;
}

const Gallery = ({ gallery, onClickItem }: IProps) => {
  return (
    <div className="galleryWrapper ">
      {gallery.map((item) => {
        const linkToImage = item.src;
        const id = item.image_id;
        return (
          <div
            key={id}
            className="gallery_item"
            onClick={() => onClickItem(id)}
          >
            <img src={linkToImage} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
