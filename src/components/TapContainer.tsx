import * as S from '@styles/TapContainerStyle';
import { ImageItem } from '@/constants/ImageItem';
import { NavigationBarItem } from '@/constants/NavigationBarItem';
import { TSelectedImage } from '@/types/ImageType';
import CancelIcon from '@icons/cancel.svg?react';
import { useEffect, useRef } from 'react';
//import KakaoAdfitBottom from './adfit/KakaoAdfitBottom';

const TapContainer = ({
  selectedBar,
  selectedImage,
  setSelectedImage,
}: {
  selectedBar: number;
  selectedImage: TSelectedImage;
  setSelectedImage: React.Dispatch<React.SetStateAction<TSelectedImage>>;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  //자동 스크롤
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedBar]);

  return (
    <S.ScrollContainer ref={scrollContainerRef}>
      {/* <KakaoAdfitBottom /> */}
      <S.Container>
        {ImageItem[selectedBar].map((data, index) => {
          const imageKey = NavigationBarItem[selectedBar].image;
          const isSelected = selectedImage[imageKey] === index;

          return (
            <S.ImageWrap
              key={index}
              onClick={() => {
                const newIndex = selectedImage[imageKey] === index ? 0 : index;

                setSelectedImage(prevState => ({
                  ...prevState,
                  [NavigationBarItem[selectedBar].image]: newIndex,
                }));
              }}
              $selected={isSelected}
            >
              {index === 0 && selectedBar !== 8 ? (
                <CancelIcon
                  color={isSelected ? 'var(--Icon)' : 'var(--IconDefault)'}
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
    </S.ScrollContainer>
  );
};

export default TapContainer;
