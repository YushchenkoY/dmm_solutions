import './App.css';
import Title from './components/Title'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IGalleryState, IModalState, State } from './types';
import { GALLERY_FETCHING, MODAL_DETAILS_FETCHING } from './redux/actions/galleryAction';

function App() {
  const dispatch = useDispatch();
  const gallery = useSelector<State, IGalleryState['data']>(state => state.gallery.data);

  const modalDetails = useSelector<State, IModalState['data']>(state => state.modal.data)

  useEffect(() => {
    dispatch({type: GALLERY_FETCHING});
  }, []);

  return (
    <div className="App">
      <Title />
      <div className='galleryWrapper'>
        {gallery.map(item => {
          const linkToImage = item.src
          const id = item.image_id
          return (
            <div onClick = {() => dispatch({type: MODAL_DETAILS_FETCHING, payload: id})}>
              <img src={linkToImage} />
            </div>                
          )
        })}
      </div>
      <div className='modal'>
        <img src={modalDetails.linkToImage.src}/>
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
        </div>
      </div>
    </div>
  );
}

export default App;
