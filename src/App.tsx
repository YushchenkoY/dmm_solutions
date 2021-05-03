import './App.css';
import Title from './components/Title'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IGalleryState, IModalState, State } from './types';
import { GALLERY_FETCHING, MODAL_DETAILS_FETCHING, sendCommentSuccess } from './redux/actions/galleryAction';

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
    dispatch(sendCommentSuccess( name, description));
    setName('')
    setDescription('')
};




  return (
    <div className="App">
      <Title />
      <div className='galleryWrapper'>
        {gallery.map(item => {
          const linkToImage = item.src
          const id = item.image_id
          return (
            <div onClick={() => dispatch({ type: MODAL_DETAILS_FETCHING, payload: id })}>
              <img src={linkToImage} />
            </div>
          )
        })}
      </div>
      <div className='modal'>
        <img src={modalDetails.linkToImage.src} />
        <div>
          <h3>Comments</h3>
          {modalDetails.comments.map(item => {
            return (
              <div>
                <div>{item.name}</div>
                <div>{item.description}</div>
              </div>
            )
          })}
          <form>
            <textarea value={name} onChange={(e) => setName(e.target.value)} />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={handleButtonClick}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
