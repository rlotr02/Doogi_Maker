import * as S from '@styles/TapContainerStyle';
import { ImageItem } from '@/constants/ImageItem';
import { NavigationBarItem } from '@/constants/NavigationBarItem';
import { TSelectedImage } from '@/types/ImageType';
import CancelIcon from '@icons/cancel.svg?react';

const TapContainer = ({
  selectedBar,
  selectedImage,
  setSelectedImage,
}: {
  selectedBar: number;
  selectedImage: TSelectedImage;
  setSelectedImage: React.Dispatch<React.SetStateAction<TSelectedImage>>;
}) => {
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
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
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
