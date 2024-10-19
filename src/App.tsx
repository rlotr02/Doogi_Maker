import './App.css';
import { useState } from 'react';
import Header from '@components/Header';
import ImageContainer from '@components/ImageContainer';
import Tap from '@components/Tap';
import TapContainer from '@components/TapContainer';
import { TSelectedImage } from '@/types/ImageType';

const App = () => {
  const [selectedBar, setSelectedBar] = useState(0);
  const [selectedImage, setSelectedImage] = useState<TSelectedImage>({
    body: 0,
    eyes: 0,
    mouth: 0,
    faceDress: 0,
    headDress: 0,
    handDress: 0,
    clothes: 0,
    shoes: 0,
    background: 0,
  });

  return (
    <div>
      <Header />
      <ImageContainer selectedImage={selectedImage} />
      <Tap selectedBar={selectedBar} setSelectedBar={setSelectedBar} />
      <TapContainer
        selectedBar={selectedBar}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </div>
  );
};

export default App;
