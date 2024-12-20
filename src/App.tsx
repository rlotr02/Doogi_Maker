import './App.css';
import { useEffect, useState } from 'react';
import Header from '@components/Header';
import ImageContainer from '@components/ImageContainer';
import Tap from '@components/Tap';
import TapContainer from '@components/TapContainer';
import { TSelectedImage } from '@/types/ImageType';
import { ImageItem } from './constants/ImageItem';
import Loading from './components/Loading';
import KakaoAdfitLeft from './components/adfit/KakaoAdfitLeft';
import KakaoAdfitRight from './components/adfit/KakaoAdfitRight';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
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
  const [bodyColor, setBodyColor] = useState('#AFB8D7');

  useEffect(() => {
    const preloadImages = () => {
      const totalImages = ImageItem.flat().length;
      let loadedImages = 0;

      ImageItem.flat().forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedImages += 1;
          if (loadedImages === totalImages) {
            setIsLoading(false);
          }
        };
      });
    };

    preloadImages();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="div-wrapper">
          <div className="ad-wrapper">
            <KakaoAdfitLeft />
          </div>
          <div className="main-wrapper">
            <Header />
            <ImageContainer
              selectedImage={selectedImage}
              bodyColor={bodyColor}
            />
            <Tap selectedBar={selectedBar} setSelectedBar={setSelectedBar} />
            <TapContainer
              selectedBar={selectedBar}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              bodyColor={bodyColor}
              setBodyColor={setBodyColor}
            />
          </div>
          <div className="ad-wrapper">
            <KakaoAdfitRight />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
