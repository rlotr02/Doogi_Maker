import * as S from '@/styles/ImageContainerStyle';
import GithubIcon from '@icons/github.svg?react';
import InstagramIcon from '@icons/instagram.svg?react';
import HomeIcon from '@icons/home.svg?react';
import LinkIcon from '@icons/link.svg?react';
import DownloadIcon from '@icons/download.svg?react';
import { TSelectedImage } from '@/types/ImageType';
import { ImageItem } from '@/constants/ImageItem';
import { useRef } from 'react';

const ImageContainer = ({
  selectedImage,
}: {
  selectedImage: TSelectedImage;
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const images = [
    ImageItem[8][selectedImage.background],
    ImageItem[0][selectedImage.body],
    ImageItem[1][selectedImage.eyes],
    ImageItem[3][selectedImage.faceDress],
    ImageItem[2][selectedImage.mouth],
    ImageItem[7][selectedImage.shoes],
    ImageItem[6][selectedImage.clothes],
    ImageItem[4][selectedImage.headDress],
    ImageItem[5][selectedImage.handDress],
  ];

  //이미지 다운로드
  const handleDownload = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = 1000;
    canvas.height = 1000;

    const loadImages = images.map(src => {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = reject;
      });
    });

    try {
      const loadedImages = await Promise.all(loadImages);

      loadedImages.forEach(img => {
        if (ctx) ctx.drawImage(img, 0, 0);
      });

      const imageDataUrl = canvas.toDataURL('image/png');
      downloadImage(imageDataUrl);
    } catch (error) {
      console.error('이미지 로드에 실패했습니다.', error);
    }
  };

  const downloadImage = (dataUrl: string) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'doogi.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <S.Container>
      <S.ImageWrap>
        {images.map((data, index) => {
          return <img src={data} key={index} />;
        })}
      </S.ImageWrap>
      <S.RightWrap>
        <S.IconWrap>
          <HomeIcon
            onClick={() =>
              window.open('https://www.instagram.com/doogi_official')
            }
          />
          <GithubIcon
            onClick={() => window.open('https://github.com/rlotr02')}
          />
          <InstagramIcon
            onClick={() => window.open('https://www.instagram.com/rlotr.dev')}
          />
          <LinkIcon onClick={() => window.open('https://litt.ly/rlotr02')} />
        </S.IconWrap>
        <DownloadIcon
          style={{ marginBottom: 3, cursor: 'pointer' }}
          onClick={handleDownload}
        />
      </S.RightWrap>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </S.Container>
  );
};

export default ImageContainer;
