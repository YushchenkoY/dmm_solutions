import './App.css';
import Title from './components/Title.tsx'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const gallery = useSelector<State>(state => state.gallery.data);


  return (
    <div className="App">
      <Title />
      <div className='galleryWrapper'>
        {gallery.slice(0).reverse().map(image => {
          return (
            <ul className='image'>
              <li>
                <a>
                  <img scr={image.src} />
                </a>
              </li>
            </ul>
          )
        })}
      </div>
    </div>
  );
}

export default App;
