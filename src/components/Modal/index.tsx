import React, { useState, SyntheticEvent } from 'react';
import { IStateModal } from '../../types';

interface IProps {
  modalDetails: IStateModal['data'];
  onClickClose: () => void;
  onAddComment: (name: string, description: string) => void;
}

const Modal = ({ modalDetails, onClickClose, onAddComment }: IProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="modal">
      <button className="close" onClick={onClickClose} />

      <div className="modal_data">
        <img className="modal_data__img" src={modalDetails.linkToImage} />
        <div className="modal_data__comment comment_wrapper">
          {modalDetails.comments.map((item) => {
            return (
              <div className="comment" key={item.id}>
                <div className="comment_name">{item.name}</div>
                <div className="comment_description">{item.description}</div>
              </div>
            );
          })}
        </div>
      </div>
      <form>
        <textarea value={name} onChange={(e) => setName(e.target.value)} />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={(e: SyntheticEvent) => {
            e.preventDefault();

            onAddComment(name, description);
            setName('');
            setDescription('');
          }}
        >
          Add a comment
        </button>
      </form>
    </div>
  );
};

export default Modal;
