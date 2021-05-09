import './App.css';
import React, { useEffect, useState, SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStateGallery, IStateModal, IState } from './types';
import {
  fetchingModalDetails,
  fetchingGallery,
  sendCommentRequest
} from './redux/actions/galleryAction';
import Gallery from './components/Gallery';
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();
  const gallery = useSelector<IState, IStateGallery['data']>(
    (state) => state.gallery.data
  );
  const modalDetails = useSelector<IState, IStateModal['data']>(
    (state) => state.modal.data
  );

  useEffect(() => {
    dispatch(fetchingGallery());
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddComment = (name: string, description: string) => {
    dispatch(sendCommentRequest(modalDetails.activeImageId, name, description));
  };

  const handleClickGalleryItem = (id: number) => {
    setModalOpen(true);
    dispatch(fetchingModalDetails(id));
  };

  const handleClickClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <h1 className="Title">Test App</h1>
      <Gallery gallery={gallery} onClickItem={handleClickGalleryItem} />

      {/* MODAL DIALOG */}
      {isModalOpen && (
        <Modal
          modalDetails={modalDetails}
          onClickClose={handleClickClose}
          onAddComment={handleAddComment}
        />
      )}
    </div>
  );
}

export default App;
