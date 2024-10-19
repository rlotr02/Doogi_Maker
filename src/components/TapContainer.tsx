import { TSelectedImage } from '@/types/ImageType';
import * as S from '@styles/TapContainerStyle';

const TapContainer = ({
  selectedBar,
  selectedImage,
  setSelectedImage,
}: {
  selectedBar: number;
  selectedImage: TSelectedImage;
  setSelectedImage: React.Dispatch<React.SetStateAction<TSelectedImage>>;
}) => {
  return <S.Container></S.Container>;
};

export default TapContainer;
