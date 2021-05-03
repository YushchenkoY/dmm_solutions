import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IGalleryState, IModalState, State } from './types';
import { GALLERY_FETCHING, MODAL_DETAILS_FETCHING, sendCommentRequest } from './redux/actions/galleryAction';

function App() {
  const dispatch = useDispatch();
  const gallery = useSelector<State, IGalleryState['data']>(state => state.gallery.data);
  const modalDetails = useSelector<State, IModalState['data']>(state => state.modal.data)

  useEffect(() => {
    dispatch({ type: GALLERY_FETCHING });
  }, []);


  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  // @ts-ignore
  const handleButtonClick = (e) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(sendCommentRequest( name, description));
    setName('')
    setDescription('')
  };

  return (
    <div className="App">
      <h1 className="Title">Test App</h1>
      <div className='galleryWrapper '>
        {gallery.map(item => {
          const linkToImage = item.src
          const id = item.image_id
          return (
            <div className='gallery_item' onClick={() => dispatch({ type: MODAL_DETAILS_FETCHING, payload: id })}>
              <img src={linkToImage} />
            </div>
          )
        })}
      </div>
      <div className='modal'>
    <button  className='close' onClick={()=>{}}></button>

        <div className='modal_data'>
          <img className='modal_data__img'src={modalDetails.linkToImage.src} />
          <div className='modal_data__comment comment_wrapper'>
            {modalDetails.comments.map(item => {
              return (
                <div className='comment'>
                  <div className='comment_name'>{item.name}</div>
                  <div className='comment_description'>{item.description}</div>
                </div>
              )
            })}
          </div>
        </div>
        <form>
          <textarea value={name} onChange={(e) => setName(e.target.value)} />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          <button onClick={handleButtonClick}>Add a comment</button>

        </form>

      </div>
    </div>
  );
}

export default App;
