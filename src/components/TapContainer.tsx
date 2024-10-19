import * as S from '@styles/TapContainerStyle';
import { ImageItem } from '@/constants/ImageItem';
import { NavigationBarItem } from '@/constants/NavigationBarItem';
import { TSelectedImage } from '@/types/ImageType';
import CancelIcon from '@icons/cancel.svg?react';
import { useState } from 'react';

const TapContainer = ({
  selectedBar,
  selectedImage,
  setSelectedImage,
}: {
  selectedBar: number;
  selectedImage: TSelectedImage;
  setSelectedImage: React.Dispatch<React.SetStateAction<TSelectedImage>>;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <S.Container>
      {ImageItem[selectedBar].map((data, index) => {
        const imageKey = NavigationBarItem[selectedBar].image;
        const isSelected = selectedImage[imageKey] === index;

        return (
          <S.ImageWrap
            key={index}
            onClick={() =>
              setSelectedImage(prevState => ({
                ...prevState,
                [NavigationBarItem[selectedBar].image]: index,
              }))
            }
            $selected={isSelected}
          >
            {data === '/src/assets/images/parts/None.png' ? (
              <CancelIcon
                color={isSelected ? 'var(--Icon)' : 'var(--Default)'}
              />
            ) : (
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '100%',
                }}
              >
                <img
                  src={data}
                  onLoad={() => {
                    setIsLoaded(true);
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: isLoaded ? 1 : 0,
                    borderRadius: isSelected ? 8 : 8.5,
                  }}
                />
              </div>
            )}
          </S.ImageWrap>
        );
      })}
    </S.Container>
  );
};

export default TapContainer;
