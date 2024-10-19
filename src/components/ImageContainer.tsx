import * as S from '@/styles/ImageContainerStyle';
import GithubIcon from '@icons/github.svg?react';
import InstagramIcon from '@icons/instagram.svg?react';
import TistoryIcon from '@icons/tistory.svg?react';
import LinkIcon from '@icons/link.svg?react';
import DownloadIcon from '@icons/download.svg?react';
import { TSelectedImage } from '@/types/ImageType';
import { ImageItem } from '@/constants/ImageItem';

const ImageContainer = ({
  selectedImage,
}: {
  selectedImage: TSelectedImage;
}) => {
  return (
    <S.Container>
      <S.ImageWrap>
        <img src={ImageItem[8][selectedImage.background]} />
        <img src={ImageItem[0][selectedImage.body]} />
        <img src={ImageItem[1][selectedImage.eyes]} />
        <img src={ImageItem[3][selectedImage.faceDress]} />
        <img src={ImageItem[2][selectedImage.mouth]} />
        <img src={ImageItem[7][selectedImage.shoes]} />
        <img src={ImageItem[6][selectedImage.clothes]} />
        <img src={ImageItem[4][selectedImage.handDress]} />
        <img src={ImageItem[5][selectedImage.headDress]} />
      </S.ImageWrap>
      <S.RightWrap>
        <S.IconWrap>
          <GithubIcon
            onClick={() => window.open('https://github.com/rlotr02', '_blank')}
          />
          <InstagramIcon
            onClick={() =>
              window.open('https://www.instagram.com/rlotr.dev', '_blank')
            }
          />
          <TistoryIcon
            onClick={() => window.open('https://rlotr.tistory.com', '_blank')}
          />
          <LinkIcon
            onClick={() => window.open('https://litt.ly/rlotr02', '_blank')}
          />
        </S.IconWrap>
        <DownloadIcon style={{ marginBottom: 3 }} />
      </S.RightWrap>
    </S.Container>
  );
};

export default ImageContainer;
